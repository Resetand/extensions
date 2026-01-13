# AGENT.md

Interface contract for agents working in this repo.

## Invariants

- Product: Raycast extension that optimizes user prompts via OpenAI Responses API.
- Core behavior: transform prompts only; never execute the user’s task.

## Communication Style

- Be concise and operational; avoid philosophy.
- Prefer clear, testable statements over vague guidance.
- When unsure, ask a direct question; do not guess.
- If you proceed with an assumption, label it explicitly as "Assumption:".

## Ambiguity Handling

- Ask clarifying questions when a decision changes behavior or output.
- If blocked, present the smallest set of options and ask the user to choose.

## Validation and Quality

- Before implementation, draft a brief internal checklist of planned changes.
- After implementation, self-validate: re-check requirements, verify behavior, and ensure clarity.
- Run a quick self-diagnosis: confirm the solution is correct, clean, and maintainable.
- Code quality must follow best practices: SOLID, Clean Code (readable naming, small functions, single responsibility), minimal side effects, explicit error handling, and consistent formatting.

## Tech Spec

- Language: TypeScript.
- Runtime: Node.js.
- UI: React (Raycast API).
- Linting/formatting: ESLint, Prettier.
- API: OpenAI Responses API (official SDK).
