import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import ExperienceShowcase from '@/components/ExperienceShowcase'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getDictionary, localizePath } from '@/lib/i18n'
import { getLocaleAuthor, getLocaleAuthorCore } from '@/lib/content'

const locale = 'zh-TW' as const
const dictionary = getDictionary(locale)
const pageContent = getPageContent(locale)
const siteContent = pageContent.site

export const metadata = genPageMetadata({
  title: dictionary.about.title,
  description: siteContent.aboutDescription,
  locale,
  path: '/about',
})

export default function Page() {
  const author = getLocaleAuthor(locale)
  const mainContent = getLocaleAuthorCore(locale)
  const aboutContent = pageContent.about

  return (
    <AuthorLayout content={mainContent} title={dictionary.about.title}>
      <>
        <MDXLayoutRenderer code={author.body.code} />
        <div className="not-prose mt-16 space-y-16">
          <ExperienceShowcase locale={locale} />

          <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/60">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {aboutContent.projectsPromptTitle}
              </h2>
              <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
                {aboutContent.projectsPromptDescription}
              </p>
            </div>
            <div className="pt-6">
              <Link
                href={localizePath('/projects', locale)}
                className="inline-flex rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                {aboutContent.projectsPromptCta}
              </Link>
            </div>
          </section>
        </div>
      </>
    </AuthorLayout>
  )
}
