# Project Context

## Purpose

This repository is Sean Chen's bilingual personal site and technical blog. It should present a clear technical identity around:

- frontend architecture
- enterprise systems
- logistics and e-commerce product experience
- AI-assisted software engineering

The site is not a resume dump and should not read like a job-board profile.

## Stack

- Next.js App Router
- Tailwind CSS
- Contentlayer + MDX
- Pliny blog utilities

## Source Of Truth

- `data/pageContent.ts`: localized entry page, about-page sections, experience timeline, side-project copy
- `data/authors/default.mdx`: Traditional Chinese about content
- `data/authors/default.en.mdx`: English about content
- `data/blog/**/*.mdx`: Traditional Chinese posts. New posts should live under `data/blog/YYYYMM/{post-name}.mdx`.
- `data/blog/en/**/*.mdx`: English post counterparts. New posts should live under `data/blog/en/YYYYMM/{post-name}.mdx`.
- `data/podcasts/**/*.md`: podcast manuscripts, speaking outlines, and TTS source scripts. These are managed content assets, but not public blog posts by default.
- `lib/i18n.ts`: locale labels, route helpers, navigation text
- `lib/content.ts`: locale-aware content queries and tag metadata

## Public Information Architecture

- Main navigation is `Home`, `Blog`, `Projects`, `About`.
- `Home` is an entry page that routes readers by intent, not a full biography page.
- `About` is the main profile page for background, working style, and the five representative career experiences.
- `Blog` is the primary destination for technical readers.
- `Tags` still exists as a route, but the entry point now lives at the bottom of the blog sidebar instead of the top navigation.
- `Projects` is reserved for public GitHub side projects, not the main career experience timeline.

## Locale Model

- `zh-TW` is the default locale and lives at root paths such as `/`, `/blog`, `/about`.
- English lives under `/en`, `/en/blog`, `/en/about`, and so on.
- Published blog posts should keep the same public slug across locales.
- English blog files live under `data/blog/en/`.
- The `YYYYMM` folder is for source organization only and should not change the public post slug.
- Use `localizePath()` for static internal links.
- Use `post.path` for links to contentlayer blog entries.

## Content Rules

- Traditional Chinese should use `zh-TW`, natural technical wording, and concise phrasing.
- English should stay aligned with the Chinese source, not a loose rewrite with different claims.
- Personal pages and published blog posts should exist in both languages.
- When updating personal positioning, keep the entry page, about page, experience entries, projects page, author files, and related personal posts aligned.

## Engineering Rules

- Prefer shared helpers over route-by-route duplication when changing locale behavior, metadata, or content access.
- Treat `docs/ai/*` as the deeper source of truth and keep top-level instruction files short.
- Do not commit transient Claude worktree output under `.claude/worktrees/`.
