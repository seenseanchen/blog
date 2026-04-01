import 'css/prism.css'
import 'katex/dist/katex.css'

import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allAuthors } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { components } from '@/components/MDXComponents'
import { getLocalizedBlogParams, getLocaleBlogCoreContents, getLocaleBlogPost } from '@/lib/content'
import { getOpenGraphLocale, localizePath } from '@/lib/i18n'

const locale = 'en' as const
const defaultLayout = 'PostLayout'
const defaultAuthorSlug = 'default.en'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

function getAuthorDetails(authorList: string[]) {
  return authorList.map((author) => {
    const authorResults =
      allAuthors.find((entry) => entry.slug === author) ||
      allAuthors.find((entry) => entry.slug === defaultAuthorSlug) ||
      allAuthors.find((entry) => entry.slug === 'default')

    return coreContent(authorResults as Authors)
  })
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const post = getLocaleBlogPost(locale, slug)

  if (!post) {
    return
  }

  const authorList = post.authors || [defaultAuthorSlug]
  const authorDetails = getAuthorDetails(authorList)
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  const imageList =
    post.images && typeof post.images === 'string'
      ? [post.images]
      : post.images || [siteMetadata.socialBanner]

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/${post.path}`,
      languages: {
        'zh-TW': localizePath(`/blog/${slug}`, 'zh-TW'),
        en: localizePath(`/blog/${slug}`, 'en'),
      },
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: getOpenGraphLocale(locale),
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: `/${post.path}`,
      images: imageList.map((image) => ({
        url: image && image.includes('http') ? image : siteMetadata.siteUrl + image,
      })),
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => getLocalizedBlogParams(locale)

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const post = getLocaleBlogPost(locale, slug)

  if (!post) {
    return notFound()
  }

  const sortedCoreContents = getLocaleBlogCoreContents(locale)
  const postIndex = sortedCoreContents.findIndex((entry) => entry.path === post.path)

  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const authorList = post.authors || [defaultAuthorSlug]
  const authorDetails = getAuthorDetails(authorList)
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData

  jsonLd['author'] = authorDetails.map((author) => ({
    '@type': 'Person',
    name: author.name,
  }))

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        locale={locale}
        next={next}
        prev={prev}
      >
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
