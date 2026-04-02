export const locales = ['zh-TW', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'zh-TW'

type Dictionary = {
  localeLabel: string
  nav: {
    home: string
    blog: string
    tags: string
    projects: string
    about: string
  }
  home: {
    featuredTopics: string
    recentPosts: string
    readMore: string
    allPosts: string
  }
  list: {
    allPosts: string
    searchArticles: string
    noPosts: string
    previous: string
    next: string
    readingTimeLabel: string
    pageIndicator: (currentPage: number, totalPages: number) => string
  }
  tags: {
    title: string
    description: string
    allPosts: string
    viewPosts: (tag: string) => string
  }
  post: {
    publishedOn: string
    readingTimeLabel: string
    tags: string
    previousArticle: string
    nextArticle: string
    backToBlog: string
    discussOnX: string
    viewOnGitHub: string
  }
  projects: {
    title: string
    intro: string
    stack: string
    impact: string
  }
  about: {
    title: string
  }
}

const dictionaries: Record<Locale, Dictionary> = {
  'zh-TW': {
    localeLabel: 'EN',
    nav: {
      home: '首頁',
      blog: '文章',
      tags: '標籤',
      projects: '專案',
      about: '關於',
    },
    home: {
      featuredTopics: '精選主題',
      recentPosts: '最新文章',
      readMore: '繼續閱讀',
      allPosts: '查看所有文章',
    },
    list: {
      allPosts: '所有文章',
      searchArticles: '搜尋文章',
      noPosts: '目前還沒有文章。',
      previous: '上一頁',
      next: '下一頁',
      readingTimeLabel: '建議閱讀時間',
      pageIndicator: (currentPage, totalPages) => `第 ${currentPage} / ${totalPages} 頁`,
    },
    tags: {
      title: '標籤',
      description: '我關注與書寫的主題',
      allPosts: '所有文章',
      viewPosts: (tag) => `查看 ${tag} 相關文章`,
    },
    post: {
      publishedOn: '發佈日期',
      readingTimeLabel: '建議閱讀時間',
      tags: '標籤',
      previousArticle: '上一篇文章',
      nextArticle: '下一篇文章',
      backToBlog: '返回文章列表',
      discussOnX: '在 X 上討論',
      viewOnGitHub: '在 GitHub 查看',
    },
    projects: {
      title: '專案',
      intro: '以下整理了我近年較具代表性的產品與系統實作。',
      stack: '技術與平台',
      impact: '技術與業務價值',
    },
    about: {
      title: '關於',
    },
  },
  en: {
    localeLabel: '中文',
    nav: {
      home: 'Entry',
      blog: 'Blog',
      tags: 'Tags',
      projects: 'Projects',
      about: 'About',
    },
    home: {
      featuredTopics: 'Featured Themes',
      recentPosts: 'Recent Posts',
      readMore: 'Read more',
      allPosts: 'View all posts',
    },
    list: {
      allPosts: 'All Posts',
      searchArticles: 'Search articles',
      noPosts: 'No posts found yet.',
      previous: 'Previous',
      next: 'Next',
      readingTimeLabel: 'Reading time',
      pageIndicator: (currentPage, totalPages) => `${currentPage} of ${totalPages}`,
    },
    tags: {
      title: 'Tags',
      description: 'Topics I write and think about',
      allPosts: 'All Posts',
      viewPosts: (tag) => `View posts tagged ${tag}`,
    },
    post: {
      publishedOn: 'Published on',
      readingTimeLabel: 'Reading time',
      tags: 'Tags',
      previousArticle: 'Previous Article',
      nextArticle: 'Next Article',
      backToBlog: 'Back to the blog',
      discussOnX: 'Discuss on X',
      viewOnGitHub: 'View on GitHub',
    },
    projects: {
      title: 'Projects',
      intro: 'A selection of the systems and product work I have focused on in recent years.',
      stack: 'Stack',
      impact: 'Impact',
    },
    about: {
      title: 'About',
    },
  },
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export function isLocale(value?: string | null): value is Locale {
  return value === 'zh-TW' || value === 'en'
}

export function normalizePathname(pathname: string): string {
  if (!pathname) {
    return '/'
  }

  if (pathname === '/') {
    return pathname
  }

  const normalized = pathname.replace(/\/+$/, '')
  return normalized || '/'
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalized = normalizePathname(pathname)
  return normalized === '/en' || normalized.startsWith('/en/') ? 'en' : defaultLocale
}

export function stripLocalePrefix(pathname: string): string {
  const normalized = normalizePathname(pathname.startsWith('/') ? pathname : `/${pathname}`)

  if (normalized === '/en') {
    return '/'
  }

  return normalized.replace(/^\/en(?=\/|$)/, '') || '/'
}

export function localizePath(pathname: string, locale: Locale): string {
  const normalized = stripLocalePrefix(pathname)

  if (locale === 'en') {
    return normalized === '/' ? '/en' : `/en${normalized}`
  }

  return normalized
}

export function switchLocalePath(pathname: string): string {
  const currentLocale = getLocaleFromPathname(pathname)
  return localizePath(pathname, currentLocale === 'en' ? defaultLocale : 'en')
}

export function isActivePath(currentPathname: string, targetPathname: string): boolean {
  const current = stripLocalePrefix(currentPathname)
  const target = stripLocalePrefix(targetPathname)

  if (target === '/') {
    return current === '/'
  }

  return current === target || current.startsWith(`${target}/`)
}

export function getOpenGraphLocale(locale: Locale): string {
  return locale === 'en' ? 'en_US' : 'zh_TW'
}
