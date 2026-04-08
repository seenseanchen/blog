---
name: project-architecture
description: Use when changing routing, contentlayer, SEO, layouts, or multilingual site structure in this repository.
license: Internal project use
---

# Project Architecture

Read these references first:

- `docs/ai/project-context.md`

Follow this workflow:

1. Confirm whether the change affects both `zh-TW` and English paths.
2. Prefer shared helpers in `lib/` over duplicating route logic.
3. Use `localizePath()` for static links and `post.path` for contentlayer post links.
4. Preserve the current IA: `Home` routes readers, `About` carries profile + representative experience, `Blog` is the main technical surface, `Tags` is reached from the blog sidebar, and `Projects` is for GitHub side projects.
5. If you change locale behavior, also verify sitemap, metadata, tags, and pagination.
6. Do not commit transient files under `.claude/worktrees/`.
