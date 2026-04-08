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
      return 'bg-cyan-600 dark:bg-cyan-400'
    case 3:
      return 'bg-cyan-500 dark:bg-cyan-500'
    case 2:
      return 'bg-cyan-300 dark:bg-cyan-600/80'
    case 1:
      return 'bg-cyan-100 dark:bg-cyan-900/80'
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

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            {aboutContent.liveActivityTitle}
          </h2>
          {githubActivity && (
            <Link
              href={githubActivity.profileUrl}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              {aboutContent.liveActivityCta}
            </Link>
          )}
        </div>
        <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {aboutContent.liveActivityDescription}
        </p>
      </div>

      <div className="grid gap-6">
        {githubActivity && (
          <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-[0.22em] text-cyan-600 uppercase dark:text-cyan-400">
                GitHub
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {aboutContent.liveActivityGithubTitle}
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
                {aboutContent.liveActivityGithubDescription}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950/40">
              <div className="grid grid-cols-[56px_repeat(5,minmax(0,1fr))] gap-2 text-xs text-gray-400 dark:text-gray-500">
                <div />
                {githubActivity.heatmapMonths.map((month) => (
                  <div
                    key={`${month.label}-${month.span}`}
                    className="text-center font-medium"
                    style={{ gridColumn: `span ${month.span} / span ${month.span}` }}
                  >
                    {month.label}
                  </div>
                ))}

                {githubActivity.heatmapCells.map((row, rowIndex) => (
                  <Fragment key={`row-${rowIndex}`}>
                    <div className="flex items-center justify-end pr-2 text-[11px] font-medium">
                      {row[0]?.dayLabel}
                    </div>
                    {row.map((cell) => (
                      <div
                        key={cell.date}
                        className={`aspect-square rounded-md border border-white/60 ${heatmapCellClass(cell.level)}`}
                        title={`${cell.date} · ${cell.count}`}
                      />
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {aboutContent.liveActivityRepoTitle}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {githubActivity.username}
                </p>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-3">
                {githubActivity.repos.map((repo) => (
                  <article
                    key={repo.name}
                    className="rounded-3xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900/70"
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
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {repo.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
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
          </article>
        )}

        {leetcodeUsername && (
          <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-[0.22em] text-amber-600 uppercase dark:text-amber-400">
                LeetCode
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {aboutContent.liveActivityLeetcodeTitle}
              </h3>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950/40">
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=light&font=baloo&ext=heatmap`}
                alt={`LeetCode card for ${leetcodeUsername}`}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </article>
        )}
      </div>
    </section>
  )
}
