---
applyTo: 'AGENTS.md,CLAUDE.md,.github/copilot-instructions.md,.github/instructions/**/*.md,.claude/**/*.md,.codex/**/*.md,docs/ai/**/*.md'
---

- Keep top-level instruction files short and use them as entry points to deeper docs.
- Put durable project rules in `docs/ai/*`, then reference them from tool-specific files.
- Avoid duplicating long policy text across AGENTS, CLAUDE, Copilot, and skill files.
- If a workflow changes, update the shared docs first, then adjust the tool-specific entry points.
