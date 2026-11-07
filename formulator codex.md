# Formulator Codex — Joe Visual Storyteller

## Purpose

This repository contains Joseph Henry Dunn II’s single-page portfolio, focused on staff engineering, operations, infrastructure, security, and applied AI. The app uses React 19, TypeScript, Vite, and plain CSS, and is published with GitHub Pages.

## Project map

| Path | Responsibility |
| --- | --- |
| `src/App.tsx` | Composes the skip link, navigation, hero, about, selected work, capabilities, contact, and footer. |
| `src/components/` | Page sections and interactive UI. `Experience.tsx` renders selected work and career history; `Skills.tsx` renders capabilities. |
| `src/data/content.ts` | Shared portfolio copy, metrics, case studies, capabilities, career history, and navigation. Some section copy and contact links remain in components. |
| `src/design-system/tokens.css` | Runtime color, typography, spacing, radius, shadow, and transition tokens. |
| `src/index.css` | Global styles, component styles, responsive rules, and motion preferences. |
| `src/main.tsx` | App entry; imports tokens and styles, then mounts React. |
| `DESIGN_SYSTEM.md` | Crystal Chronicle design principles and component guidance. `src/design-system/tokens.css` remains the source of truth for runtime values. |
| `vite.config.ts` | GitHub Pages base path: `/joevisualstoryteller/`. |
| `assets/` | Repository assets, including the README cover. |

## Commands

Use Node `22.23.2` from `.nvmrc`; `package.json` also permits Node 24 or newer.

```bash
npm install
npm run dev
npm run lint
npm run build
npm run audit
npm run check
npm run preview
```

`npm run check` runs lint, build, and the high-severity dependency audit. Run it before a release. There is no test script in `package.json`.

## Content and navigation

Update shared copy and data in `src/data/content.ts`; check the relevant components for copy or links stored directly in JSX. Keep claims and metrics accurate and supported. Keep navigation IDs unique and aligned with their section IDs and links:

```text
home | about | work | capabilities | contact
```

## Design and accessibility

- Follow the Crystal Chronicle principles in `DESIGN_SYSTEM.md`: framed crystal surfaces, restrained accents, useful evidence, and clear hierarchy. Use the runtime tokens in `src/design-system/tokens.css` for current values.
- Use the existing system sans and monospace font stacks, Georgia display headings, 2px framed controls and panels, and the styles in `src/index.css`. Do not restore the old medieval theme or assume Tailwind is installed.
- Preserve semantic landmarks, the skip link, visible keyboard focus, meaningful labels, and the mobile menu’s expanded state, Escape dismissal, and focus return.
- The hero system map animates with browser observers and respects reduced motion, visibility, and viewport intersection. Preserve its accessible description and cleanup when changing it.
- Verify desktop and mobile layouts, navigation anchors, keyboard behavior, and reduced-motion behavior for relevant changes.

## GitHub Pages release

The site URL is https://joevisualstoryteller.github.io/joevisualstoryteller/. `npm run deploy` builds the app and publishes `dist/` to `gh-pages`. Publish only when requested. Commit and push source changes before a requested deployment, and identify the source commit in the generated deployment commit. Do not hand-edit `dist/` or the deployment branch. After publishing, verify the live site.

## Change boundaries

- Preserve the Vite base path unless the hosting URL changes.
- Keep `src/main.tsx` and its dynamic React DOM import intact unless the task calls for changing the entry point.
- Do not treat the old root `design-system/` mirror instructions in `CONTRIBUTING.md` as current repository structure; the runtime design tokens now live under `src/design-system/`.
- Do not edit generated build output.
