/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '興·SEAN',
  author: 'Sean Chen',
  headerTitle: '興·SEAN',
  description: '專注於企業級前端架構、系統設計與 AI-assisted development 的資深前端工程師。',
  language: 'zh-TW',
  theme: 'system', // system, dark or light
  siteUrl: 'https://seenseanchen.vercel.app',
  siteRepo: 'https://github.com/seenseanchen/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/seenseanchen-logo-v2.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/seenseanchen-logo-v2.png`,
  mastodon: '',
  email: 'seenseanchen@gmail.com',
  github: 'https://github.com/seenseanchen',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/livebreeze',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'zh-TW',
  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-DLV14VT6XM',
    },
  },
  newsletter: { provider: '' },
  comments: {
    // Giscus 留言系統 — 由 GitHub Discussions 驅動
    // categoryId 請至 https://giscus.app 取得，填入後即可正式啟用
    provider: 'giscus',
    giscusConfig: {
      repo: 'seenseanchen/blog',
      repositoryId: 'R_kgDOR23Vqw',
      category: 'General',
      categoryId: 'DIC_kwDOR23Vq84C635u',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      inputPosition: 'bottom',
      lang: 'zh-TW',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: { searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json` },
  },
  multiauthors: false,
}

module.exports = siteMetadata
