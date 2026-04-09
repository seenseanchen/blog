import liveActivity from '@/data/liveActivity'

type GitHubRepo = {
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  pushed_at: string
  fork: boolean
}

type GitHubEvent = {
  created_at: string
}

export type GitHubRepoSummary = {
  name: string
  href: string
  description: string
  language: string | null
  stars: number
  pushedAt: string
}

export type GitHubHeatmapCell = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type GitHubHeatmapMonth = {
  column: number
  label: string
}

export type GitHubLiveActivity = {
  username: string
  profileUrl: string
  repos: GitHubRepoSummary[]
  heatmapMonths: GitHubHeatmapMonth[]
  heatmapWeeks: GitHubHeatmapCell[][]
}

const GITHUB_HEADERS = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'seenseanchen-blog',
}

async function fetchGitHubJson<T>(url: string, revalidate: number): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: GITHUB_HEADERS,
      next: { revalidate },
    })

    if (!response.ok) {
      return null
    }

    return (await response.json()) as T
  } catch {
    return null
  }
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function startOfWeek(date: Date) {
  const value = startOfDay(date)
  value.setDate(value.getDate() - value.getDay())
  return value
}

function endOfWeek(date: Date) {
  const value = startOfDay(date)
  value.setDate(value.getDate() + (6 - value.getDay()))
  return value
}

function formatDay(date: Date) {
  return date.toISOString().slice(0, 10)
}

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) {
    return 0
  }

  if (count === 1) {
    return 1
  }

  if (count <= 3) {
    return 2
  }

  if (count <= 6) {
    return 3
  }

  return 4
}

function buildHeatmap(events: GitHubEvent[]) {
  const today = startOfDay(new Date())
  const rangeStart = new Date(today)
  rangeStart.setDate(today.getDate() - 90)

  const gridStart = startOfWeek(rangeStart)
  const gridEnd = endOfWeek(today)

  const counts = new Map<string, number>()

  for (const event of events) {
    const date = startOfDay(new Date(event.created_at))

    if (date < gridStart || date > today) {
      continue
    }

    const key = formatDay(date)
    counts.set(key, (counts.get(key) || 0) + 1)
  }

  const weeks: GitHubHeatmapCell[][] = []
  const months: GitHubHeatmapMonth[] = []
  const cursor = new Date(gridStart)

  while (cursor <= gridEnd) {
    const week: GitHubHeatmapCell[] = []
    const weekIndex = weeks.length
    let monthLabelAdded = false

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const date = new Date(cursor)
      date.setDate(cursor.getDate() + dayIndex)

      const dateKey = formatDay(date)
      const count = counts.get(dateKey) || 0

      if (!monthLabelAdded && (date.getDate() <= 7 || weekIndex === 0)) {
        months.push({
          column: weekIndex,
          label: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date),
        })
        monthLabelAdded = true
      }

      week.push({
        date: dateKey,
        count,
        level: getLevel(count),
      })
    }

    weeks.push(week)
    cursor.setDate(cursor.getDate() + 7)
  }

  return { heatmapWeeks: weeks, heatmapMonths: months }
}

export async function getGitHubLiveActivity(): Promise<GitHubLiveActivity | null> {
  const username = liveActivity.github.username.trim()

  if (!username) {
    return null
  }

  const [repos, events] = await Promise.all([
    fetchGitHubJson<GitHubRepo[]>(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6&type=owner`,
      3600
    ),
    fetchGitHubJson<GitHubEvent[]>(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      1800
    ),
  ])

  if (!repos && !events) {
    return null
  }

  const { heatmapWeeks, heatmapMonths } = buildHeatmap(events || [])

  return {
    username,
    profileUrl: `https://github.com/${username}`,
    repos:
      repos
        ?.filter((repo) => !repo.fork)
        .sort((left, right) => Date.parse(right.pushed_at) - Date.parse(left.pushed_at))
        .slice(0, 3)
        .map((repo) => ({
          name: repo.name,
          href: repo.html_url,
          description: repo.description || 'No description yet.',
          language: repo.language,
          stars: repo.stargazers_count,
          pushedAt: repo.pushed_at,
        })) || [],
    heatmapWeeks,
    heatmapMonths,
  }
}
