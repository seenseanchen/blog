# Blog Publishing Policy

## Goal

Publishing rules should make it obvious how AI was used and what level of human review happened before a post goes live.

## Supported Authoring Modes

### 1. Human-authored, AI-edited

- Human writes the original content.
- AI may help with restructuring, grammar, translation, or outline polishing.
- Safe to publish after normal author review.

### 2. AI-drafted, human-reviewed

- AI produces a meaningful first draft.
- A human owner reviews claims, edits structure and wording, and approves publication.
- Safe to publish only after explicit human review.

### 3. AI-assisted, not yet fully reviewed

- AI generated or substantially shaped the draft.
- Human review is incomplete.
- Keep the post in draft status or include an explicit disclosure if intentionally publishing an early draft.

## Required Checks Before Publishing

- The post has both `zh-TW` and English versions when it is part of the public blog.
- The slug matches across locales.
- Title, summary, tags, and core claims match across locales.
- Personal claims align with the current public positioning across the entry page, `about`, experience sections, `projects`, and related personal posts.
- AI disclosure language matches the actual review state.

## File Placement

- New Traditional Chinese posts should be created at `data/blog/YYYYMM/{post-name}.mdx`.
- New English counterparts should be created at `data/blog/en/YYYYMM/{post-name}.mdx`.
- The `YYYYMM` folder is for source organization only. The public slug should remain `{post-name}` and stay aligned across locales.
- Podcast manuscripts, speaking outlines, and TTS source scripts should live under `data/podcasts/`.
- Generated audio files should not live under `data/`. If they are committed to the repo, store them under `public/static/audio/`; if they become large or environment-specific, use external object storage instead.
- Do not publish podcast manuscripts on the website unless the task explicitly asks to turn them into public blog content.

## Required AI Disclosure Copy

- If a post is AI-assisted and not yet author-proofread, append this exact note at the bottom of the Traditional Chinese post body: `本文由 AI 輔助撰寫，尚未經過作者本人校稿`
- If the author has reviewed and proofread the AI-assisted post, replace that note with this exact Traditional Chinese message: `本文由 AI 輔助撰寫，已經過作者本人校稿`
- If a public English counterpart exists, keep the disclosure state aligned and translate the message faithfully.

## Personal Page Alignment

- `Home` is a routing page for reader intent and should stay lightweight.
- `About` carries the main background narrative plus representative career experience.
- `Projects` is for public GitHub side projects, not the main job-history narrative.
- If a post references experience, side projects, or personal positioning, keep those claims synchronized with the matching public page.

## Translation Rules

- Translate meaning, not just sentences.
- Keep technical terms stable across both versions.
- Preserve dates, employer names, product names, and measurable outcomes exactly.
- Do not invent new claims in the English version.

## Disclosure Guidance

- If a post is not fully reviewed, keep the disclosure explicit and unambiguous.
- Do not label AI-generated text as human-reviewed unless a human has actually checked the content.
