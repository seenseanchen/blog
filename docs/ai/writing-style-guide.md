# Writing Style Guide

This guide defines the voice, tone, and structural patterns for Sean's blog posts. All AI agents drafting or translating posts must follow these rules.

## Voice and Tone

### Traditional Chinese posts

- Write in first person. The tone should feel like an experienced engineer talking to a peer — not a textbook, not a tutorial.
- Use natural Taiwanese Mandarin with casual expressions where appropriate: 「踩過的坑」「打滾了一些時間」「搞清楚」.
- Do not open with 「本文將介紹⋯⋯」or any academic-style introduction. Start with a personal experience, observation, or a concrete scenario the reader can relate to.
- Do not be preachy or motivational. Endings should be concise — summarize the takeaway in one or two sentences, then stop.

### English posts

- Match the Chinese source in meaning, structure, and tone.
- Keep the conversational register. Avoid formal academic phrasing.
- Do not invent new claims, examples, or opinions that are not in the Chinese version.
- Technical terms should stay consistent across both versions.

## Opening Pattern

Every post should open with one of these approaches:

1. **Personal experience**: 「我之前遇過⋯⋯」/ "I have seen this more than once…"
2. **Shared observation**: 「大多數工程師⋯⋯」/ "Most engineers…"
3. **Concrete scenario**: describe a situation the reader recognizes before naming the problem.

Never open with an abstract definition or a list of what the post will cover.

## Chinese–English Code-Switching

- Use English directly for established technical terms: code, bug, API, framework, hooks, copy paste, vibe coding, side project, monorepo, prop drilling.
- Do not force-translate terms that would sound unnatural in Chinese.
- Keep the same English terms in both locale versions for consistency.

## Paragraph and Rhythm

- Keep paragraphs short — one to three sentences.
- Use line breaks to control pacing. A single short sentence on its own line creates a natural pause.
- Bold is reserved for core principles and key assertions, not for emphasis on every other word.
- Lists are for concrete items (tools, file names, steps). Do not use lists for argumentation or opinion.

## Structure

The typical post structure is:

1. **Opening**: personal experience or shared observation that sets up the problem.
2. **Problem breakdown**: split the topic into two to four sub-problems, each with its own H3.
3. **Personal take or approach**: what Sean actually does, with specific examples.
4. **Closing**: one or two sentences that summarize the core message. No call-to-action hype.

Use H2 for major sections and H3 for sub-topics within a section.

## Style Switching by Post Type

- **Personal experience and technical opinion posts**: strong conversational tone, short paragraphs, first person throughout.
- **News analysis and industry commentary** (e.g., Glasswing-style posts): slightly more formal, structured with citations and expert quotes, but still written from Sean's perspective with a personal reflection section at the end.

## Common Pitfalls to Avoid

These are recurring issues found during author review. AI agents must self-check for these before submitting a draft:

### 1. Unclear subject–object relationships

Bad: 「透過定義好的 AI Instruction 和 Skill 描述，直接讓 Agent 除了檔案樣板，邏輯規範等能夠寫好了。」
Better: 「有了定義好的 AI Instruction 和 Skill，Agent 可以直接把檔案樣板、邏輯規範等都處理好。」

When a sentence has more than one possible subject or the object is ambiguous, rewrite it so that who-does-what is immediately clear.

### 2. Unnatural word order in titles

Bad: 「我如何操作各個 AI 輔助工具在前端開發流程」
Better: 「我如何在前端開發流程中使用各個 AI 輔助工具」

In Chinese, place the context or location phrase before the verb phrase, not at the end.

### 3. Inconsistent punctuation

- Use full-width punctuation for Chinese text: ，。：；「」
- Use half-width for English proper nouns, code, and inline technical terms.
- Do not mix half-width commas into Chinese sentences.

### 4. Run-on conversational sentences

The conversational tone is a feature, not a bug — but some sentences read like a stream of consciousness. After drafting, apply this self-check: read each sentence aloud. If you need to take a breath or re-read to parse it, break it into shorter sentences.

## Self-Check Before Submitting a Draft

1. Does the opening start with a concrete experience or observation, not an abstract statement?
2. Is every bold phrase a genuine core principle, not just decoration?
3. Can each sentence be parsed in one read without backtracking?
4. Are subject–object relationships clear in every sentence?
5. Is punctuation consistent (full-width for Chinese, half-width for English/code)?
6. Does the ending stop after the summary without unnecessary encouragement?
