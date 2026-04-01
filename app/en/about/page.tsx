import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getDictionary } from '@/lib/i18n'
import { getLocaleAuthor, getLocaleAuthorCore } from '@/lib/content'

const locale = 'en' as const
const dictionary = getDictionary(locale)
const siteContent = getPageContent(locale).site

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
    <AuthorLayout content={mainContent} title={dictionary.about.title}>
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
