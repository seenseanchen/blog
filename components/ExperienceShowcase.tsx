import { getPageContent } from '@/data/pageContent'
import type { Locale } from '@/lib/i18n'
import ShowcaseSection from '@/components/ShowcaseSection'

interface ExperienceShowcaseProps {
  locale: Locale
}

export default function ExperienceShowcase({ locale }: ExperienceShowcaseProps) {
  const section = getPageContent(locale).experience

  return <ShowcaseSection section={section} titleAs="h2" />
}
