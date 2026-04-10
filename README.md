# Sean Chen Blog

Sean Chen 的雙語個人網站與技術部落格，主題聚焦在 frontend architecture、enterprise systems、logistics / e-commerce product experience，以及 AI-assisted engineering。

這個專案以 `zh-TW` 為預設語系，根路徑使用繁體中文，英文內容放在 `/en` 底下。公開的個人頁面與已發布文章，原則上會維持中英文對應。

## 使用的技術

- `Next.js 15` + `React 19` + `TypeScript`
- `App Router` 路由架構
- `Tailwind CSS 4` 樣式系統
- `Contentlayer2` + `MDX` 內容建模與靜態內容流程
- `Pliny` 部落格工具鏈
- `next-themes` 主題切換
- `rehype` / `remark` 生態系處理程式碼高亮、數學公式、引用與 GitHub alert blockquote
- `Vercel Analytics` 與 `kbar` 本地搜尋索引

補充：

- 文章內容來源在 `data/`，不是接 CMS。
- 中文文章放在 `data/blog/YYYYMM/*.mdx`，英文對應版本放在 `data/blog/en/YYYYMM/*.mdx`。
- Podcast 腳本 / 大綱放在 `data/podcasts/`，未來若產生可公開的音檔，建議放在 `public/static/audio/` 或外部儲存。
- `YYYYMM` 只用於來源整理，不影響公開 slug。

## 啟動方式

此專案使用 `Yarn 3.6.1`。

### 1. 安裝依賴

```bash
corepack enable
yarn install
```

### 2. 選擇性設定環境變數

如果要啟用留言或 newsletter 相關整合，可以先建立本地環境變數：

```bash
cp .env.example .env.local
```

如果只是本機開發與瀏覽內容，通常可以先略過這一步。

### 3. 啟動開發環境

```bash
yarn dev
```

預設開在 [http://localhost:3000](http://localhost:3000)。

### 4. 其他常用指令

```bash
yarn build   # 產生 production build，並執行 postbuild
yarn serve   # 啟動 production server
yarn lint    # 執行 ESLint --fix
yarn analyze # 分析 bundle
```

## 專案結構

以下結構是根據目前 repo 本身，以及 `project-architecture` / `blog-publishing` 相關 skill 與 `docs/ai/*` 規範整理：

```text
.
├── app/                    # Next.js App Router 路由
│   ├── page.tsx            # 首頁（zh-TW）
│   ├── about/              # About（zh-TW）
│   ├── blog/               # Blog 列表與文章（zh-TW）
│   ├── projects/           # Projects（zh-TW）
│   ├── tags/               # Tags（zh-TW）
│   ├── en/                 # 英文路由入口，對應 /en/*
│   └── api/                # API routes，例如 newsletter
├── components/             # 可重用 UI 元件
├── layouts/                # 文章頁與列表頁版型
├── lib/                    # 共用邏輯，例如 i18n、內容查詢、reading time
├── data/                   # 內容與站台資料來源
│   ├── authors/            # 作者 MDX
│   ├── blog/               # 部落格文章（含 en 對應版本）
│   ├── podcasts/           # Podcast 腳本、逐字稿、TTS 來源內容
│   ├── pageContent.ts      # 首頁 / About / 經歷等主要文案來源
│   ├── projectsData.ts     # Projects 頁資料
│   ├── headerNavLinks.ts   # 導覽列設定
│   └── siteMetadata.js     # 網站 metadata、分析與搜尋設定
├── css/                    # 全域樣式與 Prism 樣式
├── public/                 # 靜態資源、圖片、favicon、search index、可公開音檔
├── scripts/                # postbuild、RSS 等腳本
├── docs/ai/                # 專案與發佈規範的較完整說明
├── .codex/skills/          # Codex 專案技能
├── .claude/skills/         # Claude 相容技能
├── .claude/agents/         # Claude 專案子代理設定
├── contentlayer.config.ts  # Contentlayer 文件模型與 MDX pipeline
├── next.config.js          # Next.js、CSP、bundle analyzer 等設定
└── AGENTS.md               # 給 coding agents 的精簡入口
```

### 重要結構規則

- 根路由是 `zh-TW`，英文內容固定放在 `/en`。
- 公開個人頁面與已發佈文章應維持中英文對應。
- 靜態內部連結使用 `localizePath()`；文章連結使用 `post.path`。
- `Tags` 是既有路由，但主要從 blog sidebar 進入，不是頂部主導覽。
- 涉及 routing、contentlayer、SEO 或共享頁面結構時，請優先參考 `docs/ai/project-context.md` 與 `.codex/skills/project-architecture/SKILL.md`。
- 涉及文章草稿、翻譯與發布流程時，請參考 `docs/ai/blog-publishing-policy.md` 與 `.codex/skills/blog-publishing/SKILL.md`。

## 內容維護建議

- 新文章請建立中英文對應檔案，並維持相同 slug。
- Podcast 腳本若是內部工作素材，可放在 `data/podcasts/`，但不要直接視為公開文章。
- 個人定位相關更新，應同步檢查 `Home`、`About`、`Projects`、作者檔與相關文章。
- 若只改文案，通常優先從 `data/pageContent.ts`、`data/authors/*.mdx`、`data/blog/**/*.mdx` 開始。

## License

此專案起始於 [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 的基礎上再做大量客製。

目前 repository 保留上游的 `MIT` 授權文字，請參考 [LICENSE](/Users/livebreeze/Documents/2026-projects/blog/LICENSE)。若後續要對外分發程式碼或抽離通用模組，建議一併再次確認授權與內容資產的使用範圍。
