import Home from '../Main'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'

export const metadata = genPageMetadata({
  title: 'Home',
  description: getPageContent('en').site.homeDescription,
  locale: 'en',
  path: '/',
})

export default function Page() {
  return <Home locale="en" />
}
