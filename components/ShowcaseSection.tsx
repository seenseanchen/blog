import type { ReactNode } from 'react'
import Link from '@/components/Link'
import ProjectDetailsDialog from '@/components/ProjectDetailsDialog'
import type { ShowcaseSectionContent } from '@/data/pageContent'

interface ShowcaseSectionProps {
  section: ShowcaseSectionContent
  titleAs?: 'h1' | 'h2'
  eyebrow?: ReactNode
}

export default function ShowcaseSection({
  section,
  titleAs = 'h1',
  eyebrow,
}: ShowcaseSectionProps) {
  const TitleTag = titleAs
  const titleClassName =
    titleAs === 'h1'
      ? 'text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100'
      : 'text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100'

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        {eyebrow && (
          <div className="text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase dark:text-gray-400">
            {eyebrow}
          </div>
        )}
        <TitleTag className={titleClassName}>{section.title}</TitleTag>
        <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {section.intro}
        </p>
        {section.callsToAction && section.callsToAction.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {section.callsToAction.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-10">
        {section.entries.map((entry) => (
          <article
            key={entry.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
          >
            <div className="space-y-3">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {entry.role}
                  </p>
                </div>
                <div className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300">
                  {entry.period}
                </div>
              </div>

              <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
                {entry.summary}
              </p>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div>
                <h4 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                  {section.stackLabel}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                  {section.impactLabel}
                </h4>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {entry.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {((entry.links && entry.links.length > 0) ||
              (entry.details && section.detailsButtonLabel)) && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">
                {entry.links?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                {entry.details && section.detailsButtonLabel && (
                  <ProjectDetailsDialog
                    title={entry.title}
                    buttonLabel={section.detailsButtonLabel}
                    closeLabel={section.detailsCloseLabel ?? 'Close'}
                    details={entry.details}
                  />
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
