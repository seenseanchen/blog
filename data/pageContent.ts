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
  location?: string
  bullets: string[]
  focus: string[]
  logoSrc?: string
  logoAlt?: string
  links?: CallToAction[]
}

type ExperienceHighlightEntry = {
  title: string
  company: string
  period: string
  bullets: string[]
  imageSrc: string
  imageAlt: string
  stack: string[]
  links?: CallToAction[]
}

export type ProjectDetailSection = {
  heading: string
  items: string[]
}

export type ProjectDetails = {
  intro?: string
  sections: ProjectDetailSection[]
  actions?: CallToAction[]
}

type ProjectEntry = {
  title: string
  role: string
  period: string
  summary: string
  stack: string[]
  impact: string[]
  links?: CallToAction[]
  details?: ProjectDetails
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
  detailsButtonLabel?: string
  detailsCloseLabel?: string
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
      aboutDescription: '關於 Sean Chen 的背景、工作方式，以及從物流到電商的職涯經歷時間軸。',
      projectsDescription: 'Sean Chen 目前公開在 GitHub 的 side projects 與實作方向。',
      tagsDescription: 'Sean Chen 文章的標籤總覽與主題入口。',
    },
    home: {
      eyebrow: "Sean's 心想 Blog",
      title: '以好奇心探索新知，以責任感實踐卓越。',
      description:
        '這裡，是想讓了解我的人，快速了解我的背景；以及，也是我自己強迫自主學習的空間。如果你是招募、合作或想了解我的人，建議先看「關於」；如果你是技術讀者，直接進入「文章」或「專案」。',
      audiences: [
        {
          badge: 'HR / 招募 / 非技術讀者',
          title: '關於我',
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
          title: '看文章',
          description: '我對前端架構、企業系統與 AI 工程流程的文章與 side project 實作。',
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
      liveActivityDescription: '',
      liveActivityCta: '查看 GitHub',
      liveActivityGithubTitle: 'GitHub 活躍熱區',
      liveActivityGithubDescription: '',
      liveActivityRepoTitle: '活躍 Repo',
      liveActivityLeetcodeTitle: 'LeetCode 練習紀錄',
    },
    experience: {
      title: '經歷',
      intro:
        '從新陽電腦的 Junior Developer 起步，經歷 Newegg Business 的北美電商網站開發與擔任 Scrum Master，再跨部門轉往 Mobile 領域，擔任 Newegg Mobile 的前端 Senior Developer 與 Team Leader，近期到 SJClemenger 規劃國際物流系統的 0-1 前端架構。',
      focusLabel: '關鍵脈絡',
      entries: [
        {
          company: '新加坡商昭津國際物流有限公司台灣分公司',
          role: '資深軟體工程師',
          period: '2024/5 - 2026/2 · 1y10m',
          yearLabel: '2024',
          location: '台中',
          bullets: [
            '負責 FirstHorizon 物流與貨代管理平台的前端 0-1 架構建置。',
            '使用 React / Next.js / TypeScript 建立共用元件、流程頁與多語系基礎。',
            '整合 .NET RESTful API，並完成 Azure 測試、驗收與部署。',
            'OutSystems(低代碼平台)上的 TMS 與倉儲系統的維護與優化',
          ],
          focus: ['FirstHorizon', 'Booking / Trucking', 'Azure CI/CD', 'OutSystems低代碼'],
          logoSrc: '/static/images/sjclemenger-logo.jpeg',
          logoAlt: 'SJClemenger logo',
        },
        {
          company: '台灣新蛋',
          role: 'Staff Engineer',
          period: '2021/10 - 2024/2 · 2y5m',
          yearLabel: '2021',
          location: '台中',
          bullets: [
            '擔任 B2C Mobile Site 與 React Native App 的 Frontend Leader，帶領 6 人團隊與美國、中國團隊協作。',
            '支撐月活躍 200 萬的 Mobile Site 與 100 萬的 Mobile App，持續優化穩定性、效能與交付流程。',
            '推進 WebView 架構、GA4 導入與 Team Leader 協作機制，讓產品與前端工程節奏更穩定。',
          ],
          focus: ['6 人團隊', '200萬 / 100萬 MAU', '99.9X% 穩定度', 'GA4'],
          logoSrc: '/static/images/newegg-logo.jpeg',
          logoAlt: 'Newegg logo',
          links: [
            {
              label: '2024 Work Introduction',
              href: 'https://youtu.be/JelAveQVqoU',
            },
          ],
        },
        {
          company: '台灣新蛋',
          role: 'Senior Developer',
          period: '2019/9 - 2021/10 · 2y2m',
          yearLabel: '2019',
          location: '台中',
          bullets: [
            '負責 Newegg B2C Mobile Site 的日常開發、維護與跨區交付。',
            '主導 Secure Site Split 與 Unify Login 等跨團隊重構專案。',
            '把大型電商前端從單站點模式推向更可持續的多站點與跨平台架構。',
          ],
          focus: ['1 站拆成 6 站', 'Unify Login', '跨區協作', '2020 優秀員工'],
          logoSrc: '/static/images/newegg-logo.jpeg',
          logoAlt: 'Newegg logo',
        },
        {
          company: 'Newegg Business',
          role: 'Developer / Scrum Master',
          period: '2013/9 - 2019/9 · 6y1m',
          yearLabel: '2013',
          location: '台中',
          bullets: [
            '長期負責 Newegg Business B2B 電商平台，從 ASP.NET MVC 重構到 Secure 站點功能維護。',
            '2016 年後擔任 Scrum Master，協調開發節奏、需求拆解與跨角色合作。',
            '推進購物車、結帳、歷史訂單、Message Center 與 Rewards 等核心商務流程。',
          ],
          focus: ['B2B E-Commerce', 'Scrum Master', '2-Step 專案', 'Rewards'],
          logoSrc: '/static/images/newegg-business-logo.jpeg',
          logoAlt: 'Newegg Business logo',
        },
        {
          company: '新陽電腦',
          role: 'Junior Software Developer',
          period: '2012/12 - 2013/9 · 10m',
          yearLabel: '2012',
          location: '台中',
          bullets: [
            '在系統整合型專案中負責維護與擴充客戶系統。',
            '處理 C#、JavaScript、HTML、MS SQL、Windows Form 與說明文件。',
            '建立面對客戶、需求與實務系統的基礎能力。',
          ],
          focus: ['系統整合', 'C# / MS SQL', 'Windows Form', '客戶支援'],
        },
      ],
      highlightsTitle: '經歷代表作',
      highlightsIntro: '',
      highlights: [
        {
          title: 'FirstHorizon 前端 0-1 與 Azure CI/CD',
          company: '新加坡商昭津國際物流有限公司台灣分公司',
          period: '2024/5 - 2026/2',
          bullets: [
            '從 0 到 1 建立物流與貨代管理平台的前端工程架構。',
            '涵蓋 Booking / Trucking 核心流程、多語系規則、共用元件與 RESTful API 串接。',
            '完成 Azure CI/CD、自動化部署，以及系統測試與驗收上線。',
          ],
          imageSrc: '/static/images/firsthorizon-showcase.jpg',
          imageAlt: 'FirstHorizon booking dashboard screenshot',
          stack: [
            'React',
            'Next.js',
            'TypeScript',
            '.NET RESTful API',
            'Azure CI/CD',
            'OutSystems',
          ],
        },
        {
          title: 'Newegg Mobile App',
          company: '台灣新蛋',
          period: '2021/10 - 2024/2',
          bullets: [
            '支撐月活躍 100 萬的 Mobile App，持續優化穩定度與使用體驗。',
            '把 App 穩定度維持在 99.9X%，App Store 維持 4.6+ 評分。',
            '推進 WebView 架構與 GA4 事件追蹤，讓產品與資料分析更完整。',
          ],
          imageSrc: '/static/images/newegg-mobile-app-showcase.jpg',
          imageAlt: 'Newegg mobile app screenshot',
          stack: ['React Native', 'MobX', 'WebView', 'GA4', 'Performance Tuning'],
          links: [
            {
              label: 'App Store',
              href: 'https://apps.apple.com/us/app/newegg-tech-shopping-online/id345188269',
            },
          ],
        },
        {
          title: 'Newegg Mobile Site',
          company: '台灣新蛋',
          period: '2019/9 - 2024/2',
          bullets: [
            '負責 B2C Mobile Site 的日常開發、維護與跨區交付。',
            '支撐月活躍 200 萬的 Mobile Site，持續優化效能與前端體驗。',
            '經歷 Secure Site Split、Unify Login、WebView 與 GA4 等跨階段重構與產品演進。',
          ],
          imageSrc: '/static/images/newegg-mobile-site-showcase.jpg',
          imageAlt: 'Newegg mobile experience screenshot',
          stack: ['React', 'MobX', 'GA4', 'WebView', 'Performance Tuning', 'Cross-team Delivery'],
          links: [
            {
              label: 'Website',
              href: 'https://www.newegg.com',
            },
          ],
        },
        {
          title: 'Newegg Business',
          company: 'Newegg Business',
          period: '2013/9 - 2019/9',
          bullets: [
            '從 Secure 站點 MVC 重構一路做到 Scrum Master，長期負責 B2B 電商平台。',
            '推進購物車、結帳、歷史訂單、帳戶流程與 Message Center 等核心商務體驗。',
            '參與 2019 B2B 2-Step 與 2015 Rewards 等專案，支撐會員與交易流程演進。',
          ],
          imageSrc: '/static/images/newegg-business-showcase.jpg',
          imageAlt: 'Newegg Business website screenshot',
          stack: ['C#', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'AJAX', 'React'],
          links: [
            {
              label: 'Website',
              href: 'https://www.neweggbusiness.com',
            },
          ],
        },
      ],
    },
    projects: {
      title: '專案',
      intro: '',
      stackLabel: '技術與平台',
      impactLabel: '重點整理',
      detailsButtonLabel: '瀏覽細節',
      detailsCloseLabel: '關閉',
      callsToAction: [
        {
          label: 'GitHub repo 列表',
          href: 'https://github.com/seenseanchen?tab=repositories',
        },
      ],
      entries: [
        {
          title: 'Secure Data Masker',
          role: '在瀏覽器本地處理的敏感資料去識別化工具',
          period: 'Public side project / 2026',
          summary:
            '針對 JSON、XML、純文字 / log 的敏感資料，提供智慧遮罩規則與自訂字典，全程在瀏覽器離線處理，不上傳任何資料。',
          stack: [
            'React 19',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Framer Motion',
            'Lucide React',
          ],
          impact: [
            '支援 JSON / XML / 純文字 / log 的多格式自動判斷與遮罩。',
            '內建常見敏感關鍵字字典，可切換精準比對或模糊比對模式。',
            '所有處理皆在瀏覽器離線完成，適合在受規範環境下快速脫敏測試資料。',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/Secure-Data-Masker',
            },
          ],
          details: {
            intro:
              '給開發者與資安人員快速把 JSON、XML、純文字中的敏感欄位去識別化，保留資料結構與格式，方便用在測試、日誌分享或文件截圖。',
            sections: [
              {
                heading: '核心功能',
                items: [
                  '隱私優先：所有處理都在瀏覽器本地完成，不會上傳到任何伺服器。',
                  '多格式支援：自動判斷 JSON、XML、純文字與 log，並套用對應的遮罩邏輯。',
                  '智慧遮罩策略：字串替換為 [KEYWORD_NAME] 保留語意、數字隨機化但保持原有位數、布林值自動翻轉以保護狀態旗標。',
                  '規則管理：內建常見敏感字典（API Key、Password、SSN 等），支援精準 / 模糊比對，並可匯出 .json 規則與團隊共用。',
                ],
              },
              {
                heading: '支援格式',
                items: ['JSON 物件與陣列。', 'XML 文件。', '純文字與 log 檔。'],
              },
              {
                heading: '使用流程',
                items: [
                  '將原始敏感資料貼到左側 Raw Input 區。',
                  '於左側側邊欄調整遮罩策略或新增自訂關鍵字。',
                  '從右側 Masked Output 複製處理後的結果。',
                ],
              },
              {
                heading: '技術棧',
                items: [
                  'React 19 + Vite 作為前端基礎。',
                  'TypeScript 強化型別安全。',
                  'Tailwind CSS 處理高密度暗色 Dashboard UI。',
                  'Framer Motion 提供介面動畫。',
                  'Lucide React 提供 icon。',
                ],
              },
              {
                heading: '安全備註',
                items: [
                  '零伺服器通訊的 privacy-first 架構，適合處理高度敏感資料。',
                  '適用場景：測試資料脫敏、log 分享、文件截圖前的快速遮罩。',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://secure-data-masker-phi.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/Secure-Data-Masker',
              },
            ],
          },
        },
        {
          title: 'Icon Resizer Pro',
          role: '多平台圖示與截圖一鍵轉換的瀏覽器工具',
          period: 'Public side project / 2026',
          summary:
            '一張原圖、一次產生 Chrome Extension、iOS、Android、Web / Favicon 需要的所有尺寸，全程在瀏覽器本地處理、不上傳任何檔案。',
          stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'JSZip', 'FileSaver', 'Motion'],
          impact: [
            '支援 Chrome Extension、iOS App Store、Android、Web / Favicon 四大平台所需的完整尺寸規格。',
            '自動化批次縮放與 .zip 打包，省掉逐一產圖與壓縮的重複流程。',
            '純前端本地處理，圖片不會上傳至伺服器，兼顧隱私與速度。',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/Icon-Resizer',
            },
          ],
          details: {
            intro:
              '把一張高解析原圖（建議 1024x1024 以上）轉成各平台需要的所有 icon 與 screenshot 尺寸，並以 .zip 一次下載。',
            sections: [
              {
                heading: '核心功能',
                items: [
                  '多平台一次輸出：Chrome Extension、iOS、Android、Web / Favicon 同步產出。',
                  '智慧縮放與置中：處理寬高比不同的輸出格式（例如 Chrome 商店截圖）。',
                  '批次 .zip 下載：把所有尺寸檔案打包成單一壓縮檔。',
                  '本地處理、保護隱私：不需後端，圖片不會離開瀏覽器。',
                ],
              },
              {
                heading: '支援規格',
                items: [
                  'Chrome Extension：16 / 32 / 48 / 128 PNG、1280x800 與 640x400 JPEG 截圖。',
                  'iOS App Store：iPhone / iPad @2x、@3x 系列，以及 1024x1024 商店主圖。',
                  'Android：mdpi 到 xxxhdpi 多密度、512x512 Google Play 主圖。',
                  'Web / Favicon：16 / 32 favicon、180x180 Apple Touch、Android Chrome manifest icons。',
                ],
              },
              {
                heading: '使用流程',
                items: [
                  '上傳或拖曳一張高解析度原圖（建議 1024x1024 以上）。',
                  '選擇目標平台（Chrome Extension / iOS / Android / Web）。',
                  '一鍵下載打包好的 .zip，檔案皆為對應規格命名。',
                ],
              },
              {
                heading: '技術棧',
                items: [
                  'React 19 + TypeScript 的元件化結構。',
                  'Tailwind CSS 處理 UI、Lucide React 提供 icon。',
                  'Vite 作為開發與建置工具。',
                  'JSZip + FileSaver 負責打包與下載流程。',
                  'Motion 處理 UI 動畫互動。',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://icon-resizer-xi.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/Icon-Resizer',
              },
            ],
          },
        },
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
      eyebrow: "Sean's 心想 Blog",
      title: 'Explore with curiosity. Excel with responsibility.',
      description:
        'This is a place for people who want to know me to quickly understand my background, and also a space where I push myself to keep learning. If you are here for recruiting, collaboration, or simply to get to know me, start with About. If you are a technical reader, jump straight into the Blog or Projects.',
      audiences: [
        {
          badge: 'HR / Recruiting / Non-technical readers',
          title: 'About Me',
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
          title: 'Read the Blog',
          description:
            'My writing and side project work on frontend architecture, enterprise systems, and AI engineering workflows.',
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
      liveActivityDescription: '',
      liveActivityCta: 'View GitHub',
      liveActivityGithubTitle: 'GitHub Activity Heatmap',
      liveActivityGithubDescription: '',
      liveActivityRepoTitle: 'Active Repos',
      liveActivityLeetcodeTitle: 'LeetCode Practice',
    },
    experience: {
      title: 'Experience',
      intro:
        'I started as a Junior Developer at SunYoung Computer, then worked on North American e-commerce websites and took on Scrum Master responsibilities at Newegg Business. After that, I moved across departments into the mobile domain as a frontend Senior Developer and Team Leader on Newegg Mobile, and more recently planned the 0-to-1 frontend architecture for international logistics systems at SJClemenger.',
      focusLabel: 'Focus',
      entries: [
        {
          company: 'SJClemenger',
          role: 'Senior Software Engineer',
          period: '2024/5 - 2026/2 · 1y10m',
          yearLabel: '2024',
          location: 'Taiwan',
          bullets: [
            'Led the 0-to-1 frontend architecture for the FirstHorizon logistics and forwarding platform.',
            'Built the React / Next.js / TypeScript foundation, shared components, workflow pages, and multilingual UI patterns.',
            'Integrated .NET RESTful APIs and completed Azure testing, acceptance, and deployment.',
            'Maintained and optimized TMS and warehouse systems built on OutSystems, a low-code platform.',
          ],
          focus: ['FirstHorizon', 'Booking / Trucking', 'Azure CI/CD', 'OutSystems low-code'],
          logoSrc: '/static/images/sjclemenger-logo.jpeg',
          logoAlt: 'SJClemenger logo',
        },
        {
          company: '台灣新蛋',
          role: 'Staff Engineer',
          period: '2021/10 - 2024/2 · 2y5m',
          yearLabel: '2021',
          location: 'Taiwan',
          bullets: [
            'Served as Frontend Leader for the B2C Mobile Site and React Native App, leading a team of 6 across Taiwan, the US, and China.',
            'Supported 2M monthly active users on mobile web and 1M on the app while improving stability, performance, and delivery rhythm.',
            'Rolled out WebView architecture, GA4 instrumentation, and stronger team-level frontend collaboration.',
          ],
          focus: ['Team of 6', '2M / 1M MAU', '99.9X% stability', 'GA4'],
          logoSrc: '/static/images/newegg-logo.jpeg',
          logoAlt: 'Newegg logo',
          links: [
            {
              label: '2024 Work Introduction',
              href: 'https://youtu.be/JelAveQVqoU',
            },
          ],
        },
        {
          company: 'Newegg',
          role: 'Senior Developer',
          period: '2019/9 - 2021/10 · 2y2m',
          yearLabel: '2019',
          location: 'Taiwan',
          bullets: [
            'Owned day-to-day development on the B2C Mobile Site and cross-region delivery work.',
            'Drove Secure Site Split and Unify Login as two signature cross-team projects.',
            'Moved a large e-commerce frontend toward a more sustainable multi-site and cross-platform architecture.',
          ],
          focus: ['1 site to 6 sites', 'Unify Login', 'Cross-region delivery', '2020 awards'],
          logoSrc: '/static/images/newegg-logo.jpeg',
          logoAlt: 'Newegg logo',
        },
        {
          company: 'Newegg Business',
          role: 'Developer / Scrum Master',
          period: '2013/9 - 2019/9 · 6y1m',
          yearLabel: '2013',
          location: 'Taiwan',
          bullets: [
            'Worked across the Newegg Business B2B platform from secure-site refactoring into broader feature ownership.',
            'Stepped into Scrum leadership to coordinate delivery cadence, requirement breakdown, and cross-role collaboration.',
            'Covered cart, checkout, order history, account flows, Message Center, and Rewards.',
          ],
          focus: ['B2B e-commerce', 'Scrum Master', '2-Step project', 'Rewards'],
          logoSrc: '/static/images/newegg-business-logo.jpeg',
          logoAlt: 'Newegg Business logo',
        },
        {
          company: 'SunYoung Computer',
          role: 'Junior Software Developer',
          period: '2012/12 - 2013/9 · 10m',
          yearLabel: '2012',
          location: 'Taiwan',
          bullets: [
            'Built my foundation in client-facing system integration work.',
            'Handled web maintenance, new feature delivery, Windows Forms updates, database operations, and documentation.',
            'Learned how to work directly with user needs, system constraints, and day-to-day support scenarios.',
          ],
          focus: ['System integration', 'C# / MS SQL', 'Windows Forms', 'User support'],
        },
      ],
      highlightsTitle: 'Selected Work',
      highlightsIntro: '',
      highlights: [
        {
          title: 'FirstHorizon Frontend 0-to-1 and Azure CI/CD',
          company: 'SJClemenger',
          period: '2024/5 - 2026/2',
          bullets: [
            'Built the frontend engineering foundation for the FirstHorizon logistics platform from scratch.',
            'Covered Booking / Trucking workflows, multilingual UI rules, shared components, and RESTful API integration.',
            'Completed Azure CI/CD, automated deployment, and production-ready delivery through testing and acceptance.',
          ],
          imageSrc: '/static/images/firsthorizon-showcase.jpg',
          imageAlt: 'FirstHorizon booking dashboard screenshot',
          stack: [
            'React',
            'Next.js',
            'TypeScript',
            '.NET RESTful API',
            'Azure CI/CD',
            'OutSystems',
          ],
        },
        {
          title: 'Newegg Mobile App',
          company: 'Newegg',
          period: '2021/10 - 2024/2',
          bullets: [
            'Supported a mobile app with 1M monthly active users while improving stability and user experience.',
            'Held app stability at 99.9X% and maintained 4.6+ App Store ratings.',
            'Rolled out WebView architecture and GA4 tracking to strengthen product and analytics workflows.',
          ],
          imageSrc: '/static/images/newegg-mobile-app-showcase.jpg',
          imageAlt: 'Newegg mobile app screenshot',
          stack: ['React Native', 'MobX', 'WebView', 'GA4', 'Performance Tuning'],
          links: [
            {
              label: 'App Store',
              href: 'https://apps.apple.com/us/app/newegg-tech-shopping-online/id345188269',
            },
          ],
        },
        {
          title: 'Newegg Mobile Site',
          company: 'Newegg',
          period: '2019/9 - 2024/2',
          bullets: [
            'Owned ongoing development and cross-region delivery for the B2C Mobile Site.',
            'Supported 2M monthly active users while improving performance and frontend experience quality.',
            'Worked through Secure Site Split, Unify Login, WebView, and GA4 across multiple stages of product evolution.',
          ],
          imageSrc: '/static/images/newegg-mobile-site-showcase.jpg',
          imageAlt: 'Newegg mobile experience screenshot',
          stack: ['React', 'MobX', 'GA4', 'WebView', 'Performance Tuning', 'Cross-team Delivery'],
          links: [
            {
              label: 'Website',
              href: 'https://www.newegg.com',
            },
          ],
        },
        {
          title: 'Newegg Business',
          company: 'Newegg Business',
          period: '2013/9 - 2019/9',
          bullets: [
            'Moved from secure-site MVC refactoring into long-term ownership of the B2B commerce platform.',
            'Covered cart, checkout, order history, account management, and Message Center across core business flows.',
            'Contributed to projects such as 2019 B2B 2-Step and the 2015 Rewards rollout that supported membership and transaction growth.',
          ],
          imageSrc: '/static/images/newegg-business-showcase.jpg',
          imageAlt: 'Newegg Business website screenshot',
          stack: ['C#', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'AJAX', 'React'],
          links: [
            {
              label: 'Website',
              href: 'https://www.neweggbusiness.com',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      intro: '',
      stackLabel: 'Stack and Platforms',
      impactLabel: 'Highlights',
      detailsButtonLabel: 'View Details',
      detailsCloseLabel: 'Close',
      callsToAction: [
        {
          label: 'GitHub repositories',
          href: 'https://github.com/seenseanchen?tab=repositories',
        },
      ],
      entries: [
        {
          title: 'Secure Data Masker',
          role: 'A browser-based, offline tool for de-identifying sensitive data in JSON, XML, and plain text',
          period: 'Public side project / 2026',
          summary:
            'A privacy-first client-side utility that masks sensitive fields in JSON, XML, and log-style text, with configurable rules and dictionaries — no data ever leaves the browser.',
          stack: [
            'React 19',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Framer Motion',
            'Lucide React',
          ],
          impact: [
            'Detects and masks data across JSON, XML, and plain text / logs with format-aware rules.',
            'Ships a built-in dictionary of common sensitive keywords with exact and fuzzy matching modes.',
            'Runs entirely offline in the browser, making it safe for quick de-identification in regulated environments.',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/Secure-Data-Masker',
            },
          ],
          details: {
            intro:
              'Built for developers and security-minded engineers who need to quickly de-identify sensitive data while preserving structure and format for testing, log sharing, or screenshots.',
            sections: [
              {
                heading: 'Core Features',
                items: [
                  'Privacy-first: every transformation runs locally in the browser, with zero server uploads.',
                  'Multi-format support: auto-detects JSON, XML, plain text, and log files, applying the right masking logic for each.',
                  'Smart masking strategies: strings become [KEYWORD_NAME] to preserve context, numbers are randomized while keeping original digit length, and booleans are flipped to protect status flags.',
                  'Rule management: a built-in dictionary of sensitive terms (API Keys, Passwords, SSN, etc.) with exact / fuzzy matching and the ability to export custom rules as .json for team sharing.',
                ],
              },
              {
                heading: 'Supported Formats',
                items: ['JSON objects and arrays.', 'XML documents.', 'Plain text and log files.'],
              },
              {
                heading: 'Usage Flow',
                items: [
                  'Paste sensitive data into the Raw Input area on the left.',
                  'Tune masking strategies or add custom keywords from the left sidebar.',
                  'Copy the processed result from Masked Output on the right.',
                ],
              },
              {
                heading: 'Tech Stack',
                items: [
                  'React 19 + Vite as the frontend foundation.',
                  'TypeScript for type safety.',
                  'Tailwind CSS for a high-density dark-mode dashboard UI.',
                  'Framer Motion for interface animations.',
                  'Lucide React for icons.',
                ],
              },
              {
                heading: 'Security Notes',
                items: [
                  'Zero server communication — a privacy-first architecture suitable for highly sensitive data.',
                  'Ideal for test-data de-identification, log sharing, and pre-screenshot redaction in compliance-sensitive workflows.',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://secure-data-masker-phi.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/Secure-Data-Masker',
              },
            ],
          },
        },
        {
          title: 'Icon Resizer Pro',
          role: 'A browser-based tool that converts a single image into every icon and screenshot size each platform needs',
          period: 'Public side project / 2026',
          summary:
            'One source image, every size that Chrome Extensions, iOS, Android, and the Web need — all processed locally in the browser with no uploads.',
          stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'JSZip', 'FileSaver', 'Motion'],
          impact: [
            'Covers the full size spec for Chrome Extensions, the iOS App Store, Android, and Web / Favicon output.',
            'Automates batch resizing and .zip packaging so no one has to export and compress images one by one.',
            'Runs entirely in the browser, keeping images local to protect privacy while staying fast.',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/Icon-Resizer',
            },
          ],
          details: {
            intro:
              'Upload one high-resolution source image (1024x1024 or larger recommended) and download a .zip with every icon and screenshot size each platform expects.',
            sections: [
              {
                heading: 'Core Features',
                items: [
                  'Multi-platform export: Chrome Extension, iOS, Android, and Web / Favicon sizes in a single run.',
                  'Smart scaling and centering: handles formats with different aspect ratios, such as Chrome store screenshots.',
                  'Batch .zip download: packages every generated size into a single compressed archive.',
                  'Local processing, privacy-first: no backend required, source images never leave the browser.',
                ],
              },
              {
                heading: 'Supported Specs',
                items: [
                  'Chrome Extension: 16 / 32 / 48 / 128 PNG icons plus 1280x800 and 640x400 JPEG screenshots.',
                  'iOS App Store: iPhone / iPad @2x and @3x variants, plus the 1024x1024 App Store icon.',
                  'Android: densities from mdpi through xxxhdpi, plus the 512x512 Google Play icon.',
                  'Web / Favicon: 16 / 32 favicons, 180x180 Apple Touch Icon, and Android Chrome manifest icons.',
                ],
              },
              {
                heading: 'Usage Flow',
                items: [
                  'Upload or drag-and-drop a high-resolution source image (1024x1024 or larger recommended).',
                  'Pick the target platform (Chrome Extension / iOS / Android / Web).',
                  'Download a single .zip with every asset pre-named for its spec.',
                ],
              },
              {
                heading: 'Tech Stack',
                items: [
                  'React 19 + TypeScript component structure.',
                  'Tailwind CSS for UI styling and Lucide React for icons.',
                  'Vite for development and builds.',
                  'JSZip + FileSaver to handle packaging and downloads.',
                  'Motion for UI animation and interaction.',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://icon-resizer-xi.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/Icon-Resizer',
              },
            ],
          },
        },
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
