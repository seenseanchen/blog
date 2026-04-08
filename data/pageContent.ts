import type { Locale } from '@/lib/i18n'

export type CallToAction = {
  label: string
  href: string
}

type AudiencePath = CallToAction & {
  badge: string
  title: string
  description: string
  bullets: string[]
  actions: CallToAction[]
}

type ShowcaseEntry = {
  title: string
  role: string
  period: string
  summary: string
  stack: string[]
  impact: string[]
  links?: CallToAction[]
}

export type ShowcaseSectionContent = {
  title: string
  intro: string
  stackLabel: string
  impactLabel: string
  entries: ShowcaseEntry[]
  callsToAction?: CallToAction[]
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
    audiences: AudiencePath[]
  }
  about: {
    projectsPromptTitle: string
    projectsPromptDescription: string
    projectsPromptCta: string
  }
  experience: ShowcaseSectionContent
  projects: ShowcaseSectionContent
}

const pageContent: Record<Locale, LocaleContent> = {
  'zh-TW': {
    site: {
      title: 'Sean Chen',
      description: '專注於企業級前端架構、系統設計與 AI-assisted development 的資深前端工程師。',
      homeDescription:
        'Sean Chen 的網站入口頁，協助 HR / 非技術讀者快速了解背景，也引導技術讀者直接進入文章。',
      aboutDescription:
        '關於 Sean Chen 的背景、工作方式，以及 5 段代表性的電商、物流與前端架構經歷。',
      projectsDescription: 'Sean Chen 目前公開在 GitHub 的 side projects 與實作方向。',
      tagsDescription: 'Sean Chen 文章的標籤總覽與主題入口。',
    },
    home: {
      eyebrow: 'Sean Chen / 入口頁',
      title: '選擇最適合你的閱讀路徑',
      description:
        '這個網站主要服務兩類讀者：想快速理解我背景的 HR / 非技術夥伴，以及想直接看技術觀點與實戰文章的工程師。如果你是招募、合作或跨部門夥伴，建議先看「關於」；如果你是技術讀者，直接進入「文章」或「專案」會最快。',
      audiences: [
        {
          badge: 'HR / 招募 / 非技術讀者',
          title: '先看關於',
          description: '快速掌握我的背景、角色定位、工作方式，以及 5 段最能代表我的經歷。',
          href: '/about',
          label: '前往關於',
          actions: [
            {
              label: '前往關於',
              href: '/about',
            },
          ],
          bullets: [
            '10+ 年 Web / Mobile 經驗與跨域系統背景',
            'Newegg、物流系統與 AI-assisted engineering 脈絡',
            '適合面談前、合作前或快速建立第一印象',
          ],
        },
        {
          badge: '工程師 / 技術主管 / PM',
          title: '直接看文章',
          description: '直接進入我對前端架構、企業系統與 AI 工程流程的文章與 side project 實作。',
          href: '/blog',
          label: '前往文章',
          actions: [
            {
              label: '前往文章',
              href: '/blog',
            },
            {
              label: '查看專案',
              href: '/projects',
            },
          ],
          bullets: [
            '以實戰經驗整理 frontend architecture 與 enterprise systems',
            '涵蓋 Next.js / React / TypeScript 與 AI-assisted development',
            '適合快速判斷技術深度、設計思維與工程方法',
          ],
        },
      ],
    },
    about: {
      projectsPromptTitle: '也可以看看我的 side projects',
      projectsPromptDescription:
        '專案頁現在整理的是我公開在 GitHub 的 side projects，與職涯經歷分開呈現。',
      projectsPromptCta: '前往專案',
    },
    experience: {
      title: '代表經歷',
      intro: '以下 5 段經歷，濃縮了我在電商、物流、企業系統與前端架構上的主要工作脈絡。',
      stackLabel: '技術與平台',
      impactLabel: '重點整理',
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
    projects: {
      title: '專案',
      intro:
        '這裡整理的是我目前公開在 GitHub 的 side projects。它們與職涯經歷分開，專注呈現我主動發起的產品與工程實作。',
      stackLabel: '技術與平台',
      impactLabel: '重點整理',
      callsToAction: [
        {
          label: 'GitHub repo 列表',
          href: 'https://github.com/seenseanchen?tab=repositories',
        },
      ],
      entries: [
        {
          title: 'EC Order Aggregator',
          role: '以 Chrome Extension 整合台灣電商平台訂單紀錄的個人 side project',
          period: 'Public side project / 2026',
          summary:
            '把分散在 PChome、momo、Shopee、Yahoo 購物中心的訂單資料，收斂成可搜尋、可排序、可持續累積的個人購買清單。',
          stack: ['TypeScript', 'React 19', 'Vite', 'Dexie', 'Zustand', 'Chrome Extension MV3'],
          impact: [
            '目前支援 PChome、momo、Shopee、Yahoo 購物中心的訂單資料彙整。',
            '使用 content script、background service worker、Dexie 與 side panel 建立可持續擴充的資料採集流程。',
            '已具備搜尋、排序、狀態篩選與手動重新抓取等 MVP 到 early product 能力。',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/ec-order-aggregator-ext',
            },
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
        "Sean Chen's entry page for recruiters, non-technical collaborators, and technical readers to choose the right path into the site.",
      aboutDescription:
        "Sean Chen's background, working style, and five representative experiences across e-commerce, logistics, and frontend architecture.",
      projectsDescription:
        "Sean Chen's public GitHub side projects and current implementation focus.",
      tagsDescription: 'A tag directory for Sean Chen’s blog topics.',
    },
    home: {
      eyebrow: 'Sean Chen / Entry',
      title: 'Choose the path that fits your visit best',
      description:
        'This site mainly serves two audiences: recruiters or non-technical collaborators who want a fast overview, and technical readers who want to jump straight into articles. If you are in recruiting, hiring, or a cross-functional role, start with About. If you are a technical reader, the Blog or Projects page will get you to the most relevant work faster.',
      audiences: [
        {
          badge: 'HR / Recruiting / Non-technical readers',
          title: 'Start with About',
          description:
            'Get a fast overview of my background, positioning, working style, and the five experiences that best represent my work.',
          href: '/about',
          label: 'Go to About',
          actions: [
            {
              label: 'Go to About',
              href: '/about',
            },
          ],
          bullets: [
            '10+ years across Web, Mobile, and business-critical product systems',
            'Context across Newegg, logistics platforms, and AI-assisted engineering',
            'A practical path for interviews, collaboration, or quick screening',
          ],
        },
        {
          badge: 'Engineers / Tech leads / PMs',
          title: 'Go straight to the Blog',
          description:
            'Jump directly into my writing on frontend architecture, enterprise systems, AI-assisted engineering workflows, and side project implementation.',
          href: '/blog',
          label: 'Go to the Blog',
          actions: [
            {
              label: 'Go to the Blog',
              href: '/blog',
            },
            {
              label: 'View Projects',
              href: '/projects',
            },
          ],
          bullets: [
            'Real-world thinking on frontend architecture and enterprise systems',
            'Writing across Next.js, React, TypeScript, and AI-assisted development',
            'A fast way to evaluate technical depth, tradeoff thinking, and delivery style',
          ],
        },
      ],
    },
    about: {
      projectsPromptTitle: 'You can also browse my side projects',
      projectsPromptDescription:
        'The Projects page now focuses on public GitHub side projects and keeps them separate from career experience.',
      projectsPromptCta: 'View Projects',
    },
    experience: {
      title: 'Representative Experience',
      intro:
        'These five experiences capture the work that best represents how I approach e-commerce, logistics, enterprise systems, and frontend architecture.',
      stackLabel: 'Stack and Platforms',
      impactLabel: 'Highlights',
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
    projects: {
      title: 'Projects',
      intro:
        'This page now focuses on public GitHub side projects instead of career experience, so personal product work and professional background stay clearly separated.',
      stackLabel: 'Stack and Platforms',
      impactLabel: 'Highlights',
      callsToAction: [
        {
          label: 'GitHub repositories',
          href: 'https://github.com/seenseanchen?tab=repositories',
        },
      ],
      entries: [
        {
          title: 'EC Order Aggregator',
          role: 'A personal Chrome Extension side project for consolidating order history across Taiwan e-commerce platforms',
          period: 'Public side project / 2026',
          summary:
            'It turns order data scattered across PChome, momo, Shopee, and Yahoo Shopping into a searchable, sortable, and continuously growing personal purchase history.',
          stack: ['TypeScript', 'React 19', 'Vite', 'Dexie', 'Zustand', 'Chrome Extension MV3'],
          impact: [
            'Currently supports purchase aggregation from PChome, momo, Shopee, and Yahoo Shopping.',
            'Uses content scripts, a background service worker, Dexie, and a side panel to build a reusable collection pipeline.',
            'Already supports search, sorting, status filtering, and manual refresh as part of an MVP-to-early-product workflow.',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/ec-order-aggregator-ext',
            },
          ],
        },
      ],
    },
  },
}

export function getPageContent(locale: Locale) {
  return pageContent[locale]
}
