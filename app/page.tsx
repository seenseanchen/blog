import Home from './Main'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getLocaleBlogCoreContents } from '@/lib/content'

export const metadata = genPageMetadata({
  title: '首頁',
  description: getPageContent('zh-TW').site.homeDescription,
  locale: 'zh-TW',
  path: '/',
})

export default async function Page() {
  const posts = getLocaleBlogCoreContents('zh-TW')
  return <Home posts={posts} locale="zh-TW" />
}
