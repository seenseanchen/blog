/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Link from '@/components/Link'
import liveActivity from '@/data/liveActivity'
import { getPageContent } from '@/data/pageContent'
import { getGitHubLiveActivity } from '@/lib/liveActivity'
import type { Locale } from '@/lib/i18n'

interface LiveActivitySectionProps {
  locale: Locale
}

function formatDate(dateString: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'zh-TW' ? 'zh-TW' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(dateString))
}

function heatmapCellClass(level: 0 | 1 | 2 | 3 | 4) {
  switch (level) {
    case 4:
      return 'bg-emerald-700 dark:bg-emerald-500'
    case 3:
      return 'bg-emerald-500 dark:bg-emerald-400'
    case 2:
      return 'bg-emerald-300 dark:bg-emerald-600'
    case 1:
      return 'bg-emerald-100 dark:bg-emerald-800'
    default:
      return 'bg-gray-100 dark:bg-gray-800'
  }
}

export default async function LiveActivitySection({ locale }: LiveActivitySectionProps) {
  const aboutContent = getPageContent(locale).about
  const githubActivity = await getGitHubLiveActivity()
  const leetcodeUsername = liveActivity.leetcode.username.trim()

  if (!githubActivity && !leetcodeUsername) {
    return null
  }

  const weekLabels = [
    { index: 1, label: 'Mon' },
    { index: 3, label: 'Wed' },
    { index: 5, label: 'Fri' },
  ]

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          {aboutContent.liveActivityTitle}
        </h2>
        {aboutContent.liveActivityDescription && (
          <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {aboutContent.liveActivityDescription}
          </p>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        {githubActivity && (
          <article className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-[0.22em] text-cyan-600 uppercase dark:text-cyan-400">
                  GitHub
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {aboutContent.liveActivityGithubTitle}
                </h3>
                {aboutContent.liveActivityGithubDescription && (
                  <p className="max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {aboutContent.liveActivityGithubDescription}
                  </p>
                )}
              </div>

              <Link
                href={githubActivity.profileUrl}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
              >
                {aboutContent.liveActivityCta}
              </Link>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-2">
              <div className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950/40">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    <div
                      className="mb-2 grid items-end gap-1 text-[11px] text-gray-500 dark:text-gray-400"
                      style={{
                        gridTemplateColumns: `32px repeat(${githubActivity.heatmapWeeks.length}, 12px)`,
                      }}
                    >
                      <div />
                      {Array.from({ length: githubActivity.heatmapWeeks.length }, (_, column) => {
                        const month = githubActivity.heatmapMonths.find(
                          (item) => item.column === column
                        )

                        return (
                          <div key={`month-${column}`} className="relative h-4 overflow-visible">
                            {month && (
                              <span className="absolute left-0 whitespace-nowrap">
                                {month.label}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    <div
                      className="grid gap-1"
                      style={{
                        gridTemplateColumns: `32px repeat(${githubActivity.heatmapWeeks.length}, 12px)`,
                      }}
                    >
                      {Array.from({ length: 7 }, (_, dayIndex) => (
                        <Fragment key={`row-${dayIndex}`}>
                          <div className="flex items-center text-[11px] text-gray-500 dark:text-gray-400">
                            {weekLabels.find((item) => item.index === dayIndex)?.label || ''}
                          </div>
                          {githubActivity.heatmapWeeks.map((week, weekIndex) => (
                            <div
                              key={`${week[dayIndex].date}-${weekIndex}`}
                              className={`h-3 w-3 rounded-[0.2rem] border border-white/60 ${heatmapCellClass(
                                week[dayIndex].level
                              )}`}
                              title={`${week[dayIndex].date} · ${week[dayIndex].count}`}
                            />
                          ))}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span
                      key={`legend-${level}`}
                      className={`h-3 w-3 rounded-[0.2rem] border border-white/60 ${heatmapCellClass(
                        level as 0 | 1 | 2 | 3 | 4
                      )}`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950/40">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {aboutContent.liveActivityRepoTitle}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {githubActivity.username}
                  </p>
                </div>

                <div className="space-y-4">
                  {githubActivity.repos.map((repo) => (
                    <article
                      key={repo.name}
                      className="rounded-[1.25rem] border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/70"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={repo.href}
                          className="text-base font-semibold text-gray-900 transition hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300"
                        >
                          {repo.name}
                        </Link>
                        {repo.language && (
                          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {repo.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                        <span>★ {repo.stars}</span>
                        <span>
                          {locale === 'zh-TW' ? '更新於' : 'Updated'}{' '}
                          {formatDate(repo.pushedAt, locale)}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )}

        <div className="space-y-6">
          {leetcodeUsername && (
            <article className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-[0.22em] text-amber-600 uppercase dark:text-amber-400">
                    LeetCode
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {aboutContent.liveActivityLeetcodeTitle}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">@{leetcodeUsername}</p>
                </div>
                <Link
                  href={`https://leetcode.com/u/${leetcodeUsername}/`}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
                >
                  {locale === 'zh-TW' ? '查看檔案' : 'View Profile'}
                </Link>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-950/40">
                <img
                  src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=light&font=baloo&ext=heatmap`}
                  alt={`LeetCode card for ${leetcodeUsername}`}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
