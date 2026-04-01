import ListLayout from '@/layouts/ListLayoutWithTags'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'
import { getLocaleBlogCoreContents, getTagMetadata } from '@/lib/content'

const locale = 'en' as const
const POSTS_PER_PAGE = 5
const dictionary = getDictionary(locale)

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(getLocaleBlogCoreContents(locale).length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, index) => ({ page: (index + 1).toString() }))
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = getLocaleBlogCoreContents(locale)
  const pageNumber = parseInt(params.page, 10)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || Number.isNaN(pageNumber)) {
    return notFound()
  }

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title={dictionary.list.allPosts}
      locale={locale}
      tagMetadata={getTagMetadata(locale)}
    />
  )
}
