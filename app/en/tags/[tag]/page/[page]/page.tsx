import ListLayout from '@/layouts/ListLayoutWithTags'
import { notFound } from 'next/navigation'
import { getPostsByTag, getTagMetadata, getTagPaginationStaticParams } from '@/lib/content'

const locale = 'en' as const
const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => getTagPaginationStaticParams(locale, POSTS_PER_PAGE)

export default async function TagPage(props: { params: Promise<{ tag: string; page: string }> }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const pageNumber = parseInt(params.page, 10)
  const tagMetadata = getTagMetadata(locale)
  const filteredPosts = getPostsByTag(locale, tag)
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || Number.isNaN(pageNumber)) {
    return notFound()
  }

  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title={tagMetadata[tag]?.label || tag}
      locale={locale}
      tagMetadata={tagMetadata}
    />
  )
}
