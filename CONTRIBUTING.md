# Design System — Contribution Checklist for Claude Code

Every new or updated feature must keep the **`design-system/`** folder in sync
with the live Vite app in `src/`. The DS project is bound to this folder in
Claude's design environment; it recompiles automatically when files change.

---

## When you add a new component

### Required — compiler won't register without these

- [ ] `design-system/src/components/NewComponent.tsx`  
  Exact copy of `src/components/NewComponent.tsx`.  
  **No dynamic `import()` of npm packages** — the in-browser bundler can't
  resolve them. If the component needs `react-dom/*`, restructure so the
  file itself is pure React (no portal/root mounting).

- [ ] `design-system/src/components/NewComponent.d.ts`  
  Type-only export file. Minimal example:
  ```ts
  export interface NewComponentProps {
    value: string
    label: string
  }
  export default function NewComponent(props: NewComponentProps): JSX.Element
  ```

- [ ] `design-system/preview/components-new-component.html`  
  A standalone preview card tagged for the DS card grid.  
  **First line must be the `@dsCard` comment** — nothing before it:
  ```html
  <!-- @dsCard group="Components" viewport="400x200" name="New Component" subtitle="One-line description" -->
  <!DOCTYPE html>
  <html>
  <head>
    <script src="../../_ds_bundle.js"></script>
  </head>
  <body>
  <script>
    const { NewComponent } = window.JosephDunnDesignSystem_988385;
    // mount and render your preview here
  </script>
  </body>
  </html>
  ```
  Groups in use: `Brand`, `Colors`, `Components`, `Spacing`, `Type`,
  `UI Kit — Portfolio`.

---

## When you update an existing component

- [ ] Mirror the change in `design-system/src/components/SameComponent.tsx`
- [ ] Update the `.d.ts` if the props interface changed
- [ ] Update the preview HTML if the visual output changed significantly

---

## When you add or change tokens / global styles

- [ ] `design-system/src/index.css` — Tailwind utilities, `@keyframes`,
  custom properties added here
- [ ] `design-system/colors_and_type.css` — only if CSS custom properties
  (`--gold`, `--void`, etc.) or `@font-face` rules changed

---

## When you update content / data

- [ ] `design-system/src/data/content.ts` — keep in sync whenever a new
  type (`StatDetailItem`, etc.) or new export is added

---

## When you update the UI Kit (portfolio page)

Kit files live in `design-system/ui_kits/portfolio/` and are prefixed `Kit*`
to avoid name collisions with the DS compiler:

- [ ] `KitAbout.jsx`, `KitHero.jsx`, `KitNav.jsx`, `KitSectionHeader.jsx`,
  `KitSkills.jsx`, `KitFooter.jsx` — JSX equivalents of the TSX components
- [ ] `Contact.jsx`, `Deployments.jsx` — standalone kit sections
- [ ] `content.js` — if copy or data shape changed
- [ ] `portfolio.css` — if kit-specific styles changed
- [ ] `index.html` — if script load order or App markup changed

All kit exports go through `window.JHDKit` (not bare `window.X`):

```js
window.JHDKit = window.JHDKit || {};
window.JHDKit.MyComponent = MyComponent;
```

---

## The one file you must never overwrite

**`design-system/src/main.tsx`** (and `src/main.tsx` in the Vite app root)  
This file uses a dynamic `import('react-dom/client')` instead of a static
import — intentional, so the DS in-browser bundler doesn't choke on the
npm dependency. Do not revert it to a static import.

Correct form:

```ts
// @ds-bundle-skip — Vite app entry; not a design system component.
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'

const rootEl = document.getElementById('root')!
import('react-dom/client').then(({ createRoot }) => {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
```

---

## Quick sanity check (ask Claude in the DS project after each push)

> "Pull latest from GitHub and run check_design_system"

A clean result looks like:

```
Components: App, About, … No issues found.
```

Any `npm import(s) dropped` warning means a component has a static import
of a Node package — restructure or add `// @ds-bundle-skip` to that file.
