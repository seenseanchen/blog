import Image from '@/components/Image'
import Link from '@/components/Link'
import { getPageContent } from '@/data/pageContent'
import type { Locale } from '@/lib/i18n'

interface ExperienceShowcaseProps {
  locale: Locale
}

function CompanyMark({ src, alt, label }: { src?: string; alt?: string; label: string }) {
  if (src) {
    return (
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-950/60">
        <Image
          src={src}
          alt={alt || label}
          width={52}
          height={52}
          className="h-auto w-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-lg font-bold tracking-tight text-white dark:bg-gray-100 dark:text-gray-900">
      {label.slice(0, 2).toUpperCase()}
    </div>
  )
}

export default function ExperienceShowcase({ locale }: ExperienceShowcaseProps) {
  const section = getPageContent(locale).experience

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          {section.title}
        </h2>
        <p className="max-w-5xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {section.intro}
        </p>
      </div>

      <div className="rounded-[2rem] border border-gray-200 bg-white px-6 py-8 shadow-sm md:px-8 dark:border-gray-800 dark:bg-gray-900/60">
        <div className="space-y-8">
          {section.entries.map((entry) => (
            <div
              key={`${entry.company}-${entry.role}`}
              className="grid gap-5 lg:grid-cols-[180px_36px_minmax(0,1fr)] lg:gap-8"
            >
              <div className="space-y-3 lg:pr-3 lg:text-right">
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/60 dark:text-cyan-300">
                  {entry.yearLabel}
                </div>
                <p className="text-sm font-medium tracking-[0.18em] text-gray-500 uppercase dark:text-gray-400">
                  {entry.period}
                </p>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 rounded-full bg-gray-100 dark:bg-gray-800" />
                <div className="absolute top-14 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-cyan-500 shadow-sm dark:border-gray-900" />
              </div>

              <article className="rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 md:p-7 dark:border-gray-800 dark:bg-gray-950/40">
                <div className="flex items-start gap-4">
                  <CompanyMark src={entry.logoSrc} alt={entry.logoAlt} label={entry.company} />

                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-semibold tracking-[0.18em] text-cyan-600 uppercase dark:text-cyan-400">
                          {entry.company}
                        </p>
                        <div className="flex items-center gap-3">
                          {entry.location && (
                            <p className="text-xs font-medium tracking-[0.18em] text-gray-400 uppercase dark:text-gray-500">
                              {entry.location}
                            </p>
                          )}
                          <p className="text-xs font-medium tracking-[0.18em] text-gray-400 uppercase lg:hidden dark:text-gray-500">
                            {entry.period}
                          </p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {entry.role}
                      </h3>
                    </div>

                    <ul className="space-y-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {entry.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.links && entry.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {entry.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-5 dark:border-gray-800">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                    {section.focusLabel}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {section.highlightsTitle}
        </h3>
        <p className="max-w-5xl text-base leading-8 text-gray-600 dark:text-gray-300">
          {section.highlightsIntro}
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {section.highlights.map((entry) => (
          <article
            key={`${entry.company}-${entry.title}`}
            className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/60"
          >
            <div className="border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950/40">
              <Image
                src={entry.imageSrc}
                alt={entry.imageAlt}
                width={1200}
                height={720}
                className="h-56 w-full object-cover object-top"
              />
            </div>

            <div className="space-y-5 p-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-600 uppercase dark:text-cyan-400">
                  {entry.company}
                </p>
                <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {entry.title}
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500">{entry.period}</p>
              </div>

              <ul className="space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {entry.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
                {entry.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {entry.links && entry.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {entry.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
