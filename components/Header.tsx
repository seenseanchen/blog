'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import getHeaderNavLinks from '@/data/headerNavLinks'
import { getLocaleFromPathname, isActivePath, localizePath } from '@/lib/i18n'
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
  let headerClass =
    'flex items-center justify-between py-10 w-full bg-[var(--site-surface)] backdrop-blur-sm'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link
        href={localizePath('/', locale)}
        aria-label={siteMetadata.headerTitle}
        className="site-title-link group"
      >
        <div className="flex items-center justify-between">
          <div className="mr-3 flex items-center">
            <Image
              src={siteMetadata.siteLogo}
              alt={`${siteMetadata.headerTitle} logo`}
              width={88}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="site-title-galaxy text-primary-800 dark:text-primary-100 hidden text-[1.56rem] leading-none font-semibold tracking-[0.2em] sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => {
            const isActive = isActivePath(pathname, link.href)

            return (
              <Link
                key={link.title}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`m-1 inline-block border-b-2 pb-1 font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-primary-500 text-primary-700 dark:border-primary-300 dark:text-primary-100'
                    : 'hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-300 dark:hover:text-primary-300 border-transparent text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
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
