import Image from '@/components/Image'
import type { Locale } from '@/lib/i18n'

interface SkillsSectionProps {
  locale: Locale
}

const skillsContent = {
  'zh-TW': {
    title: '我的全端技術總表',
    subtitle: '全端開發經驗・打造高效且可用的 Web 應用程式',
    imageSrc: '/static/images/sean-full-skills-20260504.png',
  },
  en: {
    title: 'My Full Stack Tech Overview',
    subtitle: 'Full-stack development experience・Building efficient and usable web applications',
    imageSrc: '/static/images/sean-full-skills-eng-20260504.png.jpg',
  },
}

export default function SkillsSection({ locale }: SkillsSectionProps) {
  const content = skillsContent[locale]

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          {content.title}
        </h2>
        <p className="max-w-5xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {content.subtitle}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
        <Image
          src={content.imageSrc}
          alt={content.title}
          width={1400}
          height={900}
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  )
}
