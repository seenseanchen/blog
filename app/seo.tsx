import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { getPageContent } from '@/data/pageContent'
import { defaultLocale, getOpenGraphLocale, localizePath, type Locale } from '@/lib/i18n'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  locale?: Locale
  path?: string
  alternates?: Metadata['alternates']
  openGraph?: Metadata['openGraph']
  twitter?: Metadata['twitter']
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  locale = defaultLocale,
  path = '/',
  alternates,
  openGraph,
  twitter,
  ...rest
}: PageSEOProps): Metadata {
  const siteContent = getPageContent(locale).site
  const localizedPath = localizePath(path, locale)

  return {
    title,
    description: description || siteContent.description,
    alternates: {
      canonical: localizedPath,
      languages: {
        'zh-TW': localizePath(path, 'zh-TW'),
        en: localizePath(path, 'en'),
      },
      ...alternates,
    },
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteContent.description,
      url: localizedPath,
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: getOpenGraphLocale(locale),
      type: 'website',
      ...openGraph,
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
      ...twitter,
    },
    ...rest,
  }
}
