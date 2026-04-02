import type { Blog } from 'contentlayer/generated'
import { getDictionary, type Locale } from '@/lib/i18n'
import { formatCompactReadingTime, formatPostDate } from '@/lib/reading-time'

interface PostMetaLineProps {
  date: Blog['date']
  readingTime: Blog['readingTime']
  locale: Locale
}

export default function PostMetaLine({ date, readingTime, locale }: PostMetaLineProps) {
  const dictionary = getDictionary(locale)

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-gray-500 dark:text-gray-400">
      <span className="inline-flex items-center gap-1.5">
        <span aria-hidden="true">📅</span>
        <span className="sr-only">{dictionary.post.publishedOn}</span>
        <time dateTime={date}>{formatPostDate(date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span aria-hidden="true">🕒</span>
        <span className="sr-only">{dictionary.post.readingTimeLabel}</span>
        <span>{formatCompactReadingTime(readingTime, locale)}</span>
      </span>
    </div>
  )
}
