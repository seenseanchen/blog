'use client'

import { usePathname } from 'next/navigation'
import { Noto_Serif_TC } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import getHeaderNavLinks from '@/data/headerNavLinks'
import { getLocaleFromPathname, localizePath } from '@/lib/i18n'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import LocaleSwitcher from './LocaleSwitcher'

const posterTitleFont = Noto_Serif_TC({
  weight: ['700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'],
})

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
              src={siteMetadata.siteLogo}
              alt={`${siteMetadata.headerTitle} logo`}
              width={88}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div
              className={`${posterTitleFont.className} hidden text-[1.65rem] leading-none font-black tracking-[0.18em] text-gray-900 sm:block dark:text-gray-100`}
            >
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
