import { getPageContent } from '@/data/pageContent'
import type { Locale } from '@/lib/i18n'
import ShowcaseSection from '@/components/ShowcaseSection'

interface ProjectsShowcaseProps {
  locale: Locale
}

export default function ProjectsShowcase({ locale }: ProjectsShowcaseProps) {
  const section = getPageContent(locale).projects

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-12">
        <ShowcaseSection section={section} titleAs="h1" />
      </div>
    </div>
  )
}
