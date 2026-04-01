import { slug as slugify } from 'github-slugger'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import type { Locale } from '@/lib/i18n'

export type TagMetadata = Record<string, { label: string; count: number }>

export function getBlogLocale(post: Pick<Blog, 'slug'>): Locale {
  return post.slug.startsWith('en/') ? 'en' : 'zh-TW'
}

export function getLocalizedBlogSlug(slug: string): string {
  return slug.replace(/^en\//, '')
}

export function getLocaleBlogPosts(locale: Locale) {
  return sortPosts(allBlogs.filter((post) => getBlogLocale(post) === locale))
}

export function getLocaleBlogCoreContents(locale: Locale) {
  return allCoreContent(getLocaleBlogPosts(locale))
}

export function getLocaleBlogPost(locale: Locale, slug: string) {
  return getLocaleBlogPosts(locale).find((post) => getLocalizedBlogSlug(post.slug) === slug)
}

export function getLocaleAuthor(locale: Locale) {
  const localizedAuthorSlug = locale === 'en' ? 'default.en' : 'default'
  const author =
    allAuthors.find((entry) => entry.slug === localizedAuthorSlug) ||
    allAuthors.find((entry) => entry.slug === 'default')

  return author as Authors
}

export function getLocaleAuthorCore(locale: Locale) {
  return coreContent(getLocaleAuthor(locale))
}

export function getLocalizedBlogParams(locale: Locale) {
  return getLocaleBlogPosts(locale).map((post) => ({
    slug: getLocalizedBlogSlug(post.slug)
      .split('/')
      .map((segment) => decodeURI(segment)),
  }))
}

export function getTagMetadata(locale: Locale): TagMetadata {
  return getLocaleBlogPosts(locale).reduce<TagMetadata>((accumulator, post) => {
    post.tags?.forEach((tag) => {
      const key = slugify(tag)

      if (accumulator[key]) {
        accumulator[key].count += 1
      } else {
        accumulator[key] = {
          label: tag,
          count: 1,
        }
      }
    })

    return accumulator
  }, {})
}

export function getSortedTagEntries(locale: Locale) {
  return Object.entries(getTagMetadata(locale)).sort(
    ([, left], [, right]) => right.count - left.count
  )
}

export function getPostsByTag(locale: Locale, tag: string) {
  return allCoreContent(
    sortPosts(
      getLocaleBlogPosts(locale).filter(
        (post) => post.tags && post.tags.map((entry) => slugify(entry)).includes(tag)
      )
    )
  )
}

export function getTagStaticParams(locale: Locale) {
  return Object.keys(getTagMetadata(locale)).map((tag) => ({
    tag: encodeURI(tag),
  }))
}

export function getTagPaginationStaticParams(locale: Locale, postsPerPage: number) {
  return Object.entries(getTagMetadata(locale)).flatMap(([tag, metadata]) => {
    const totalPages = Math.max(1, Math.ceil(metadata.count / postsPerPage))
    return Array.from({ length: totalPages }, (_, index) => ({
      tag: encodeURI(tag),
      page: (index + 1).toString(),
    }))
  })
}
