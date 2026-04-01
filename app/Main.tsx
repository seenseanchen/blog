import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { getPageContent } from '@/data/pageContent'
import siteMetadata from '@/data/siteMetadata'
import { localizePath, getDictionary, type Locale } from '@/lib/i18n'
import type { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

interface HomeProps {
  posts: CoreContent<Blog>[]
  locale: Locale
}

export default function Home({ posts, locale }: HomeProps) {
  const dictionary = getDictionary(locale)
  const content = getPageContent(locale).home

  return (
    <>
      <section className="space-y-8 pt-6 pb-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase dark:text-gray-400">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
            {content.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {content.description}
          </p>
          <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
            {content.intro}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {content.callsToAction.map((action) => (
            <Link
              key={action.href}
              href={localizePath(action.href, locale)}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              {action.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {highlight.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 py-10 dark:border-gray-800">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {dictionary.home.featuredTopics}
          </h2>
          <div className="flex flex-wrap gap-3">
            {content.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {dictionary.home.recentPosts}
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {getPageContent(locale).site.homeDescription}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && dictionary.list.noPosts}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { path, slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{dictionary.post.publishedOn}</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} locale={locale} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/${path}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`${dictionary.home.readMore}: "${title}"`}
                        >
                          {dictionary.home.readMore} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-6 text-base leading-6 font-medium">
          <Link
            href={localizePath('/blog', locale)}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={dictionary.home.allPosts}
          >
            {dictionary.home.allPosts} &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
