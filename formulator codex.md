# Formulator Codex — Joe Visual Storyteller

## Purpose

This repository is Joseph H. Dunn II's single-page portfolio: a medieval × cyber-tactical React experience. It is built with React 19, TypeScript, Vite, Tailwind CSS, and deployed to GitHub Pages.

The central rule is simple: the production app in `src/` and the reference design system in `design-system/` must stay aligned.

## Project map

| Path | Responsibility |
| --- | --- |
| `src/App.tsx` | Composes the page: progress rail, nav, hero, about, chronicle, skills, and footer. |
| `src/components/` | Page sections and reusable interactive UI. |
| `src/data/content.ts` | Portfolio copy, navigation sections, statistics, skills, and career chronology. |
| `src/hooks/useTypewriter.ts` | Hero tagline typewriter effect. |
| `src/index.css` | Tailwind layers, fonts, CSS design tokens, and animation classes. |
| `public/fonts/`, `public/assets/` | Runtime-served brand assets. |
| `design-system/` | Design-system mirror, visual previews, assets, and portfolio UI kit. |
| `vite.config.ts` | GitHub Pages base path: `/joevisualstoryteller/`. |

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
npm run deploy
```

`npm run deploy` builds and publishes `dist/` with `gh-pages`. Run lint and build before deploying.

## GitHub Pages release workflow

The production site is published from the generated `gh-pages` branch at:

```text
https://joevisualstoryteller.github.io/joevisualstoryteller/
```

After committing and pushing source changes to `main`, publish the site from the repository root:

```bash
npm install
npm run lint
npm run deploy
```

`npm run deploy` runs `npm run build` first, then executes `gh-pages -d dist` to publish the production bundle. Do not hand-edit `dist/` or the `gh-pages` branch. Confirm the deployment command reports `Published`, then check the URL above after GitHub Pages finishes serving the update.

## Content-first changes

For copy, skills, statistics, navigation labels, and chronology, update `src/data/content.ts` first. Keep these IDs stable and unique because both navigation and `ChapterProgress` resolve them as section anchors:

```ts
home | about | chronicle | skills
```

When data types or exported content change, mirror the corresponding change in `design-system/src/data/content.ts`.

## Component conventions

- Use function components and strict TypeScript.
- Prefer Tailwind utilities; keep global tokens, font declarations, and reusable animations in `src/index.css`.
- Preserve accessible interaction: semantic links/buttons, useful `aria-*` state, keyboard focus, and Escape handling for dismissible UI.
- `Reveal` uses `IntersectionObserver`; `ChapterProgress` observes IDs in `navSections`; `StatCard` supports hover, focus, touch focus, and Escape.
- Keep components self-contained. Reusable content belongs in the data module rather than duplicated JSX.

## Brand guardrails

- **Corners:** zero border radius. Do not introduce pills, rounded cards, or circular UI.
- **Accent frequency:** gold `#c9a227` → light blue `#7dd3fc` → diamond pearl `#e0e7ef` (legacy token name: `crimson`) → maroon `#5d2e3e`, used sparingly.
- **Typography:** Cinzel for all-caps display headings; JetBrains Mono for labels/system language; Inter for body text.
- **Voice:** theatrical third-person, with system-log labels such as `// IDENTIFICATION` and `[ SYSTEM: ONLINE ]`. Avoid first-person portfolio copy.
- **Motifs:** runes, diamonds, mono glyphs, fine rules, scanlines, and gold glows. Do not use emoji or purple/lavender gradients in product UI.
- **Long-page footer:** retain `[END OF TRANSMISSION]`.

The canonical token definitions and extended visual reference are in `design-system/colors_and_type.css`, `design-system/README.md`, and `design-system/preview/`.

## Design-system synchronization (required)

Every production UI change has a mirror requirement:

| Production change | Required design-system update |
| --- | --- |
| Add a component | Copy it to `design-system/src/components/`, add a matching `.d.ts`, and create `design-system/preview/components-<name>.html`. |
| Update a component | Mirror its TSX file; update its `.d.ts` if props change; refresh the preview when appearance changes materially. |
| Change global tokens/styles | Mirror in `design-system/src/index.css`; also update `colors_and_type.css` for CSS variables or fonts. |
| Change content/types | Mirror `design-system/src/data/content.ts`. |
| Change portfolio kit | Update the matching `design-system/ui_kits/portfolio/Kit*.jsx`, `content.js`, `portfolio.css`, or `index.html`. |

Do **not** overwrite `src/main.tsx` or `design-system/src/main.tsx`: both intentionally use a dynamic `import('react-dom/client')` so the design-system bundler can process the project.

## Verification checklist

1. Run `npm run lint`.
2. Run `npm run build`.
3. Check desktop and mobile navigation, section anchors, reveal effects, and the chapter progress rail.
4. For `StatCard` work, verify delayed hover, keyboard focus, mobile/touch focus, viewport-safe tooltip anchoring, and Escape dismissal.
5. Confirm that mirrored `design-system/` files and relevant previews reflect the final UI.

## Change boundaries

- Preserve the Vite GitHub Pages base path unless the deployment URL changes.
- Keep self-hosted Cinzel fonts available under `public/fonts/`.
- Do not edit generated build output such as `dist/`.
- Treat `design-system/_ds_bundle.js` and `_ds_manifest.json` as generated/supporting design-system artifacts; change source files rather than hand-editing them.
