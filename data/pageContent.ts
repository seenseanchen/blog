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

type CareerEntry = {
  company: string
  role: string
  period: string
  yearLabel: string
  summary: string
  focus: string[]
}

type ExperienceHighlightEntry = {
  title: string
  company: string
  period: string
  summary: string
  stack: string[]
}

type ProjectEntry = {
  title: string
  role: string
  period: string
  summary: string
  stack: string[]
  impact: string[]
  links?: CallToAction[]
}

export type CareerSectionContent = {
  title: string
  intro: string
  focusLabel: string
  entries: CareerEntry[]
  highlightsTitle: string
  highlightsIntro: string
  highlights: ExperienceHighlightEntry[]
}

export type ShowcaseSectionContent = {
  title: string
  intro: string
  stackLabel: string
  impactLabel: string
  entries: ProjectEntry[]
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
    liveActivityTitle: string
    liveActivityDescription: string
    liveActivityCta: string
    liveActivityGithubTitle: string
    liveActivityGithubDescription: string
    liveActivityRepoTitle: string
    liveActivityLeetcodeTitle: string
  }
  experience: CareerSectionContent
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
        '關於 Sean Chen 的背景、工作方式，以及從物流到電商的職涯經歷時間軸。',
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
          description: '快速掌握我的背景、角色定位、工作方式，以及從最近一路回看職涯歷程的時間軸。',
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
            '從大型電商到物流平台的職涯脈絡',
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
      liveActivityTitle: '近期動態',
      liveActivityDescription: '把最近持續變動的公開工程活動集中在這裡，方便快速理解我最近的開發節奏。',
      liveActivityCta: '查看 GitHub',
      liveActivityGithubTitle: 'GitHub 月活躍熱區',
      liveActivityGithubDescription: '用最近 5 週的公開活動密度，快速看我的月度開發節奏。',
      liveActivityRepoTitle: '活躍 Repo',
      liveActivityLeetcodeTitle: 'LeetCode 練習紀錄',
    },
    experience: {
      title: '經歷',
      intro: '依角色與時間軸從最近排到最初，濃縮我從物流平台、Newegg 到職涯起點的工作歷程。',
      focusLabel: '關鍵脈絡',
      entries: [
        {
          company: 'SJC',
          role: '資深前端開發',
          period: '2024 - 2026',
          yearLabel: '2024',
          summary:
            '主導物流與貨代管理平台的前端架構與核心流程開發，從 0 到 1 建立 React / Next.js 工程基礎，並整合既有 OutSystems 與 .NET 系統。',
          focus: ['物流平台', '前端架構', '0-to-1'],
        },
        {
          company: 'Newegg',
          role: 'Staff Engineer',
          period: '2021 - 2024',
          yearLabel: '2021',
          summary:
            '在 B2C Mobile Site 與 React Native App 承擔技術帶領角色，聚焦產品穩定性、關鍵體驗效能與跨地區協作節奏。',
          focus: ['Mobile Site', 'React Native', '技術帶領'],
        },
        {
          company: 'Newegg',
          role: 'Senior Developer',
          period: '2019 - 2021',
          yearLabel: '2019',
          summary:
            '推動統一登入、站點拆分與跨平台體驗重整，把大型電商前端從功能維護帶往更可持續的結構。',
          focus: ['統一登入', '站點拆分', '跨平台'],
        },
        {
          company: 'Newegg',
          role: 'Developer',
          period: '2016 - 2019',
          yearLabel: '2016',
          summary:
            '在 Newegg Business 參與 B2B Rewards、會員分級與帳戶流程，把複雜商業規則轉成可營運的電商功能。',
          focus: ['B2B 電商', '會員機制', '商業規則'],
        },
        {
          company: '新陽',
          role: 'Junior Software Developer',
          period: '職涯起點',
          yearLabel: '起點',
          summary:
            '從早期商業系統開發累積需求理解、系統實作與團隊協作的基本功，建立後續投入企業系統與前端工程的起點。',
          focus: ['商業系統', '需求理解', '開發基礎'],
        },
      ],
      highlightsTitle: '經歷代表作',
      highlightsIntro: '先以目前站內可對齊的版本整理代表作，延續你在職涯中最具代表性的系統與架構工作。',
      highlights: [
        {
          title: 'Logistics Platform',
          company: 'SJC',
          period: '2024 - 2026',
          summary:
            '主導新一代物流與貨代管理平台前端架構，建立 Booking、Trucking 等核心流程與多語系基礎。',
          stack: ['React', 'Next.js', 'TypeScript', '.NET', 'OutSystems'],
        },
        {
          title: 'Newegg Mobile Site & App',
          company: 'Newegg',
          period: '2021 - 2024',
          summary:
            '在 B2C Mobile Site 與 React Native App 承擔穩定性、效能優化與技術帶領工作。',
          stack: ['React', 'React Native', 'MobX', 'GA4'],
        },
        {
          title: 'Newegg Unify Login',
          company: 'Newegg',
          period: '2019 - 2021',
          summary: '整合 B2B / B2C Website 與 App 登入流程，重整跨平台身份驗證體驗。',
          stack: ['React', 'Cookie', 'LocalStorage', 'AsyncStorage'],
        },
        {
          title: 'Secure Site Split / Monorepo Evolution',
          company: 'Newegg',
          period: '2019 - 2021',
          summary: '將大型前端站點拆分為可獨立部署單位，降低發布風險並強化模組邊界。',
          stack: ['React', 'Monorepo', 'Deployment Workflow'],
        },
        {
          title: 'Newegg B2B Rewards',
          company: 'Newegg',
          period: '2016 - 2019',
          summary: '把 B2B 會員分級、積分與優惠規則轉成可營運的實際產品功能。',
          stack: ['ASP.NET MVC', 'JavaScript', 'jQuery'],
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
        "Sean Chen's background, working style, and career timeline across logistics, e-commerce, and frontend architecture.",
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
            'Get a fast overview of my background, positioning, working style, and the career timeline that shows how my work evolved.',
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
            'A career path that runs from large-scale e-commerce into logistics platforms',
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
      liveActivityTitle: 'Live Activity',
      liveActivityDescription:
        'A compact view of the public engineering signals that keep changing, so visitors can quickly see what I have been doing recently.',
      liveActivityCta: 'View GitHub',
      liveActivityGithubTitle: 'GitHub Monthly Heatmap',
      liveActivityGithubDescription:
        'A month-scale view of my recent public activity so the current development rhythm is easier to scan.',
      liveActivityRepoTitle: 'Active Repos',
      liveActivityLeetcodeTitle: 'LeetCode Practice',
    },
    experience: {
      title: 'Experience',
      intro:
        'Organized by role from the most recent chapter back to my starting point, this is the shortest useful view of how my work evolved.',
      focusLabel: 'Focus',
      entries: [
        {
          company: 'SJC',
          role: 'Senior Frontend Developer',
          period: '2024 - 2026',
          yearLabel: '2024',
          summary:
            'Led frontend architecture and core workflow delivery for a logistics and forwarding platform, building the React / Next.js foundation from 0 to 1 while integrating with existing OutSystems and .NET systems.',
          focus: ['Logistics platform', 'Frontend architecture', '0-to-1'],
        },
        {
          company: 'Newegg',
          role: 'Staff Engineer',
          period: '2021 - 2024',
          yearLabel: '2021',
          summary:
            'Took on technical leadership across the B2C Mobile Site and React Native App, with emphasis on product stability, critical-path performance, and cross-region execution.',
          focus: ['Mobile Site', 'React Native', 'Technical leadership'],
        },
        {
          company: 'Newegg',
          role: 'Senior Developer',
          period: '2019 - 2021',
          yearLabel: '2019',
          summary:
            'Drove unified login, site splitting, and cross-platform experience improvements that moved a large e-commerce frontend toward a more sustainable structure.',
          focus: ['Unified login', 'Site split', 'Cross-platform'],
        },
        {
          company: 'Newegg',
          role: 'Developer',
          period: '2016 - 2019',
          yearLabel: '2016',
          summary:
            'Worked on Newegg Business features such as B2B Rewards, membership tiers, and account flows, turning complex business rules into operable e-commerce behavior.',
          focus: ['B2B e-commerce', 'Membership', 'Business rules'],
        },
        {
          company: 'Shin Yang',
          role: 'Junior Software Developer',
          period: 'Career start',
          yearLabel: 'Start',
          summary:
            'Built the early foundation around business-system delivery, requirements understanding, and team collaboration that shaped my later work in enterprise systems and frontend engineering.',
          focus: ['Business systems', 'Requirements', 'Engineering basics'],
        },
      ],
      highlightsTitle: 'Selected Work',
      highlightsIntro:
        'This rebuild uses the representative work already described in the site so the section stays aligned until I can map it directly to the resume attachment.',
      highlights: [
        {
          title: 'Logistics Platform',
          company: 'SJC',
          period: '2024 - 2026',
          summary:
            'Led the frontend architecture for a next-generation logistics and forwarding platform across core business workflows and multilingual system foundations.',
          stack: ['React', 'Next.js', 'TypeScript', '.NET', 'OutSystems'],
        },
        {
          title: 'Newegg Mobile Site & App',
          company: 'Newegg',
          period: '2021 - 2024',
          summary:
            'Owned reliability, performance, and technical leadership across the B2C Mobile Site and React Native App.',
          stack: ['React', 'React Native', 'MobX', 'GA4'],
        },
        {
          title: 'Newegg Unify Login',
          company: 'Newegg',
          period: '2019 - 2021',
          summary:
            'Unified authentication flows across B2B / B2C websites and mobile applications to improve cross-platform consistency.',
          stack: ['React', 'Cookie', 'LocalStorage', 'AsyncStorage'],
        },
        {
          title: 'Secure Site Split / Monorepo Evolution',
          company: 'Newegg',
          period: '2019 - 2021',
          summary:
            'Split a large frontend site into independently deployable units and clarified module boundaries for safer releases.',
          stack: ['React', 'Monorepo', 'Deployment Workflow'],
        },
        {
          title: 'Newegg B2B Rewards',
          company: 'Newegg',
          period: '2016 - 2019',
          summary:
            'Turned B2B rewards, membership, and account rules into maintainable product behavior inside a real e-commerce platform.',
          stack: ['ASP.NET MVC', 'JavaScript', 'jQuery'],
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
