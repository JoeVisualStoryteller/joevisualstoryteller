# AGENTS.md

## Project and scope

This repository is Joseph Henry Dunn II’s single-page professional portfolio. It presents staff engineering and operations work across infrastructure, security, automation, applied AI, and team leadership. The production application is a React 19 and TypeScript frontend built with Vite and plain CSS. It is hosted on GitHub Pages at https://joevisualstoryteller.github.io/joevisualstoryteller/.

Inspect the current source before changing behavior. Preserve the user’s existing work, make focused changes, and keep professional claims and metrics supported by available evidence. Do not invent experience or outcomes.

## How the application works

- `index.html` provides the page shell. `src/main.tsx` imports the design tokens and stylesheet, then dynamically imports React DOM and mounts `App` inside `StrictMode`.
- `src/App.tsx` renders a skip link, navigation, a main landmark containing Hero, About, Experience, Skills, and Contact, followed by Footer.
- `src/data/content.ts` supplies shared hero copy, metrics, case studies, capabilities, career entries, and navigation. Some copy and links also live directly in components; inspect the relevant component before editing content.
- `Nav.tsx` displays navigation links from `navSections`. The mobile menu closes on link selection, Escape, and the desktop breakpoint; Escape returns focus to the toggle.
- `Hero.tsx` renders the introduction, selected metrics, and an operational system map. Its animation uses animation frames, resize and intersection observers, visibility state, and reduced-motion preferences. It cleans up listeners, observers, frames, and inline positioning on unmount.
- `Experience.tsx` renders case studies and career history in the selected-work section. `Skills.tsx` renders capability groups. `Contact.tsx` provides contact and external links.
- Navigation anchors are `home`, `about`, `work`, `capabilities`, and `contact`. Keep section IDs, data, and links aligned and unique.

## Repository map

| Path | Role |
| --- | --- |
| `src/components/` | Page sections and interactive components. |
| `src/data/content.ts` | Shared portfolio content and typed data. |
| `src/design-system/tokens.css` | Runtime color, type, spacing, radius, shadow, and transition tokens. |
| `src/index.css` | Global, component, responsive, and motion styles. |
| `DESIGN_SYSTEM.md` | Quiet Signal design principles and component guidance. |
| `formulator codex.md` | Supplemental project overview; reconcile it when project operation changes. |
| `assets/` | Repository assets, including the README cover. |
| `package.json` and `package-lock.json` | Dependencies, scripts, and locked dependency versions. |
| `vite.config.ts` | Vite configuration and GitHub Pages base path. |

The root `CONTRIBUTING.md` describes an older design-system mirror that is absent from the current repository. Do not recreate or require that mirror based solely on those stale instructions. The color examples in `DESIGN_SYSTEM.md` also differ from the runtime tokens; inspect `src/design-system/tokens.css` for actual values.

## Design and implementation

- Follow the Quiet Signal direction: calm surfaces, restrained accents, clear hierarchy, evidence-led content, and system-oriented visuals. Use existing tokens and patterns before introducing new ones.
- Use the existing system sans and monospace font stacks and plain CSS. Tailwind is not a current dependency. Keep the design responsive and avoid restoring the former medieval theme.
- Keep components understandable and typed. Place reusable content in the data module when appropriate, and avoid duplicating authoritative copy.
- Preserve semantic landmarks, meaningful labels, visible focus, keyboard access, and the skip link. Respect reduced-motion preferences and ensure animation work stops and cleans up appropriately.
- Preserve the existing dynamic React DOM import unless the task requires changing the entry point. Preserve the Vite base path unless the hosting location changes.

## Local development and verification

Use Node `22.23.2` from `.nvmrc`; `package.json` accepts `^22.23.2 || >=24`.

```bash
npm install
npm run dev      # Vite development server
npm run lint     # ESLint
npm run build    # TypeScript project build, then Vite production build
npm run audit    # npm audit at high severity and above
npm run check    # lint, build, then audit
npm run preview  # preview the built site
```

There is no test script in `package.json`. Run checks appropriate to the change and report any that could not run. Before a release, run `npm run check`. For UI changes, inspect desktop and mobile layouts, anchors, keyboard navigation, and reduced-motion behavior as relevant. For hero animation changes, check resizing, visibility, motion preference changes, and cleanup.

## Deployment

`npm run deploy` builds and publishes `dist/` to the `gh-pages` branch. Deploy only when the user requests it. Commit and push the intended source first. For an authorized generated deployment commit, use `deploy: <full-source-commit-sha>` and an explicit source reference; do not rewrite history. The default deploy script does not specify that commit message, so select a publication command that meets the convention. Verify the published site after deployment. Never hand-edit generated `dist/` output or the deployment branch.

## Commit attribution

For commits containing Codex-authored work, include this trailer at the end of the commit message, separated from the message body by a blank line:

```text
Co-authored-by: Codex <noreply@openai.com>
```

Preserve the configured human author and other applicable trailers. Do not amend or rewrite existing commits merely to add attribution.
