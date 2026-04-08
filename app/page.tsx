import Home from './Main'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'

export const metadata = genPageMetadata({
  title: '首頁',
  description: getPageContent('zh-TW').site.homeDescription,
  locale: 'zh-TW',
  path: '/',
})

export default function Page() {
  return <Home locale="zh-TW" />
}
