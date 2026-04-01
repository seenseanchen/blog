---
name: project-architecture
description: Use when changing routing, contentlayer, SEO, layouts, or multilingual site structure in this repository.
---

# Project Architecture

Read:

- `docs/ai/project-context.md`

Checklist:

1. Confirm locale impact for both root `zh-TW` routes and `/en` routes.
2. Prefer shared helpers in `lib/` over copy-pasted page logic.
3. Use `localizePath()` for static routes and `post.path` for contentlayer post links.
4. Update sitemap, metadata, tags, and pagination if locale or URL rules change.
5. Ignore `.claude/worktrees/` and other transient agent artifacts.
