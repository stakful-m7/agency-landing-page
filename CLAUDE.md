# Agent Context — agency-landing-page

## Branch Workflow
- Always branch from `main`
- Branch naming: `{type}/STA-{id}-{short-description}`
- Never push directly to `main`
- All changes via PR with squash merge

## Commit Messages
- Format: `STA-{ID}: {Imperative description}`
- Always include: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`

## PR Requirements
- Fill out PR template completely
- Reference Paperclip issue ID
- CI must pass (build job)
- CODEOWNERS review required

## Stack
- Next.js 15 (App Router)
- Tailwind CSS
- Deploy target: Vercel or Azure Static Web Apps
