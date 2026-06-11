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
  imageSrc?: string
  imageAlt?: string
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
          title: 'Oh Money · Buy Me Home',
          role: '行動優先、支援離線後援與跨裝置同步的個人記帳 PWA',
          period: 'Public side project / 2026',
          summary:
            '以「3 秒記下一筆」為核心，將快速收支輸入、期間統計、帳戶與分類篩選、搜尋及雲端同步整合成適合手機操作的個人記帳體驗。',
          imageSrc: '/static/images/oh-money-showcase.webp',
          imageAlt: 'Oh Money 手機版交易紀錄與分類篩選畫面',
          stack: [
            'Next.js App Router',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Supabase Auth + PostgreSQL',
            'PWA + Service Worker',
            'IndexedDB',
            'Vercel',
          ],
          impact: [
            '以低摩擦操作縮短記帳流程，讓使用者能快速新增收入或支出並立即回到日常使用情境。',
            '交易紀錄支援日、週、月、年與自訂期間，並可依關鍵字、類型、帳戶、分類與時間排序整理資料。',
            '整合 Email / 密碼與 Magic Link 登入、Supabase 同步，以及 Service Worker + IndexedDB 的離線後援。',
          ],
          links: [
            {
              label: 'Live Demo',
              href: 'https://oh-money-buy-me-home.vercel.app/',
            },
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/oh-money-buy-me-home',
            },
          ],
          details: {
            intro:
              'Oh Money 是一個針對手機使用情境設計的個人記帳 PWA。重點不是堆疊複雜報表，而是降低每天記錄與回查交易的摩擦，同時保留同步與離線使用能力。',
            sections: [
              {
                heading: '核心功能',
                items: [
                  '快速記帳：以精簡輸入流程記錄收入、支出、帳戶、分類、商家、描述與備註。',
                  '多期間檢視：支援日、週、月、年與自訂日期區間，方便回顧不同時間尺度的收支。',
                  '交易搜尋與篩選：可依商家 / 描述 / 備註搜尋，搭配交易類型、帳戶、分類與時間排序。',
                  '分類化管理：以餐飲、交通、購物、娛樂、居家、水電帳單、醫療、教育、旅行等分類快速整理支出。',
                ],
              },
              {
                heading: '登入與同步',
                items: [
                  '提供 Email / 密碼註冊登入與 Magic Link 無密碼登入。',
                  '以 Supabase Auth 管理使用者身分，並由 PostgreSQL 保存跨裝置同步的記帳資料。',
                  '介面明確顯示同步狀態，讓使用者知道本機資料是否已完成雲端同步。',
                ],
              },
              {
                heading: 'PWA 與離線策略',
                items: [
                  '以 standalone PWA 形式支援安裝到手機主畫面，採用 zh-TW、行動版 viewport 與深色主題。',
                  'Service Worker 對頁面導航採 network-first，成功後寫入快取；離線時回退到快取頁或 app shell。',
                  '靜態資源採 cache-first，離線資料由 IndexedDB 提供，Supabase API 與非 GET 請求不進入快取。',
                ],
              },
              {
                heading: '技術棧',
                items: [
                  'Next.js App Router + React + TypeScript 建立前端與登入流程。',
                  'Tailwind CSS 建構適合手機操作的 glass-style 響應式介面與明暗主題。',
                  'Supabase SSR / Auth / PostgreSQL 負責身分驗證與雲端資料同步。',
                  'Web App Manifest、Service Worker 與 IndexedDB 組成可安裝且具離線後援的 PWA。',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://oh-money-buy-me-home.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/oh-money-buy-me-home',
              },
            ],
          },
        },
        {
          title: 'SC1986 · 山強電訊資材',
          role: '以 RFQ 詢價為核心的工業電子材料型錄、報價車與管理後台',
          period: 'Public side project / 2026',
          summary:
            '把大量工業電子材料 SKU、規格搜尋、報價車與人工報價流程整合成一套免登入即可詢價的 B2B 型錄網站，並提供商品、CSV 與詢價案件管理後台。',
          imageSrc: '/static/images/sc1986-showcase.jpg',
          imageAlt: 'SC1986 山強電訊資材詢價型商城首頁',
          stack: [
            'Next.js 16',
            'React 19',
            'TypeScript',
            'Tailwind CSS v4',
            'Supabase PostgreSQL + Auth + Storage',
            'RLS + RPC',
            'Zod + Resend',
            'Cloudflare Turnstile',
            'Vercel + Cloudflare',
          ],
          impact: [
            '公開訪客免登入即可搜尋與篩選商品、查看規格、加入報價車並取得可追蹤的詢價案件編號。',
            '管理後台涵蓋商品 CRUD、圖片與規格、上下架、CSV 匯入匯出，以及詢價狀態與內部備註管理。',
            '以 RLS、原子 RPC、Zod、body 上限、rate limit、honeypot 與 Turnstile 保護公開詢價入口。',
          ],
          links: [
            {
              label: 'Live Demo',
              href: 'https://sc1986.vercel.app/',
            },
            {
              label: 'GitHub Repo',
              href: 'https://github.com/jeffc1825-svg/sc1986',
            },
          ],
          details: {
            intro:
              'SC1986 是為山強電訊資材打造的 RFQ-first 工業電子材料商城。第一階段的交易終點是「可追蹤的詢價案件」，由業務確認價格、交期、替代料與加工條件後人工回覆，而不是直接在線上付款。',
            sections: [
              {
                heading: '公開型錄與詢價流程',
                items: [
                  '商品型錄支援 SKU、品名、簡述與描述搜尋，以及分類樹、品牌、價格模式、庫存狀態、排序與分頁。',
                  '商品詳情包含麵包屑、多圖 gallery、規格表、價格 / 交期狀態、訂購說明與相關商品。',
                  '報價車可逐項調整數量與備註；訪客免登入填寫聯絡資料後即可送出，成功頁顯示案件編號。',
                  '後端以 RPC 在同一交易建立詢價主檔與品項快照，再非同步寄送 Resend 通知信給業務。',
                ],
              },
              {
                heading: '管理後台',
                items: [
                  'Supabase Auth + admin_users 白名單建立 fail-closed 管理入口。',
                  '商品管理支援新增 / 編輯、批次上下架與封存、圖片與規格、多層分類，以及 Storage 同步清理。',
                  'CSV 匯入採批次與逐列錯誤紀錄，成功列一律先進 draft；另提供 BOM 匯出與錯誤列下載。',
                  '詢價管理支援關鍵字 / 狀態篩選、品項快照、new → reviewing → quoted → closed / cancelled 流程與內部備註。',
                ],
              },
              {
                heading: '架構與安全',
                items: [
                  'Next.js 16 App Router 同時承載公開前台、/admin、Route Handlers 與 Server Actions。',
                  'Supabase 提供 PostgreSQL、Auth、Storage、RLS 與 SECURITY DEFINER RPC；公開資料與管理資料依權限分流。',
                  '詢價 API 使用 Zod、32KB body 上限、每分鐘 5 次 IP rate limit、honeypot 與 Cloudflare Turnstile。',
                  '分類 API 採應用層 TTL + CDN Cache-Control 雙層快取；公開型錄使用無 cookie anon client，避免不必要的 Auth refresh。',
                ],
              },
              {
                heading: '部署與目前狀態',
                items: [
                  '部署鏈路為 Cloudflare DNS / HTTPS / CDN → Vercel → Supabase，Resend 負責詢價通知。',
                  '具備 light / dark / system 主題、手機版分類抽屜、SEO metadata、canonical、sitemap 與 robots 控制。',
                  '目前公開網址為測試環境，使用測試商品資料；正式資料與詢價營運仍等待業主驗收與上線。',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://sc1986.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/jeffc1825-svg/sc1986',
              },
            ],
          },
        },
        {
          title: 'HelloJavaInBancassurance',
          role: '以銀保通路情境從後端 API 到可觀測性平台、Vue 3 前端的全端 Java 面試練習專案',
          period: 'Public side project / 2026',
          summary:
            '以「銀保通路（Bancassurance）」業務情境為主軸，從零建構 Spring Boot 後端 API，涵蓋核保流程、保單查詢 / 變更、樂觀鎖、冪等性、JSONB 稽核日誌（M0–M8），並延伸實作 Nginx Gateway、OTel + Jaeger + Prometheus + Grafana 可觀測性平台、EFK 集中日誌（M11–M13），以及 Vue 3 前端登入殼層（M16）。',
          stack: [
            'Java 21',
            'Spring Boot 4.0.x',
            'Spring Data JPA',
            'PostgreSQL 16',
            'Flyway',
            'Testcontainers',
            'Nginx',
            'OpenTelemetry + Jaeger',
            'Prometheus + Grafana',
            'EFK (Elasticsearch + Kibana + Fluent Bit)',
            'Vue 3 + Vite + Pinia',
            'Docker',
          ],
          impact: [
            '實作核保狀態機（6 狀態 EnumMap 表驅動）與完整保單查詢 / 變更 API，共 17 支 endpoint；M5 以 ETag + 樂觀鎖 + Idempotency Key + JSONB 稽核日誌達到金融級別交易控制。',
            '以 Testcontainers 跑真實 PostgreSQL 整合測試，13 支測試涵蓋併發衝突、冪等重試與 8 個反向 case。',
            'M11–M13 完成 Nginx Gateway、OTel + Jaeger + Prometheus + Grafana 可觀測性三柱，以及 EFK 集中日誌 + ILM 生命週期策略；M16 完成 Vue 3 前端登入流程與路由守衛。',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/HelloJavaInBancassurance',
            },
          ],
          details: {
            intro:
              '準備銀行 / 人壽保險業 Java 後端工程師面試。以「銀保通路（Bancassurance）」業務情境為主軸，從零建構一套 Spring Boot 後端 API 系統，後端核心為 M0–M8，並延伸出 Infra 可觀測性（M11–M13）與 Vue 3 前端殼層（M16），最終以 M5 保單變更作為後端設計高潮。',
            sections: [
              {
                heading: '業務情境',
                items: [
                  '功能一：人壽審查契約（Underwriting）— 保戶投保 → 業務員送件 → 核保員審查 → 通過 / 退件 / 補件，重點在狀態機設計、多角色流程與稽核軌跡。',
                  '功能二：保單查詢與變更（Policy Inquiry & Endorsement）— 查詢保單明細 / 受益人 / 繳費狀態；線上申請地址、受益人、繳費方式變更，重點在交易控制、樂觀鎖、冪等性與稽核。',
                ],
              },
              {
                heading: '核心設計決策（M0–M8）',
                items: [
                  '狀態機（M3）：核保流程 6 狀態以 EnumMap 表驅動實作；非法跳轉拋 IllegalStateTransitionException → 409 Conflict。',
                  '樂觀鎖 + @Transactional（M5）：GET 回應帶 ETag 版本號，PATCH 帶 If-Match header；412 表示應用層前置版本不符，409 表示真實 DB 層寫入衝突，兩者語意明確分開。',
                  '冪等性（M5）：以 idempotency_key 為 PK 的 idempotency_record 表，記錄 request hash 與 response snapshot；併發雙 INSERT 靠 PK constraint 擋住，client 重試時 replay 成功結果。',
                  '稽核日誌（M5）：policy_change_log 以 JSONB 記錄 before / after snapshot，與主交易共生死，避免「log 說改了但 DB 沒改」的稽核錯亂。',
                  '統一回應格式（M6）：ResponseBodyAdvice<Object> 自動包裝所有 Controller 回傳；MDC traceId 同時寫進 log 與 response header，方便跨服務追蹤。',
                ],
              },
              {
                heading: '整合測試（M8）',
                items: [
                  '13 支測試以 Testcontainers 跑真實 PostgreSQL 16 alpine container。',
                  'PolicyOptimisticLockConcurrencyTest：CountDownLatch 同步起跑，斷言「一勝一敗、version 只進 1」。',
                  'PolicyChangeIdempotencyTest：同 key replay / 同 key 不同 body 422 / 無 key 正常執行三種情境。',
                  'PolicyChangeNegativeTest：涵蓋 412 / 409 / 422 / 404 / 400 共 8 個反向 case。',
                  'static @ServiceConnection PostgreSQLContainer 整個 JVM 共享，比每個 test class 重啟省約 6x 時間。',
                ],
              },
              {
                heading: 'Infra & Frontend 擴展（M11–M16）',
                items: [
                  'M11 Nginx Gateway：HTTP → HTTPS 轉址、/api reverse proxy、轉發標頭，統一前後端入口。',
                  'M12 可觀測性平台：OTel Collector + Jaeger（Tracing）+ Prometheus + Grafana（Metrics / Dashboard），三柱閉環。',
                  'M13 集中化日誌：EFK 架構（Elasticsearch + Kibana + Fluent Bit）+ ILM policy / index template / data view，讓應用日誌可集中查詢。',
                  'M16 Vue 3 前端殼層：Vite + Pinia + Router + Tailwind + Element Plus，實作 Login flow 與路由守衛，串接後端 API。',
                ],
              },
              {
                heading: '技術棧',
                items: [
                  'Java 21 LTS：Virtual Thread、record、sealed class；銀行新案採用率提升。',
                  'Spring Boot 4.0.x + Spring Data JPA + Hibernate 6（@Version 樂觀鎖）。',
                  'PostgreSQL 16（Docker）：ACID、JSONB、銀行 POC 常用；Flyway 版控 DDL。',
                  'Nginx（Docker Compose）：統一入口、TLS、反向代理，對接前後端。',
                  'OpenTelemetry + Jaeger + Prometheus + Grafana：Tracing / Metrics / Dashboard 可觀測性三柱。',
                  'EFK（Elasticsearch + Kibana + Fluent Bit）：集中查詢應用日誌，套用 ILM 生命週期策略。',
                  'Vue 3 + Vite + Pinia + Router + Tailwind + Element Plus：M16 前端殼層與登入流程。',
                  'JUnit 5 + Testcontainers：用真實 PostgreSQL 跑整合測試，避免 H2 假象。',
                ],
              },
            ],
            actions: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/HelloJavaInBancassurance',
              },
            ],
          },
        },
        {
          title: 'PlayReviewHarness',
          role: 'AI 驅動的 Google Play 評論分析 Pipeline，以 LLM 聚類問題並自動在 Linear 建立工程任務',
          period: 'Public side project / 2026',
          summary:
            '透過爬取低評分 Google Play 評論，以 LLM 聚類重複問題並分析根本原因，最終自動在 Linear 建立包含完整使用者回饋脈絡的工程任務——一條 CLI 指令跑完整個 Pipeline。',
          stack: [
            'Node.js 22',
            'TypeScript 5',
            'OpenAI SDK (gpt-4o-mini)',
            'Zod',
            'google-play-scraper',
            'Linear SDK',
            'Commander.js',
            'tsx',
          ],
          impact: [
            '以 Zod Schema 強制驗證 LLM 輸出結構，結合 Context Engineering（帶編號評論 + user metadata）讓 LLM 能精準回傳 reviewIndices 與根本原因。',
            '自動將嚴重程度（critical / high / medium）對應到 Linear 優先級，每個 Issue 附上受影響使用者資料表格，讓工程師可以立即採取行動。',
            '各 Pipeline 階段（爬取 → 過濾 → LLM 分析 → Linear 建立）獨立設計，可單獨重跑，便於除錯與擴充新平台。',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/PlayReviewHarness',
            },
          ],
          details: {
            intro:
              'PlayReviewHarness 是一個 AI Harness 工程的實作練習，涵蓋結構化 LLM 工作流程設計、Context Engineering、Output Validation 以及 Tool 整合。從爬取原始評論到在 Linear 建立結構化 Issue，只需一條 CLI 指令即可完成。',
            sections: [
              {
                heading: 'Pipeline 流程',
                items: [
                  '步驟一：google-play-scraper 爬取指定數量的 Google Play 評論。',
                  '步驟二：依星等過濾低分評論，去除空白與重複內容。',
                  '步驟三：OpenAI LLM 聚類重複問題、評估嚴重程度，回傳 reviewIndices + 根本原因假設 + 具體工程修復建議。',
                  '步驟四：依分析結果自動在 Linear 建立 Issue，優先級對應 critical → Urgent / high → High，描述中附上受影響使用者資料表格。',
                  '終端機輸出摘要報告，讓開發者確認 LLM 分析結果後再由 Linear Issues 接手。',
                ],
              },
              {
                heading: 'AI Harness 工程重點',
                items: [
                  '結構化 LLM 輸出：Prompt Engineering + Zod Schema 強制驗證，確保 LLM 回傳可被程式消費的結構。',
                  'Context Engineering：評論列表帶編號與使用者 metadata，讓 LLM 能精準回傳 reviewIndices，追溯到具體使用者。',
                  'Tool 整合：google-play-scraper + OpenAI SDK + Linear SDK 串接成單一 Pipeline，免除人工複製貼上。',
                  '各階段獨立設計：每個步驟可單獨重跑，便於在 LLM prompt 調整或 API 異常時快速定位問題。',
                ],
              },
              {
                heading: '技術棧',
                items: [
                  'Node.js 22 + TypeScript 5：執行環境與型別安全基礎。',
                  'tsx + Commander.js：免 build 直接執行 TypeScript CLI，提供乾淨的參數介面。',
                  'google-play-scraper：爬取 Google Play 評論，支援 App ID 或完整 URL。',
                  'OpenAI SDK（gpt-4o-mini）：LLM 聚類分析，預設使用 gpt-4o-mini 控制成本。',
                  'Zod：強制驗證 LLM 輸出 Schema，防止非結構化回應破壞下游流程。',
                  'Linear SDK（@linear/sdk）：官方 API Client，依嚴重程度建立 Issue 並附上使用者資料表格。',
                ],
              },
            ],
            actions: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/PlayReviewHarness',
              },
            ],
          },
        },
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
          details: {
            intro:
              'EC Order Aggregator 是一個 Chrome Extension，旨在解決個人訂單資料分散在各個電商平台的問題。透過統一的資料採集與正規化流程，讓使用者能在 side panel 內快速檢索、管理所有的購買紀錄。',
            sections: [
              {
                heading: '核心功能',
                items: [
                  '多平台彙整：支援 PChome、momo、蝦皮 (Shopee)、Yahoo 購物中心。',
                  '自動採集：自動辨識訂單完成頁與歷史訂單頁，並將資料正規化為統一模型。',
                  '邊欄管理：Side panel 提供列表瀏覽、關鍵字搜尋、排序與狀態篩選（包含退貨判斷）。',
                  '手動同步：提供「重新抓取當前頁」功能，確保資料採集完整度。',
                  '隱私優先：所有資料僅儲存在本地瀏覽器的 IndexedDB (Dexie)，不上傳至外部伺服器。',
                ],
              },
              {
                heading: '技術實作',
                items: [
                  '配置化 Adapter 架構：透過 PlatformAdapter 介面隔離平台差異，支援快速擴充新站點。',
                  '混合擷取策略：結合 DOM 掃描、Network 攔截解析 (PChome/Shopee) 與 Page State 提取 (Yahoo)。',
                  '冪等寫入機制：使用 deterministic ID 確保重複掃描或手動重抓時，資料不重複。',
                  '強型別通訊：建立 content、background、sidepanel 三層間的 typed messaging contract。',
                ],
              },
              {
                heading: '使用流程',
                items: [
                  '於 Chrome 線上程式商店安裝擴充功能。',
                  '登入並瀏覽支援的電商平台訂單頁。',
                  '點擊瀏覽器側邊欄圖示，查看已彙整的個人購買清單。',
                ],
              },
              {
                heading: '技術棧',
                items: [
                  'TypeScript 為核心，強化跨層通訊的型別安全。',
                  'React 19 + Vite 打造高性能的 Side Panel UI。',
                  'Dexie.js (IndexedDB) 負責本地資料庫管理。',
                  'Zustand 處理 UI 狀態管理。',
                  'Chrome Extension MV3 架構。',
                ],
              },
            ],
            actions: [
              {
                label: '安裝擴充功能',
                href: 'https://chromewebstore.google.com/detail/ec-order-aggregator/ilidpcejmonahdjoeilkjgmiogigknei',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/ec-order-aggregator-ext',
              },
            ],
          },
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
          title: 'Oh Money · Buy Me Home',
          role: 'A mobile-first personal finance PWA with offline fallback and cross-device sync',
          period: 'Public side project / 2026',
          summary:
            'Built around a "log it in three seconds" workflow, combining fast income and expense entry, period-based summaries, account and category filters, search, and cloud sync in a mobile-friendly experience.',
          imageSrc: '/static/images/oh-money-showcase.webp',
          imageAlt: 'Oh Money mobile transaction history and category filter',
          stack: [
            'Next.js App Router',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Supabase Auth + PostgreSQL',
            'PWA + Service Worker',
            'IndexedDB',
            'Vercel',
          ],
          impact: [
            'Reduces everyday bookkeeping friction with a short entry flow for income and expenses.',
            'Transaction history supports day, week, month, year, and custom ranges, plus keyword, type, account, category, and time-based filtering.',
            'Combines email/password and Magic Link authentication, Supabase sync, and a Service Worker + IndexedDB offline fallback.',
          ],
          links: [
            {
              label: 'Live Demo',
              href: 'https://oh-money-buy-me-home.vercel.app/',
            },
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/oh-money-buy-me-home',
            },
          ],
          details: {
            intro:
              'Oh Money is a personal finance PWA designed for mobile use. Instead of piling on complex reporting, it focuses on lowering the friction of recording and reviewing transactions while retaining cloud sync and offline access.',
            sections: [
              {
                heading: 'Core Features',
                items: [
                  'Fast transaction entry for income, expenses, accounts, categories, merchants, descriptions, and notes.',
                  'Day, week, month, year, and custom date-range views for reviewing finances at different time scales.',
                  'Search by merchant, description, or note, combined with transaction type, account, category, and time sorting.',
                  'Expense categories cover food, transportation, shopping, entertainment, home, utilities, healthcare, education, and travel.',
                ],
              },
              {
                heading: 'Authentication and Sync',
                items: [
                  'Supports email/password registration and sign-in, plus passwordless Magic Link authentication.',
                  'Uses Supabase Auth for identity and PostgreSQL for synchronized transaction data across devices.',
                  'Exposes sync status in the interface so users can see whether local changes have reached the cloud.',
                ],
              },
              {
                heading: 'PWA and Offline Strategy',
                items: [
                  'Runs as a standalone installable PWA with a mobile viewport, Traditional Chinese locale, and dark-theme support.',
                  'The Service Worker uses network-first navigation with cached pages and an app-shell fallback when offline.',
                  'Static assets use cache-first behavior, offline data is rendered from IndexedDB, and Supabase or non-GET requests are never cached.',
                ],
              },
              {
                heading: 'Tech Stack',
                items: [
                  'Next.js App Router + React + TypeScript for the application and authentication flows.',
                  'Tailwind CSS for the responsive, touch-friendly glass-style interface and light/dark themes.',
                  'Supabase SSR / Auth / PostgreSQL for identity and cloud synchronization.',
                  'Web App Manifest, Service Worker, and IndexedDB for installation and offline fallback.',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://oh-money-buy-me-home.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/oh-money-buy-me-home',
              },
            ],
          },
        },
        {
          title: 'SC1986 · San Chun Industrial Electronics',
          role: 'An RFQ-first industrial electronics catalog with a quote cart and operations dashboard',
          period: 'Public side project / 2026',
          summary:
            'A B2B catalog that brings industrial electronics SKUs, specification search, a quote cart, and a human-assisted quotation workflow into one no-login inquiry experience, backed by product, CSV, and quote-case administration.',
          imageSrc: '/static/images/sc1986-showcase.jpg',
          imageAlt: 'SC1986 industrial electronics RFQ storefront homepage',
          stack: [
            'Next.js 16',
            'React 19',
            'TypeScript',
            'Tailwind CSS v4',
            'Supabase PostgreSQL + Auth + Storage',
            'RLS + RPC',
            'Zod + Resend',
            'Cloudflare Turnstile',
            'Vercel + Cloudflare',
          ],
          impact: [
            'Public visitors can search and filter products, review specifications, build a quote cart, and receive a trackable inquiry reference without signing in.',
            'The admin system covers product CRUD, images and specifications, publishing states, CSV import/export, and quote status with internal notes.',
            'Protects the public inquiry flow with RLS, an atomic RPC, Zod, request-size limits, rate limiting, a honeypot, and Turnstile.',
          ],
          links: [
            {
              label: 'Live Demo',
              href: 'https://sc1986.vercel.app/',
            },
            {
              label: 'GitHub Repo',
              href: 'https://github.com/jeffc1825-svg/sc1986',
            },
          ],
          details: {
            intro:
              'SC1986 is an RFQ-first industrial electronics storefront built for San Chun. The first-stage conversion is a trackable inquiry case, not online payment: sales staff confirm pricing, lead time, alternatives, and processing requirements before replying with a formal quote.',
            sections: [
              {
                heading: 'Public Catalog and RFQ Flow',
                items: [
                  'Catalog search covers SKU, name, short description, and description, with category trees, brand, price mode, stock status, sorting, and pagination.',
                  'Product pages include breadcrumbs, multi-image galleries, specification tables, price and lead-time states, ordering notes, and related products.',
                  'Visitors can adjust quantity and per-item notes in the quote cart, submit contact details without an account, and receive a case reference.',
                  'A database RPC atomically creates the inquiry header and item snapshots, then Resend notifies sales asynchronously.',
                ],
              },
              {
                heading: 'Admin Operations',
                items: [
                  'Supabase Auth plus an admin_users allowlist creates a fail-closed administration boundary.',
                  'Product management covers create/edit, bulk publishing and archiving, images and specifications, nested categories, and Storage cleanup.',
                  'CSV import records batch and row-level errors, sends successful rows to draft first, and provides BOM exports and downloadable error rows.',
                  'Quote management supports keyword and status filters, item snapshots, new → reviewing → quoted → closed / cancelled states, and private notes.',
                ],
              },
              {
                heading: 'Architecture and Security',
                items: [
                  'Next.js 16 App Router hosts the public storefront, /admin, Route Handlers, and Server Actions.',
                  'Supabase provides PostgreSQL, Auth, Storage, RLS, and SECURITY DEFINER RPCs, separating anonymous catalog access from administrative data.',
                  'The inquiry API applies Zod validation, a 32KB body limit, five requests per minute per IP, a honeypot, and Cloudflare Turnstile.',
                  'Category data uses application-level TTL plus CDN caching; public catalog queries use a cookie-free anonymous client to avoid unnecessary auth refreshes.',
                ],
              },
              {
                heading: 'Deployment and Current Status',
                items: [
                  'The delivery path is Cloudflare DNS / HTTPS / CDN → Vercel → Supabase, with Resend handling inquiry notifications.',
                  'Includes light / dark / system themes, a mobile category drawer, SEO metadata, canonical URLs, sitemap generation, and robots controls.',
                  'The public URL is currently a test environment using sample product data; production data and live inquiry operations are pending owner acceptance.',
                ],
              },
            ],
            actions: [
              {
                label: 'Live Demo',
                href: 'https://sc1986.vercel.app/',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/jeffc1825-svg/sc1986',
              },
            ],
          },
        },
        {
          title: 'HelloJavaInBancassurance',
          role: 'A full-stack Java interview practice project covering backend API, observability platform, and a Vue 3 frontend — all built around bancassurance workflows',
          period: 'Public side project / 2026',
          summary:
            'A hands-on project built around bancassurance business scenarios — underwriting, policy inquiry and endorsement, optimistic locking, idempotency, and JSONB audit logs (M0–M8) — extended with an Nginx Gateway, OTel + Jaeger + Prometheus + Grafana observability stack, EFK centralized logging (M11–M13), and a Vue 3 frontend login shell (M16).',
          stack: [
            'Java 21',
            'Spring Boot 4.0.x',
            'Spring Data JPA',
            'PostgreSQL 16',
            'Flyway',
            'Testcontainers',
            'Nginx',
            'OpenTelemetry + Jaeger',
            'Prometheus + Grafana',
            'EFK (Elasticsearch + Kibana + Fluent Bit)',
            'Vue 3 + Vite + Pinia',
            'Docker',
          ],
          impact: [
            'Implemented a 6-state underwriting state machine (EnumMap table-driven) and a full policy API across 17 endpoints; M5 delivers financial-grade transaction control with ETag optimistic locking, Idempotency Key, and JSONB audit logs.',
            'Integration tests using Testcontainers and a real PostgreSQL instance — 13 tests covering concurrency conflicts, idempotent retries, and 8 negative cases.',
            'M11–M13 delivered Nginx Gateway, an OTel + Jaeger + Prometheus + Grafana observability triad, and EFK centralized logging with ILM; M16 added a Vue 3 frontend login flow with route guards.',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/HelloJavaInBancassurance',
            },
          ],
          details: {
            intro:
              'A project built to prepare for Java backend engineering interviews in banking and life insurance. The backend core grows from M0 through M8, then extends into infra observability (M11–M13) and a Vue 3 frontend shell (M16), with M5 policy endorsement as the backend design centerpiece.',
            sections: [
              {
                heading: 'Business Context',
                items: [
                  'Feature 1 — Underwriting: policyholder applies → agent submits → underwriter reviews → approve / reject / request additional info. Focus: state machine design, multi-role workflow, audit trail.',
                  'Feature 2 — Policy Inquiry & Endorsement: query policy details, beneficiaries, and payment status; submit online changes for address, beneficiaries, and payment method. Focus: transaction control, optimistic locking, idempotency, and audit.',
                ],
              },
              {
                heading: 'Core Design Decisions (M0–M8)',
                items: [
                  'State machine (M3): 6-state underwriting flow implemented with an EnumMap table-driven approach; illegal transitions throw IllegalStateTransitionException → 409 Conflict.',
                  'Optimistic locking + @Transactional (M5): GET returns an ETag version header; PATCH carries If-Match. 412 means the application-layer pre-check caught a stale version; 409 means a real concurrent DB write collision — two semantics, two codes.',
                  'Idempotency (M5): idempotency_record table keyed by idempotency_key, storing the request hash and response snapshot. Concurrent double-INSERTs are blocked by the PK constraint; retrying clients replay the first successful response.',
                  "Audit log (M5): policy_change_log stores JSONB before/after snapshots within the same @Transactional boundary, so a business rollback also rolls back the log — no 'log says changed but DB didn't' drift.",
                  'Unified response format (M6): ResponseBodyAdvice<Object> wraps all controller returns automatically. MDC traceId flows into both logs and response headers for cross-service tracing.',
                ],
              },
              {
                heading: 'Integration Testing (M8)',
                items: [
                  '13 tests backed by a real PostgreSQL 16 alpine container via Testcontainers.',
                  "PolicyOptimisticLockConcurrencyTest: CountDownLatch synchronized start, asserting 'one wins, one loses, version advances by exactly 1'.",
                  'PolicyChangeIdempotencyTest: same-key replay, same-key different-body 422, and no-key normal execution.',
                  'PolicyChangeNegativeTest: 8 negative cases covering 412 / 409 / 422 / 404 / 400.',
                  'Static @ServiceConnection PostgreSQLContainer shared across the JVM — roughly 6x faster than restarting per test class.',
                ],
              },
              {
                heading: 'Infra & Frontend Extensions (M11–M16)',
                items: [
                  'M11 Nginx Gateway: HTTP → HTTPS redirect, /api reverse proxy, and forwarded headers — a unified entry point for the full stack.',
                  'M12 Observability: OTel Collector + Jaeger (Tracing) + Prometheus + Grafana (Metrics / Dashboard) — the full three-pillar observability loop.',
                  'M13 Centralized Logging: EFK stack (Elasticsearch + Kibana + Fluent Bit) with ILM policy, index templates, and data views for searchable application logs.',
                  'M16 Vue 3 Frontend Shell: Vite + Pinia + Router + Tailwind + Element Plus — login flow with route guards, wired to the backend API.',
                ],
              },
              {
                heading: 'Tech Stack',
                items: [
                  'Java 21 LTS: Virtual Threads, records, sealed classes — growing adoption in new banking projects.',
                  'Spring Boot 4.0.x + Spring Data JPA + Hibernate 6 with @Version optimistic locking; Flyway for version-controlled DDL.',
                  'Nginx (Docker Compose): unified entry point, TLS, and reverse proxy bridging frontend and backend.',
                  'OpenTelemetry + Jaeger + Prometheus + Grafana: tracing, metrics, and dashboards as a full observability triad.',
                  'EFK (Elasticsearch + Kibana + Fluent Bit): centralized log search with ILM lifecycle policies.',
                  'Vue 3 + Vite + Pinia + Router + Tailwind + Element Plus: the M16 frontend shell and login flow.',
                  'JUnit 5 + Testcontainers: real database integration tests, no H2 false positives.',
                ],
              },
            ],
            actions: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/HelloJavaInBancassurance',
              },
            ],
          },
        },
        {
          title: 'PlayReviewHarness',
          role: 'An AI-driven Google Play review analysis pipeline that clusters issues with an LLM and automatically creates Linear engineering tasks',
          period: 'Public side project / 2026',
          summary:
            'Scrapes low-star Google Play reviews, uses an LLM to cluster recurring issues and surface root causes, then automatically creates Linear issues with full user feedback context — the entire pipeline runs from a single CLI command.',
          stack: [
            'Node.js 22',
            'TypeScript 5',
            'OpenAI SDK (gpt-4o-mini)',
            'Zod',
            'google-play-scraper',
            'Linear SDK',
            'Commander.js',
            'tsx',
          ],
          impact: [
            'Uses Zod Schema validation to enforce structured LLM output, combined with Context Engineering (numbered reviews + user metadata) so the model returns precise reviewIndices traceable to real users.',
            'Automatically maps severity (critical / high / medium) to Linear priority levels; each issue ships with an affected-users table so engineers can act immediately.',
            'Each pipeline stage — scrape, filter, LLM analysis, Linear creation — is independently designed and re-runnable for fast debugging and extensibility.',
          ],
          links: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/seenseanchen/PlayReviewHarness',
            },
          ],
          details: {
            intro:
              'PlayReviewHarness is a hands-on AI Harness engineering exercise covering structured LLM workflow design, Context Engineering, Output Validation, and Tool integration. From raw review scraping to structured Linear issues, the whole pipeline runs from one CLI command.',
            sections: [
              {
                heading: 'Pipeline Flow',
                items: [
                  'Step 1: google-play-scraper fetches the requested number of Google Play reviews for a given App ID or URL.',
                  'Step 2: Filter reviews by star rating, remove empty content and duplicates.',
                  'Step 3: OpenAI LLM clusters recurring issues, assesses severity, and returns reviewIndices + root cause hypotheses + concrete engineering fix suggestions.',
                  'Step 4: Linear SDK creates issues mapped by severity (critical → Urgent, high → High), each with an affected-users table in the description.',
                  'Terminal summary lets the developer review LLM analysis before Linear issues take over the workflow.',
                ],
              },
              {
                heading: 'AI Harness Engineering Highlights',
                items: [
                  'Structured LLM output: Prompt Engineering + Zod Schema validation forces the model to return machine-consumable structure.',
                  'Context Engineering: numbered review list with user metadata lets the LLM return precise reviewIndices, mapping each cluster back to real users.',
                  'Tool integration: google-play-scraper + OpenAI SDK + Linear SDK wired into a single pipeline — no manual copy-paste between tools.',
                  'Stage-isolated design: every step can be re-run independently for fast debugging when tuning prompts or handling API errors.',
                ],
              },
              {
                heading: 'Tech Stack',
                items: [
                  'Node.js 22 + TypeScript 5: runtime and type-safe foundation.',
                  'tsx + Commander.js: run TypeScript directly without a build step, with a clean CLI argument interface.',
                  'google-play-scraper: fetches Google Play reviews by App ID or full URL.',
                  'OpenAI SDK (gpt-4o-mini): LLM clustering and analysis, defaulting to gpt-4o-mini to keep costs low.',
                  'Zod: enforces LLM output schema, preventing unstructured responses from breaking downstream stages.',
                  'Linear SDK (@linear/sdk): official API client — creates prioritized issues with user data tables attached.',
                ],
              },
            ],
            actions: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/PlayReviewHarness',
              },
            ],
          },
        },
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
          details: {
            intro:
              'EC Order Aggregator is a Chrome Extension designed to consolidate order history from multiple Taiwan e-commerce platforms. It builds a unified data pipeline that captures, normalizes, and stores purchase records locally, allowing users to search and manage their shopping history in a single side panel.',
            sections: [
              {
                heading: 'Core Features',
                items: [
                  'Multi-platform aggregation: Supports PChome, momo, Shopee, and Yahoo Shopping.',
                  'Automated capture: Identifies order success and history pages to extract data into a unified model.',
                  'Side panel management: Search, sort, and filter purchase history directly in the browser sidebar.',
                  'Manual sync: Re-capture data from the active tab to ensure collection completeness.',
                  'Privacy-first: Uses Dexie (IndexedDB) for local storage; no purchase data ever leaves your machine.',
                ],
              },
              {
                heading: 'Technical Highlights',
                items: [
                  'Adapter-based architecture: Isolates platform-specific logic via a PlatformAdapter interface for easy extensibility.',
                  'Mixed extraction strategy: Combines DOM scanning, network interception (PChome/Shopee), and page state extraction (Yahoo).',
                  'Idempotent writes: Uses deterministic IDs to prevent duplicate records during repeated scans or manual refreshes.',
                  'Typed contracts: Implements a strong messaging contract between content scripts, background workers, and the UI.',
                ],
              },
              {
                heading: 'How to Use',
                items: [
                  'Install the extension from the Chrome Web Store.',
                  'Log in and browse order history pages on supported e-commerce sites.',
                  'Open the side panel to view your consolidated purchase list.',
                ],
              },
              {
                heading: 'Tech Stack',
                items: [
                  'TypeScript for type-safe cross-layer communication.',
                  'React 19 + Vite for a high-performance side panel UI.',
                  'Dexie.js (IndexedDB) for local data persistence.',
                  'Zustand for UI state management.',
                  'Chrome Extension Manifest V3.',
                ],
              },
            ],
            actions: [
              {
                label: 'Install Extension',
                href: 'https://chromewebstore.google.com/detail/ec-order-aggregator/ilidpcejmonahdjoeilkjgmiogigknei',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/seenseanchen/ec-order-aggregator-ext',
              },
            ],
          },
        },
      ],
    },
  },
}

export function getPageContent(locale: Locale) {
  return pageContent[locale]
}
