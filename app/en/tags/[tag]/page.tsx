import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { getPostsByTag, getTagMetadata, getTagStaticParams } from '@/lib/content'

const locale = 'en' as const
const POSTS_PER_PAGE = 5

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const tagLabel = getTagMetadata(locale)[tag]?.label || tag

  return genPageMetadata({
    title: tagLabel,
    description: `Posts about ${tagLabel}`,
    locale,
    path: `/tags/${tag}`,
  })
}

export const generateStaticParams = async () => getTagStaticParams(locale)

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const tagMetadata = getTagMetadata(locale)
  const filteredPosts = getPostsByTag(locale, tag)
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: 1, totalPages }}
      title={tagMetadata[tag]?.label || tag}
      locale={locale}
      tagMetadata={tagMetadata}
    />
  )
}
