import Link from '@/components/Link'
import { getPageContent } from '@/data/pageContent'
import { localizePath, type Locale } from '@/lib/i18n'

interface HomeProps {
  locale: Locale
}

export default function Home({ locale }: HomeProps) {
  const content = getPageContent(locale).home

  return (
    <div className="space-y-16 pt-6 pb-10">
      <section className="space-y-5">
        <p className="text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase dark:text-gray-400">
          {content.eyebrow}
        </p>
        <h1 className="max-w-5xl text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
          {content.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {content.description}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {content.audiences.map((audience, index) => (
          <article
            key={audience.href}
            className={`rounded-3xl border p-7 shadow-sm transition-colors ${
              index === 0
                ? 'border-amber-200 bg-amber-50/70 dark:border-amber-900/50 dark:bg-amber-950/20'
                : 'border-cyan-200 bg-cyan-50/70 dark:border-cyan-900/50 dark:bg-cyan-950/20'
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-gray-300 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-gray-600 uppercase dark:border-gray-700 dark:bg-gray-950/50 dark:text-gray-300">
                {audience.badge}
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {audience.title}
                </h2>
                <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                  {audience.description}
                </p>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {audience.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {audience.actions.map((action, actionIndex) => (
                  <Link
                    key={action.href}
                    href={localizePath(action.href, locale)}
                    className={
                      actionIndex === 0
                        ? 'inline-flex rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200'
                        : 'inline-flex rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-900/60'
                    }
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
