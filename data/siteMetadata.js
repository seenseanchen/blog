/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '興向成',
  author: 'Sean Chen',
  headerTitle: '興向成',
  description: '專注於企業級前端架構、系統設計與 AI-assisted development 的資深前端工程師。',
  language: 'zh-TW',
  theme: 'system', // system, dark or light
  siteUrl: 'https://seenseanchen.vercel.app',
  siteRepo: 'https://github.com/seenseanchen/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/seenseanchen-logo-v2.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: 'seenseanchen@gmail.com',
  github: 'https://github.com/seenseanchen',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/seenseanchen',
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
  comments: {},
  search: {
    provider: 'kbar',
    kbarConfig: { searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json` },
  },
  multiauthors: false,
}

module.exports = siteMetadata
