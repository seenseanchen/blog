import { getPageContent } from '@/data/pageContent'
import { getDictionary, type Locale } from '@/lib/i18n'

interface ProjectsShowcaseProps {
  locale: Locale
}

export default function ProjectsShowcase({ locale }: ProjectsShowcaseProps) {
  const dictionary = getDictionary(locale)
  const content = getPageContent(locale).projects

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {content.title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          {content.intro}
        </p>
      </div>

      <div className="space-y-10 py-12">
        {content.entries.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
          >
            <div className="space-y-3">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.role}
                  </p>
                </div>
                <div className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300">
                  {project.period}
                </div>
              </div>

              <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
                {project.summary}
              </p>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                  {dictionary.projects.stack}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
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
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                  {dictionary.projects.impact}
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
