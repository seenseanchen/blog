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
