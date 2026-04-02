import { ReactNode } from 'react'
import Image from '@/components/Image'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import PostMetaLine from '@/components/PostMetaLine'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { getDictionary, localizePath, type Locale } from '@/lib/i18n'

interface LayoutProps {
  content: CoreContent<Blog>
  locale: Locale
  authorDetails?: CoreContent<Authors>[]
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, locale, next, prev, children }: LayoutProps) {
  const { slug, title, date, images, readingTime } = content
  const dictionary = getDictionary(locale)
  const displayImage =
    images && images.length > 0 ? images[0] : 'https://picsum.photos/seed/picsum/800/400'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-2/1 w-full">
                  <Image src={displayImage} alt={title} fill className="object-cover" />
                </div>
              </Bleed>
            </div>
            <div className="relative space-y-4 pt-10">
              <PageTitle>{title}</PageTitle>
              <PostMetaLine date={date} readingTime={readingTime} locale={locale} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none py-4">{children}</div>
          {siteMetadata.comments && (
            <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`${dictionary.post.previousArticle}: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`${dictionary.post.nextArticle}: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
            <div className="pt-4 xl:pt-8">
              <Link
                href={localizePath('/blog', locale)}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={dictionary.post.backToBlog}
              >
                &larr; {dictionary.post.backToBlog}
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
