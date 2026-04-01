import type { Locale } from '@/lib/i18n'

type HomeHighlight = {
  value: string
  label: string
}

type CallToAction = {
  label: string
  href: string
}

type ProjectEntry = {
  title: string
  role: string
  period: string
  summary: string
  stack: string[]
  impact: string[]
}

type LocaleContent = {
  site: {
    title: string
    description: string
    homeDescription: string
    aboutDescription: string
    projectsDescription: string
    tagsDescription: string
  }
  home: {
    eyebrow: string
    title: string
    description: string
    intro: string
    highlights: HomeHighlight[]
    topics: string[]
    callsToAction: CallToAction[]
  }
  projects: {
    title: string
    intro: string
    entries: ProjectEntry[]
  }
}

const pageContent: Record<Locale, LocaleContent> = {
  'zh-TW': {
    site: {
      title: 'Sean Chen',
      description: '專注於企業級前端架構、系統設計與 AI-assisted development 的資深前端工程師。',
      homeDescription:
        'Sean Chen 的個人技術網站，聚焦於企業級前端架構、物流與電商系統經驗，以及 AI-assisted software engineering。',
      aboutDescription: '關於 Sean Chen 的背景、技術定位、跨域系統經驗與 AI 工程方向。',
      projectsDescription: 'Sean Chen 近年代表性的物流、電商與 AI-assisted engineering 專案整理。',
      tagsDescription: 'Sean Chen 持續關注與撰寫的技術主題。',
    },
    home: {
      eyebrow: 'Sean Chen / 陳智興',
      title: '打造可擴展的前端系統，並將 AI 真正整合進開發流程',
      description:
        '我是一位擁有 10+ 年 Web 與 Mobile 經驗的資深前端工程師，曾參與 Newegg 大型電商平台與國際物流系統的核心產品開發，長期聚焦前端架構、企業系統與 AI-assisted software engineering。',
      intro:
        '這個 blog 不是單純的履歷站，也不只是技術筆記庫。我希望它能同時呈現我對前端架構、跨團隊協作與 AI 工程化流程的實際思考。',
      highlights: [
        {
          value: '10+ 年',
          label: 'Web 與 Mobile 開發經驗',
        },
        {
          value: 'Newegg',
          label: 'B2B / B2C 電商與 React Native App',
        },
        {
          value: 'Logistics',
          label: 'Booking、Trucking、TMS 與多語系企業系統',
        },
        {
          value: 'AI Workflow',
          label: 'Copilot、Codex、Claude、MCP、Skill / Instruction',
        },
      ],
      topics: [
        'Frontend Architecture',
        'Enterprise Systems',
        'AI-assisted Development',
        'Next.js / React / TypeScript',
        'Logistics & E-commerce Domain',
      ],
      callsToAction: [
        {
          label: '查看專案',
          href: '/projects',
        },
        {
          label: '閱讀文章',
          href: '/blog',
        },
        {
          label: '了解我的工作方式',
          href: '/about',
        },
      ],
    },
    projects: {
      title: '專案',
      intro: '以下是我近年較具代表性的產品與系統實作，以及我在其中實際負責的技術與業務價值。',
      entries: [
        {
          title: 'Logistics Platform',
          role: '從 0 到 1 建立企業級物流與貨代管理平台前端架構',
          period: '2024 - 2026',
          summary:
            '在昭津國際物流主導新一代物流與貨代管理系統前端架構，使用 React / Next.js / TypeScript 建構 Booking、Trucking 等核心業務系統，並串接既有 OutSystems 平台與 .NET backend。',
          stack: [
            'React',
            'Next.js',
            'TypeScript',
            '.NET RESTful API',
            'Azure CI/CD',
            'i18n',
            'OutSystems',
          ],
          impact: [
            '建立共用元件、頁面模式與多語系規則，降低跨模組維護成本。',
            '讓新系統與既有 TMS / 倉儲流程並行整合，降低企業導入風險。',
            '補齊技術文件、開發規範與 code review 流程，提升團隊協作效率。',
          ],
        },
        {
          title: 'Newegg Mobile Site & App',
          role: 'B2C 電商平台與 React Native App 的技術領導與穩定性優化',
          period: '2019 - 2024',
          summary:
            '在 Newegg B2C Mobile 團隊負責 Mobile Site 與 Mobile App 的開發維護、架構調整與跨國團隊協作，並逐步承擔 Frontend Leader / Staff Engineer 角色。',
          stack: ['React.js', 'React Native', 'MobX', 'GA4', 'RESTful API', 'Scrum'],
          impact: [
            '推進 App 穩定度達 99.9X%，並讓 App Store 評分維持在 4.6 星以上。',
            '優化 App WebView 與首屏呈現，讓關鍵頁面效能顯著提升。',
            '重整推播與分析流程，將通知開啟率從 2% 提升至 5%。',
          ],
        },
        {
          title: 'Newegg Unify Login',
          role: '建立 B2B / B2C Website 與 App 的統一登入流程',
          period: '2019 - 2021',
          summary:
            '跨中國與台灣團隊合作，規劃 Landing Page、Cookie / LocalStorage / AsyncStorage 持久化策略，整合多平台登入體驗。',
          stack: ['React.js', 'Cookie / LocalStorage', 'AsyncStorage', 'Cross-team collaboration'],
          impact: [
            '建立一致的跨平台登入流程並提升安全性。',
            '降低各產品線重複維護登入邏輯的成本。',
            '強化前後端與跨區團隊協作節奏。',
          ],
        },
        {
          title: 'Secure Site Split / Monorepo Evolution',
          role: '將大型單體站點拆分為多個可獨立部署單位',
          period: '2019 - 2021',
          summary:
            '依照業務與模組相依性進行拆分，將單一前端站點演進為多個獨立部署單位，改善部署彈性與回歸風險。',
          stack: ['React.js', 'Monorepo', 'Module decoupling', 'Deployment workflow'],
          impact: [
            '提升版本發布彈性，降低單點改版風險。',
            '讓不同模組可以以更清楚的邊界持續演進。',
            '減少整體回歸測試成本與跨模組干擾。',
          ],
        },
        {
          title: 'Newegg B2B Rewards',
          role: '將商業規則轉化為可營運的 B2B 會員機制',
          period: '2016 - 2019',
          summary:
            '在 Newegg Business 期間參與 B2B Rewards 等電商功能，將會員分級、積分與優惠策略轉化為站點實際功能。',
          stack: ['ASP.NET MVC', 'JavaScript', 'jQuery', 'Business rules'],
          impact: [
            '支援 B2B 電商會員經營與留存場景。',
            '強化從商品展示到帳戶管理的完整購物流程。',
            '累積將複雜商業規則落地到產品功能的經驗。',
          ],
        },
      ],
    },
  },
  en: {
    site: {
      title: 'Sean Chen',
      description:
        'Senior frontend engineer focused on enterprise frontend architecture, system design, and AI-assisted development.',
      homeDescription:
        "Sean Chen's personal technical site on frontend architecture, enterprise systems, and AI-assisted software engineering.",
      aboutDescription:
        "Sean Chen's background, technical positioning, cross-domain system experience, and AI engineering direction.",
      projectsDescription:
        "A selection of Sean Chen's logistics, e-commerce, and AI-assisted engineering projects.",
      tagsDescription: 'Topics Sean Chen writes about and continues to explore.',
    },
    home: {
      eyebrow: 'Sean Chen / Senior Frontend Engineer',
      title:
        'Building scalable frontend systems and integrating AI into real engineering workflows',
      description:
        'I am a senior frontend engineer with 10+ years of Web and Mobile experience across Newegg, enterprise logistics platforms, and AI-assisted software engineering workflows.',
      intro:
        'This site is not just a resume page or a notebook of technical notes. It is a place to document how I think about frontend architecture, cross-team delivery, and engineering systems that work well with AI collaborators.',
      highlights: [
        {
          value: '10+ years',
          label: 'Web and Mobile engineering experience',
        },
        {
          value: 'Newegg',
          label: 'B2B / B2C e-commerce and React Native app work',
        },
        {
          value: 'Logistics',
          label: 'Booking, Trucking, TMS, and multilingual enterprise systems',
        },
        {
          value: 'AI Workflow',
          label: 'Copilot, Codex, Claude, MCP, skills, and instructions',
        },
      ],
      topics: [
        'Frontend Architecture',
        'Enterprise Systems',
        'AI-assisted Development',
        'Next.js / React / TypeScript',
        'Logistics & E-commerce Domain',
      ],
      callsToAction: [
        {
          label: 'View projects',
          href: '/projects',
        },
        {
          label: 'Read blog posts',
          href: '/blog',
        },
        {
          label: 'Learn how I work',
          href: '/about',
        },
      ],
    },
    projects: {
      title: 'Projects',
      intro:
        'These are the products and systems that best represent how I approach architecture, delivery, and engineering collaboration.',
      entries: [
        {
          title: 'Logistics Platform',
          role: 'Built the frontend architecture for a 0-to-1 enterprise logistics and forwarding platform',
          period: '2024 - 2026',
          summary:
            'Led the frontend architecture for SJ Clemenger’s next-generation logistics and forwarding platform, using React / Next.js / TypeScript for Booking, Trucking, and other core workflows while integrating with legacy OutSystems systems and .NET backend services.',
          stack: [
            'React',
            'Next.js',
            'TypeScript',
            '.NET RESTful API',
            'Azure CI/CD',
            'i18n',
            'OutSystems',
          ],
          impact: [
            'Established shared UI patterns, multilingual conventions, and reusable frontend building blocks.',
            'Bridged new systems with legacy TMS and warehouse flows to reduce adoption risk.',
            'Improved developer efficiency through documentation, standards, and code review practices.',
          ],
        },
        {
          title: 'Newegg Mobile Site & App',
          role: 'Technical leadership for a B2C mobile site and React Native app',
          period: '2019 - 2024',
          summary:
            'Worked across Newegg’s B2C mobile web and app products, taking on Frontend Leader and Staff Engineer responsibilities around delivery quality, performance, and cross-region collaboration.',
          stack: ['React.js', 'React Native', 'MobX', 'GA4', 'RESTful API', 'Scrum'],
          impact: [
            'Helped maintain 99.9X% app stability and 4.6+ App Store ratings.',
            'Improved WebView architecture and first-screen performance on critical journeys.',
            'Reworked analytics and notification flows, increasing push open rate from 2% to 5%.',
          ],
        },
        {
          title: 'Newegg Unify Login',
          role: 'Unified login across B2B / B2C web and app products',
          period: '2019 - 2021',
          summary:
            'Partnered with teams in Taiwan and China to design landing flows, persistence strategies, and cross-platform authentication behavior.',
          stack: ['React.js', 'Cookie / LocalStorage', 'AsyncStorage', 'Cross-team collaboration'],
          impact: [
            'Created a more consistent login experience across products and platforms.',
            'Reduced the long-term maintenance cost of fragmented authentication logic.',
            'Strengthened collaboration between frontend, backend, and distributed teams.',
          ],
        },
        {
          title: 'Secure Site Split / Monorepo Evolution',
          role: 'Split a large frontend site into independently deployable units',
          period: '2019 - 2021',
          summary:
            'Drove a structural split based on business characteristics and module boundaries, turning a single frontend site into multiple deployable units.',
          stack: ['React.js', 'Monorepo', 'Module decoupling', 'Deployment workflow'],
          impact: [
            'Increased deployment flexibility and reduced release risk.',
            'Created clearer module boundaries for long-term evolution.',
            'Lowered regression testing overhead across teams.',
          ],
        },
        {
          title: 'Newegg B2B Rewards',
          role: 'Translated business rules into an operable B2B membership system',
          period: '2016 - 2019',
          summary:
            'Implemented B2B rewards, membership tiers, and related account experiences as part of the broader Newegg Business e-commerce platform.',
          stack: ['ASP.NET MVC', 'JavaScript', 'jQuery', 'Business rules'],
          impact: [
            'Supported real-world B2B customer retention and membership scenarios.',
            'Extended the end-to-end shopping journey across account and order flows.',
            'Built practical experience turning complex business rules into maintainable product behavior.',
          ],
        },
      ],
    },
  },
}

export function getPageContent(locale: Locale) {
  return pageContent[locale]
}
