# AGENTS.md

This file is the short entry point for coding agents working in this repository.

## Read First

1. `docs/ai/project-context.md`
2. `docs/ai/blog-publishing-policy.md`

## What This Repo Is

Sean Chen's bilingual personal site and technical blog, focused on frontend architecture, enterprise systems, and AI-assisted engineering.

## Operating Rules

- Keep `zh-TW` at root routes and English under `/en`.
- Maintain Chinese and English parity for public personal pages and published posts.
- Use `localizePath()` for static internal links and `post.path` for MDX post URLs.
- Keep top-level agent files concise; move deeper detail into `docs/ai/*`.
- Never commit `.claude/worktrees/`.

## Project Skills

- Codex skills: `.codex/skills/`
- Claude-compatible skills: `.claude/skills/`
- Claude project subagents: `.claude/agents/`

Use project architecture guidance when changing routing, contentlayer, SEO, or shared page structure. Use publishing guidance when drafting, translating, or publishing content.
