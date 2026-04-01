'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import getHeaderNavLinks from '@/data/headerNavLinks'
import { getLocaleFromPathname, localizePath } from '@/lib/i18n'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import LocaleSwitcher from './LocaleSwitcher'

const Header = () => {
  const pathname = usePathname() || '/'
  const locale = getLocaleFromPathname(pathname)
  const headerNavLinks = getHeaderNavLinks(locale)
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href={localizePath('/', locale)} aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3 flex items-center">
            <Image
              src="/static/images/seenseanchen-logo-v2.png"
              alt="Sean Chen logo"
              width={88}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.slice(1).map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
        <LocaleSwitcher />
        <ThemeSwitch />
        <MobileNav locale={locale} navLinks={headerNavLinks} />
      </div>
    </header>
  )
}

export default Header
