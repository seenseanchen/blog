import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import ExperienceShowcase from '@/components/ExperienceShowcase'
import LiveActivitySection from '@/components/LiveActivitySection'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getDictionary } from '@/lib/i18n'
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

  return (
    <AuthorLayout content={mainContent} title={dictionary.about.title} showTitle={false}>
      <>
        <MDXLayoutRenderer code={author.body.code} />
        <div className="not-prose mt-16 space-y-16">
          <ExperienceShowcase locale={locale} />
          <LiveActivitySection locale={locale} />
        </div>
      </>
    </AuthorLayout>
  )
}
