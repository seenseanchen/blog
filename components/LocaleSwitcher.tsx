'use client'

import { usePathname, useRouter } from 'next/navigation'
import { getDictionary, getLocaleFromPathname, switchLocalePath } from '@/lib/i18n'

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname() || '/'
  const locale = getLocaleFromPathname(pathname)
  const dictionary = getDictionary(locale)

  return (
    <button
      type="button"
      onClick={() => router.push(switchLocalePath(pathname))}
      className="hidden rounded border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:text-gray-950 sm:block dark:border-gray-800 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-white"
      aria-label={locale === 'en' ? 'Switch language' : '切換語言'}
    >
      {dictionary.localeLabel}
    </button>
  )
}
