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
4. If you change locale behavior, also verify sitemap, metadata, tags, and pagination.
5. Do not commit transient files under `.claude/worktrees/`.
