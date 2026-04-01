import Link from 'next/link'
import { slug } from 'github-slugger'
import { defaultLocale, localizePath, type Locale } from '@/lib/i18n'

interface Props {
  text: string
  locale?: Locale
}

const Tag = ({ text, locale = defaultLocale }: Props) => {
  return (
    <Link
      href={localizePath(`/tags/${slug(text)}`, locale)}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
