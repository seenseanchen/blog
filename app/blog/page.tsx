import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { getPageContent } from '@/data/pageContent'
import { getLocaleBlogCoreContents, getTagMetadata } from '@/lib/content'
import { getDictionary } from '@/lib/i18n'

const locale = 'zh-TW' as const
const POSTS_PER_PAGE = 5
const dictionary = getDictionary(locale)
const siteContent = getPageContent(locale).site

export const metadata = genPageMetadata({
  title: dictionary.nav.blog,
  description: siteContent.homeDescription,
  locale,
  path: '/blog',
})

export default async function BlogPage() {
  const posts = getLocaleBlogCoreContents(locale)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: 1, totalPages }}
      title={dictionary.list.allPosts}
      locale={locale}
      tagMetadata={getTagMetadata(locale)}
    />
  )
}
