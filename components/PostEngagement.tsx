import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { getDictionary, type Locale } from '@/lib/i18n'

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

function getDiscussionUrl(threadKey: string) {
  const baseUrl = siteMetadata.discussion?.baseUrl?.trim()

  if (!baseUrl) {
    return null
  }

  return `${baseUrl.replace(/\/+$/, '')}/${threadKey.replace(/^\/+/, '')}`
}

interface PostEngagementProps {
  filePath: string
  threadKey: string
  locale: Locale
}

export default function PostEngagement({ filePath, threadKey, locale }: PostEngagementProps) {
  const dictionary = getDictionary(locale)
  const discussionUrl = getDiscussionUrl(threadKey)
  const isDiscussionReady =
    Boolean(siteMetadata.discussion?.enabled) &&
    Boolean(discussionUrl) &&
    siteMetadata.discussion?.status !== 'planned'

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 dark:border-gray-700 dark:bg-gray-800/60"
      id="discussion"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {dictionary.post.discussionTitle}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {isDiscussionReady
              ? dictionary.post.discussionDescription
              : dictionary.post.discussionPlannedDescription}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
          {isDiscussionReady ? (
            <Link
              href={discussionUrl!}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {dictionary.post.openDiscussion}
            </Link>
          ) : (
            <span className="rounded-full bg-white px-3 py-1 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-300">
              {dictionary.post.discussionComingSoon}
            </span>
          )}
          <span className="text-gray-400">•</span>
          <Link
            href={editUrl(filePath)}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {dictionary.post.viewOnGitHub}
          </Link>
        </div>
      </div>
    </div>
  )
}
