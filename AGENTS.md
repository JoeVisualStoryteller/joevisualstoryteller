# AGENTS.md

## Project and scope

This is Joseph Henry Dunn II’s single-page professional portfolio, built with React 19, TypeScript, Vite, and plain CSS. It is hosted on [GitHub Pages](https://joevisualstoryteller.github.io/joevisualstoryteller/).

Inspect the relevant source before changing it. Preserve existing work, keep changes focused, and support professional claims and metrics with evidence. Do not invent experience or outcomes.

## Keep it simple

- Prefer the smallest clear solution that meets the current need. Reuse existing components, tokens, and patterns before adding abstractions or dependencies.
- Avoid speculative features, configuration, duplication, and unrelated refactoring. Keep components typed and understandable; put reusable authoritative content in `src/data/content.ts` when appropriate.
- Update documentation when behavior or project operation changes. Keep this file focused on durable guidance; inspect source for implementation details.

## Project conventions

- `src/App.tsx` composes the page; `src/components/` contains its sections; `src/data/content.ts` holds shared content and navigation. Some content and links live in components.
- Use `src/design-system/tokens.css` for runtime tokens and `src/index.css` for styles. Follow the Quiet Signal principles in `DESIGN_SYSTEM.md`: calm surfaces, restrained accents, clear hierarchy, evidence-led content, and system-oriented visuals. Use the existing system sans and monospace stacks.
- Preserve responsive layouts, semantic landmarks, meaningful labels, visible focus, keyboard access, the skip link, and reduced-motion support. Animation must stop when appropriate and clean up its resources.
- Keep navigation data and unique section IDs aligned: `home`, `about`, `work`, `capabilities`, and `contact`. Preserve the mobile menu’s Escape and focus behavior.
- Preserve the dynamic React DOM import in `src/main.tsx` and the GitHub Pages base path in `vite.config.ts` unless the task requires a change.
- `CONTRIBUTING.md` describes an absent, obsolete design-system mirror; do not recreate it based solely on that file. The color examples in `DESIGN_SYSTEM.md` differ from runtime tokens; use `tokens.css` as the source of truth. Reconcile `formulator codex.md` when project operation changes.

## Development and verification

Use Node `22.23.2` from `.nvmrc`; `package.json` also accepts `>=24`. Install dependencies with `npm install`; use `npm run dev` and `npm run preview` for local inspection.

Run checks appropriate to the change and report any that could not run. `npm run check` runs lint, build, and the high-severity dependency audit; run it before a release. There is no test script. For UI changes, inspect desktop and mobile layouts, anchors, keyboard navigation, and reduced motion as relevant. For hero animation changes, also check resizing, visibility, motion preference changes, and cleanup.

## Deployment

Deploy only when the user requests it. Commit and push the intended source first. Publish generated `dist/` to `gh-pages` with the commit message `deploy: <full-source-commit-sha>` and an explicit source reference; the default `npm run deploy` does not supply that message. Verify the published site. Never hand-edit generated output or the deployment branch, and do not rewrite history.

## Commit attribution

For commits containing Codex-authored work, include this trailer at the end of the commit message, separated from the body by a blank line:

```text
Co-authored-by: Codex <noreply@openai.com>
```

Preserve the configured human author and other applicable trailers. Do not amend or rewrite existing commits merely to add attribution.
