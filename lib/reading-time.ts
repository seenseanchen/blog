import type { Blog } from 'contentlayer/generated'
import type { Locale } from '@/lib/i18n'

type ReadingTime = {
  minutes?: number
}

function isReadingTime(value: Blog['readingTime']): value is ReadingTime {
  return typeof value === 'object' && value !== null
}

export function getReadingTimeMinutes(readingTime: Blog['readingTime']): number {
  if (!isReadingTime(readingTime) || typeof readingTime.minutes !== 'number') {
    return 1
  }

  return Math.max(1, Math.ceil(readingTime.minutes))
}

export function formatReadingTime(readingTime: Blog['readingTime'], locale: Locale): string {
  const minutes = getReadingTimeMinutes(readingTime)

  if (locale === 'zh-TW') {
    return `建議閱讀 ${minutes} 分鐘`
  }

  return `${minutes} min read`
}

export function formatCompactReadingTime(readingTime: Blog['readingTime'], locale: Locale): string {
  const minutes = getReadingTimeMinutes(readingTime)

  if (locale === 'zh-TW') {
    return `${minutes}分鐘`
  }

  return `${minutes} min`
}

export function formatPostDate(date: string): string {
  const postDate = new Date(date)
  const year = postDate.getFullYear()
  const month = String(postDate.getMonth() + 1).padStart(2, '0')
  const day = String(postDate.getDate()).padStart(2, '0')

  return `${year}/${month}/${day}`
}
