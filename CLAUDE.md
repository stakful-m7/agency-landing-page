# Agent Context — agency-landing-page

This file is loaded automatically by Claude Code and similar agents working in this repo. Keep it concise and durable — anything specific to a single PR belongs in the PR description, not here.

## Stack

- **Next.js 16** (App Router, Turbopack) — note: `package.json` is the source of truth; if it says 16.x, this file should too
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **TypeScript** (strict)
- **Lucide React** for icons
- **`@vercel/analytics`** for analytics — see overhaul plan for the planned tracking abstraction
- **Deploy target:** Vercel (current); Azure Static Web Apps remains an option per the website overhaul brief

## Project structure

```
app/                 — App Router routes, layouts, route handlers
  layout.tsx         — root HTML shell, fonts, analytics
  page.tsx           — homepage assembly (composes section components)
  globals.css        — design system tokens (Stakful M7 v1.0)
components/          — shared UI organized by purpose
  brand/             — logo, design tokens
  layout/            — Navbar, Footer
  primitives/        — hooks, utilities
  sections/          — page-level section components (Hero, Problem, ...)
content/             — typed content modules + MDX (planned, see overhaul plan)
public/              — static assets
.github/             — PR template, CODEOWNERS
```

When adding new code, place it where peers expect to find it: shared UI in `components/`, route segments in `app/`, copy/data in `content/`. Avoid creating a new top-level directory unless you have a reason that won't fit anywhere else.

## Branch & commit workflow

- Always branch from `main`. Never push directly to `main`.
- Branch naming: `{type}/STA-{id}-{short-description}` where `{type}` is one of `feature`, `fix`, `chore`, `docs`, `refactor`, `test`.
- Commit message format: `STA-{ID}: {Imperative description}`
- Always include trailer: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`
- All changes via PR with squash merge.

## Pull requests

- Fill out the PR template (`.github/pull_request_template.md`) completely.
- Reference the Paperclip issue ID in the **Paperclip Issue** field and the commit prefix.
- CI must pass (`build` job) before merge.
- CODEOWNERS review is required.
- Prefer small, single-purpose PRs over large ones — easier to review, easier to revert.

## Local commands

```bash
npm install
npm run dev      # Next dev server (Turbopack)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Voice & copy guidelines

The website overhaul brief (`07-website-overhaul-guide.md`, CMP-WEB-2026Q2-01) defines the voice rules. Honor them on every copy change:

- **Banned phrases** that have leaked into prior copy and should not be reintroduced: "transform your operations", "transform your business", "AI workforce", "enterprise-grade AI", "AI-Powered CTO", "Fraction of the Cost" (as a primary frame). Lead on specific outcomes, not generic transformation language.
- **Numerical claims** must be sourced. Don't invent ROI percentages, durations, or client numbers. If you must approximate, note the methodology.
- **Compliance claims** (SOC2, HIPAA, PCI, ISO, FMCSA) — never assert without per-instance confirmation from Terrance.
- **First person** is Terrance's voice on bio/about pages; brand voice (plural or neutral) on product/service pages.
- **FastEndpoints** is the standard for any backend examples; **MediatR** is only mentioned in the context of why we moved off it.

## Performance & accessibility budgets

Targets (per overhaul brief §9.2–9.3):

- LCP < 2.0s on 4G, CLS < 0.1
- Marketing-page JS bundle < 150KB gzipped
- Lighthouse SEO ≥ 95, Accessibility ≥ 95
- WCAG 2.2 AA — semantic HTML, keyboard-navigable, alt text on every image, contrast ≥ 4.5:1

If you're touching shared layout, run a Lighthouse pass on the affected route before opening the PR.

## Out-of-scope reminders for agents

- Do not commit secrets, `.env*` files, or `node_modules/`. The `.gitignore` covers these — verify with `git status` before staging.
- Do not amend commits that have been pushed to a shared branch; create a new commit instead.
- Do not skip hooks (`--no-verify`) or signing flags unless explicitly asked.
- Do not bypass CODEOWNERS or merge your own PR without review.
