import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { getDictionary, type Locale } from '@/lib/i18n'

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

interface PostEngagementProps {
  filePath: string
  threadKey: string
  locale: Locale
}

export default function PostEngagement({ filePath, locale }: PostEngagementProps) {
  const dictionary = getDictionary(locale)

  return (
    <div className="text-sm text-gray-700 dark:text-gray-300">
      <Link
        href={editUrl(filePath)}
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        {dictionary.post.viewOnGitHub}
      </Link>
    </div>
  )
}
