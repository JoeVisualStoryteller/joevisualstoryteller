# Contributing

This portfolio uses React, TypeScript, Vite, and plain CSS. Keep changes focused, preserve existing work, and support professional claims and metrics with evidence.

## Project structure

- `src/App.tsx` composes the page; `src/components/` contains its sections and interactive UI.
- `src/data/content.ts` holds shared content, metrics, case studies, capabilities, career history, and navigation. Some copy and links live in components.
- `src/design-system/tokens.css` defines runtime design tokens; `src/index.css` contains styles, responsive rules, and motion preferences. See `DESIGN_SYSTEM.md` for design principles.
- `src/assets/` contains assets imported by the app. `public/` contains files served as static assets. `assets/` contains repository assets such as the README cover.
- `src/main.tsx` imports styles and mounts React. Preserve its dynamic React DOM import unless the change requires otherwise.
- `vite.config.ts` configures the GitHub Pages base path. Preserve it unless the hosting path changes.

## Design tokens

`src/design-system/tokens.css` is the single source of truth for colors, gradients, shadows, type, spacing, radii, and motion. Styles in `src/index.css` reference tokens with `var(--…)` only; no hex, `rgb()`, or `rgba()` values outside the token file. When you add or change a token, update the Tokens section of `DESIGN_SYSTEM.md` in the same change.

## Development

Use Node `22.23.2` from `.nvmrc`; Node 24 or newer is also supported.

```bash
npm install
npm run dev
npm run lint
npm run build
npm run audit
npm run check
npm run preview
```

`npm run check` runs lint, build, and the high-severity dependency audit. Run it before a release. The project has no test script.

## Changes and verification

- Reuse existing components, tokens, and styles where practical. Update shared content in `src/data/content.ts` and check components for locally defined copy or links.
- Keep navigation links and unique section IDs aligned: `home`, `about`, `work`, `capabilities`, and `contact`.
- Preserve semantic landmarks, meaningful labels, the skip link, visible focus, keyboard access, reduced-motion support, and the mobile menu's Escape and focus behavior.
- For UI changes, inspect desktop and mobile layouts, anchors, keyboard navigation, and reduced motion as relevant. For hero animation changes, also check resizing, visibility, motion preference changes, and cleanup.
- Update documentation when behavior or project operation changes. Do not edit generated build output.

## Deployment

Pushing to `main` deploys the site. The CI workflow (`.github/workflows/ci.yml`) audits, lints, and builds every push and pull request; on `main` it then publishes `dist/` to GitHub Pages, but only if those checks pass. Use a separate branch for work that should not go live yet. After pushing, confirm the Actions run succeeded and verify the published site. Do not hand-edit generated output or rewrite history.
