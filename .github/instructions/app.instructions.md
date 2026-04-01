---
applyTo: 'app/**/*.ts,app/**/*.tsx,components/**/*.ts,components/**/*.tsx,layouts/**/*.ts,layouts/**/*.tsx,lib/**/*.ts,lib/**/*.tsx,contentlayer.config.ts'
---

- Respect the repository locale model: `zh-TW` at root paths and English under `/en`.
- Prefer `localizePath()` for static route construction instead of hardcoding `/en`.
- For blog contentlayer entries, link with `post.path` so locale-aware URLs stay correct.
- Keep tag metadata locale-specific; do not assume a single global tag index for both languages.
- When changing shared architecture, update SEO, sitemap, and page parity together.
