import ProjectsShowcase from '@/components/ProjectsShowcase'
import { genPageMetadata } from 'app/seo'
import { getPageContent } from '@/data/pageContent'
import { getDictionary } from '@/lib/i18n'

const locale = 'en' as const
const dictionary = getDictionary(locale)
const siteContent = getPageContent(locale).site

export const metadata = genPageMetadata({
  title: dictionary.projects.title,
  description: siteContent.projectsDescription,
  locale,
  path: '/projects',
})

export default function Projects() {
  return <ProjectsShowcase locale={locale} />
}
