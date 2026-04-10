---
name: blog-publishing
description: Use when drafting, translating, reviewing, or publishing blog posts and personal content for this site.
---

# Blog Publishing

Read:

- `docs/ai/blog-publishing-policy.md`
- `docs/ai/project-context.md`

Checklist:

1. Decide the authoring mode before publishing.
2. Keep public blog posts and personal pages bilingual.
3. Keep locale variants on the same slug.
4. Preserve factual claims and measurable outcomes exactly across translations.
5. Keep personal claims aligned with the entry page, about page, representative experience, and GitHub side projects.
6. Create new post files under `data/blog/YYYYMM/{post-name}.mdx` and `data/blog/en/YYYYMM/{post-name}.mdx`. Treat the `YYYYMM` folder as source organization only; keep the public slug as `{post-name}`.
7. If the Traditional Chinese post is AI-assisted and not yet author-proofread, append this exact bottom note: `本文由 AI 輔助撰寫，尚未經過作者本人校稿`
8. After the author reviews the AI-assisted post, replace that bottom note with: `本文由 AI 輔助撰寫，已經過作者本人校稿`
9. Keep AI disclosure wording honest and synchronized across locale variants.
10. If the task requests a podcast manuscript, speaking outline, or TTS source script, save it under `data/podcasts/`. Do not publish it on the website unless explicitly requested.
11. If the workflow also generates audio files, do not store those binaries under `data/`; use `public/static/audio/` for repo-managed assets or external storage for large/generated media.
