import { getPageContent } from '@/data/pageContent'
import type { Locale } from '@/lib/i18n'

interface ExperienceShowcaseProps {
  locale: Locale
}

export default function ExperienceShowcase({ locale }: ExperienceShowcaseProps) {
  const section = getPageContent(locale).experience

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          {section.title}
        </h2>
        <p className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {section.intro}
        </p>
      </div>

      <div className="rounded-[2rem] border border-gray-200 bg-white px-6 py-8 shadow-sm md:px-8 dark:border-gray-800 dark:bg-gray-900/60">
        <div className="relative">
          <div className="absolute top-0 left-[72px] hidden h-full w-px bg-gradient-to-b from-cyan-500 via-sky-400 to-gray-200 md:block dark:to-gray-800" />

          <div className="space-y-10">
            {section.entries.map((entry) => (
              <div
                key={`${entry.company}-${entry.role}`}
                className="relative md:grid md:grid-cols-[144px_minmax(0,1fr)] md:gap-8"
              >
                <div className="pb-4 md:pb-0">
                  <div className="relative flex items-center gap-4 md:block">
                    <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/60 dark:text-cyan-300">
                      {entry.yearLabel}
                    </div>
                    <p className="text-sm font-medium tracking-[0.18em] text-gray-500 uppercase md:mt-4 dark:text-gray-400">
                      {entry.period}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-3 -left-[41px] hidden h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow-sm md:block dark:border-gray-900" />

                  <article className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950/40">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                          {entry.role}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {entry.company}
                        </p>
                      </div>

                      <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
                        {entry.summary}
                      </p>

                      <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
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
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {section.highlightsTitle}
        </h3>
        <p className="max-w-4xl text-base leading-8 text-gray-600 dark:text-gray-300">
          {section.highlightsIntro}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {section.highlights.map((entry) => (
          <article
            key={`${entry.company}-${entry.title}`}
            className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-600 uppercase dark:text-cyan-400">
                  {entry.company}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{entry.period}</p>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {entry.title}
              </h4>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{entry.summary}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
              {entry.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
