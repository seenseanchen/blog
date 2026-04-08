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
  dayLabel: string
  monthLabel: string
  isCurrentMonth: boolean
}

export type GitHubHeatmapMonth = {
  label: string
  span: number
}

export type GitHubLiveActivity = {
  username: string
  profileUrl: string
  repos: GitHubRepoSummary[]
  heatmapMonths: GitHubHeatmapMonth[]
  heatmapCells: GitHubHeatmapCell[][]
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
  const gridStart = new Date(today)
  gridStart.setDate(today.getDate() - 34)

  const counts = new Map<string, number>()

  for (const event of events) {
    const date = startOfDay(new Date(event.created_at))

    if (date < gridStart || date > today) {
      continue
    }

    const key = formatDay(date)
    counts.set(key, (counts.get(key) || 0) + 1)
  }

  const cells: GitHubHeatmapCell[] = []

  for (let offset = 0; offset < 35; offset += 1) {
    const date = new Date(gridStart)
    date.setDate(gridStart.getDate() + offset)

    const dateKey = formatDay(date)
    const count = counts.get(dateKey) || 0

    cells.push({
      date: dateKey,
      count,
      level: getLevel(count),
      dayLabel: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date),
      monthLabel: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date),
      isCurrentMonth:
        date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear(),
    })
  }

  const heatmapCells = Array.from({ length: 7 }, (_, dayOfWeek) =>
    Array.from({ length: 5 }, (_, weekIndex) => cells[weekIndex * 7 + dayOfWeek])
  )

  const monthMap = new Map<string, number>()

  for (let weekIndex = 0; weekIndex < 5; weekIndex += 1) {
    const weekCell = cells[weekIndex * 7]
    const key = `${weekCell.monthLabel}-${weekCell.date.slice(0, 4)}`
    monthMap.set(key, (monthMap.get(key) || 0) + 1)
  }

  const heatmapMonths = Array.from(monthMap.entries()).map(([key, span]) => ({
    label: key.split('-')[0],
    span,
  }))

  return { heatmapCells, heatmapMonths }
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

  const { heatmapCells, heatmapMonths } = buildHeatmap(events || [])

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
    heatmapCells,
    heatmapMonths,
  }
}
