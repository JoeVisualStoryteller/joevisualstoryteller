# Contributing

## Design tokens

`src/design-system/tokens.css` is the single source of truth for colors,
gradients, shadows, type, spacing, radii and motion. Components in
`src/index.css` reference tokens with `var(--…)` only — no hex, `rgb()` or
`rgba()` values outside the token file. When you add or change a token, update
the Tokens section of `DESIGN_SYSTEM.md` in the same change.

Before pushing, run `npm run check` (lint, build and audit).

## The entry file you must not rewrite

`src/main.tsx` uses a dynamic `import('react-dom/client')` instead of a static
import. Keep it that way; do not revert it to a static import.

Correct form:
```ts
// Vite app entry.
import { StrictMode } from 'react'
import './design-system/tokens.css'
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
