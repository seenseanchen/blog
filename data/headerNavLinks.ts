import type { Locale } from '@/lib/i18n'
import { getDictionary, localizePath } from '@/lib/i18n'

export default function getHeaderNavLinks(locale: Locale) {
  const dictionary = getDictionary(locale)

  return [
    { href: localizePath('/', locale), title: dictionary.nav.home },
    { href: localizePath('/blog', locale), title: dictionary.nav.blog },
    { href: localizePath('/tags', locale), title: dictionary.nav.tags },
    { href: localizePath('/projects', locale), title: dictionary.nav.projects },
    { href: localizePath('/about', locale), title: dictionary.nav.about },
  ]
}
