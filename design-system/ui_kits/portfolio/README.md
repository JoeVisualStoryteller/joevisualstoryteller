# Portfolio UI Kit

A pixel-faithful React (JSX-via-Babel) recreation of Joseph H. Dunn II's single-page portfolio site at [joevisualstoryteller.github.io/joevisualstoryteller](https://joevisualstoryteller.github.io/joevisualstoryteller). Lifted directly from [`JoeVisualStoryteller/joevisualstoryteller`](https://github.com/JoeVisualStoryteller/joevisualstoryteller); the original is React 19 + Vite + Tailwind, this kit is plain React 18 UMD + a hand-written CSS file so it runs as a single static `index.html`.

## Run

Open `index.html` directly — no build step. All deps are CDN.

## Files

| File | Purpose |
|------|---------|
| `index.html`         | Composed page. Mounts `<App>` with scroll-tracking active-section state. |
| `portfolio.css`      | All component CSS (replaces Tailwind utility classes from the source repo). Imports `../../colors_and_type.css`. |
| `content.js`         | Plain JS object with all copy + stats + skills. Mirrors `src/data/content.ts` from the source. |
| `Runes.jsx`          | `<CornerRune pos="tl|tr|bl|br" />` and `<Diamond />` — the signature SVG decorations. |
| `Nav.jsx`            | `<Nav activeId onNav>` — fixed top, scroll-detects backdrop intensity. |
| `Hero.jsx`           | `<Hero data onCta>` — full-viewport hero with grid + scanlines + vignette + 4 runes + glitch-animated name. |
| `SectionHeader.jsx`  | `<SectionHeader label title>` — mono eyebrow → diamond rule → display title. |
| `About.jsx`          | `<About data>` — IDENTIFICATION section. Bio + 2×2 stat grid. |
| `Skills.jsx`         | `<Skills data>` — LOADOUT section. 3-column grid of skill cards with banner-top. |
| `Summon.jsx`         | `<Summon email>` — ceremonial contact CTA. **Uses the only maroon element on the page.** |
| `Footer.jsx`         | `<Footer />` — wordmark + `[END OF TRANSMISSION]`. |

## Components at a glance

```jsx
<Nav activeId="home" onNav={id => …} />
<Hero data={JHD_CONTENT.hero} onCta={id => …} />
<SectionHeader label="// IDENTIFICATION" title="About the Operator" />
<About data={JHD_CONTENT.about} />
<Skills data={JHD_CONTENT.skills} />
<Summon email="jdunn0423@gmail.com" />
<Footer />
<CornerRune pos="tl" />
<Diamond size={16} />
```

## Interactions implemented (cosmetic, not production)

- Nav links scroll-smooth to anchors and visually flip to `active` color on arrival.
- Hero CTAs route to `#about` / `#skills` via the same scroll behaviour.
- Stat cards + skill cards show hover (border, glow, lift) — no real state.
- Hero name runs the 6-second `glitch` keyframe animation continuously.

## Intentional omissions

- Real form, blog, or content beyond what's in the source repo.
- React-icons (the dependency is installed in source but never imported).
- Mobile menu — source has none; nav links are visible on all sizes.

If you need additional screens (project detail, contact form, resume builder UI), confirm with Joseph first — these don't exist in the live site yet and would be invention rather than recreation.
