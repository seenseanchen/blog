import Home from '../Main'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getLocaleBlogCoreContents } from '@/lib/content'

export const metadata = genPageMetadata({
  title: 'Home',
  description: getPageContent('en').site.homeDescription,
  locale: 'en',
  path: '/',
})

export default async function Page() {
  const posts = getLocaleBlogCoreContents('en')
  return <Home posts={posts} locale="en" />
}
