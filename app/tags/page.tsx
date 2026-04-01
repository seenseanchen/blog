import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getTagMetadata } from '@/lib/content'
import { getDictionary, localizePath } from '@/lib/i18n'

const locale = 'zh-TW' as const
const dictionary = getDictionary(locale)
const siteContent = getPageContent(locale).site

export const metadata = genPageMetadata({
  title: dictionary.tags.title,
  description: siteContent.tagsDescription,
  locale,
  path: '/tags',
})

export default async function Page() {
  const tagMetadata = getTagMetadata(locale)
  const sortedTags = Object.entries(tagMetadata).sort(
    ([, left], [, right]) => right.count - left.count
  )

  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14 dark:text-gray-100">
          {dictionary.tags.title}
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {sortedTags.length === 0 && dictionary.list.noPosts}
        {sortedTags.map(([tag, metadata]) => (
          <div key={tag} className="mt-2 mr-5 mb-2">
            <Link
              href={localizePath(`/tags/${tag}`, locale)}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium uppercase"
              aria-label={dictionary.tags.viewPosts(metadata.label)}
            >
              {metadata.label}
            </Link>
            <span className="text-sm font-semibold text-gray-600 uppercase dark:text-gray-300">
              {` (${metadata.count})`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
