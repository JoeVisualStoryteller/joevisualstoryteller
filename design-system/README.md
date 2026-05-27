# Joseph H. Dunn II — Design System

> *"Where ancient discipline meets modern technology."*

A medieval × cyber-tactical design system for **Joseph H. Dunn II** — Systems Engineer, AI Architect, Digital Tactician. The aesthetic blends a heraldic, monastic visual vocabulary (gilded serifs, dark void backgrounds, corner runes, parchment text) with the chrome of an operator's terminal (mono labels, system-online kickers, faint scanlines, cyan telemetry). The product surface is currently a single-page professional portfolio at `joevisualstoryteller.github.io/joevisualstoryteller`.

## Sources

This system was reverse-engineered from one source codebase the user attached:

- **GitHub:** [`JoeVisualStoryteller/joevisualstoryteller`](https://github.com/JoeVisualStoryteller/joevisualstoryteller) — React 19 + Vite + Tailwind portfolio site. The Tailwind config (`tailwind.config.js`) is the authoritative palette + font reference; component files in `src/components/` define the layout primitives (Hero, About, Nav, Skills, SectionHeader, Footer).
- **Cinzel.zip** (uploaded) — Google Fonts' Cinzel family, the display face used throughout. Extracted into `fonts/`.

You can explore the source repo for additional context and component implementations; it is the canonical reference any agent building for Joseph should consult first.

## Index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Claude Code skill manifest
├── colors_and_type.css        ← single source of truth for colors + type
├── fonts/                     ← self-hosted Cinzel (TTF + variable)
├── assets/                    ← logos, runes, icon SVGs
├── preview/                   ← Design-System-tab cards
├── ui_kits/
│   └── portfolio/             ← React JSX recreation of the portfolio site
│       ├── README.md
│       ├── index.html         ← interactive demo
│       └── *.jsx              ← Nav, Hero, About, Skills, Footer + atoms
└── src/                       ← reference: original source from the repo
```

## At a glance

| Token            | Value         | Use                                              |
|------------------|---------------|--------------------------------------------------|
| `--void`         | `#08080d`     | Page background — the dark before dawn.          |
| `--surface`      | `#111118`     | Card / panel.                                    |
| `--gold`         | `#c9a227`     | Heraldic accent. Borders, titles, hover glow.    |
| `--crimson`      | `#e0e7ef`     | **Diamond** — brushed pearl. Bullets, file-tag eyebrows. |
| `--cyan`         | `#7dd3fc`     | Light blue. System telemetry, "online" status, kickers. |
| `--maroon`       | `#5d2e3e`     | **Ceremonial** — Harrow oxblood. The rarest accent: featured CTA, alert, sigil. |
| `--parchment`    | `#e8e0cc`     | Primary text — aged vellum.                      |
| Display          | **Cinzel**    | Carved heraldic serif. ALL-CAPS. Wide tracked.   |
| Mono             | JetBrains Mono| Eyebrows, button labels, system messages.        |
| Body             | Inter         | Bio paragraphs, sentence case.                   |

---

## Content Fundamentals

The voice is the brand's most distinctive asset. It is **theatrical, third-person, and unapologetically high-fantasy.** Joseph's professional identity is wrapped in a chivalric metaphor where AWS becomes a *cloud kingdom*, Docker is a *container vessel*, and AI tools are *sorcery*. Inside the product UI the metaphor is dialed back to a **tactical-cyber register** ("SYSTEM: ONLINE", "LOADOUT", "PROFILE.LOG", "END OF TRANSMISSION") — terminal output from someone with a fantasy paperback open on the next desk over.

### Voice rules

- **Third person, formal title.** "Joseph H. Dunn II is a battle-hardened systems engineer…" or "Sir Joseph Dunn — Master Artificer." Never "I" in marketing copy. The portfolio is a chronicle, not a personal statement.
- **You ≠ used.** No second-person address. The reader is a witness, not a customer.
- **CAPS for ritual.** Display headlines, eyebrows, button labels, and the name itself are always UPPERCASE. Lowercase is reserved for body paragraphs.
- **Wide letter-spacing carries emotional weight.** `letter-spacing` 0.15em–0.30em on every uppercase string. The wider, the more ceremonial.
- **Bracketed system tags** sit above headings as a kicker: `[ SYSTEM: ONLINE ]`, `// LOADOUT`, `// IDENTIFICATION`, `▸ PROFILE.LOG`. These are spoken in the voice of a tactical HUD.
- **Bullets are weapons.** Skills lists use a small ◆ diamond glyph in diamond-pearl, never a round dot or hyphen.
- **Numbers are claims.** Stats are large gold Cinzel ("10+", "100+", "4", "3"). They sit unadorned, never with a percentage symbol.
- **Em-dashes & ellipses** are fine; semicolons rare. Sentences alternate between short declarative ("A proven force multiplier.") and a longer second clause that names the proof.
- **No emoji in product UI.** Emoji are reserved for the README on GitHub (⚔️ 📜 🏰) where the medieval branding plays louder. Inside the running application: zero emoji, zero unicode hearts/stars.
- **End-of-message ritual.** Footer always closes with `[END OF TRANSMISSION]` in mono caps.

### Sample copy (lift verbatim or close)

> `[ SYSTEM: ONLINE ]`
>
> **JOSEPH H. DUNN II**
>
> Systems Engineer · AI Architect · Digital Tactician
>
> 10+ years forging resilient systems across military and enterprise domains. Where ancient discipline meets modern technology.

> `// IDENTIFICATION`
> **About the Operator**
> `▸ PROFILE.LOG`
>
> Joseph H. Dunn II is a battle-hardened systems engineer with over a decade of service spanning military intelligence and enterprise IT. He has designed, deployed, and defended critical infrastructure across government and commercial domains.

> `// LOADOUT`
> **Arsenal**

---

## Visual Foundations

### Color philosophy

Four named accents on a near-black field, in strict order of frequency.

1. **Gold** (`#c9a227`) is the protagonist — it draws every border, underlines every title, glows on every hover.
2. **Light blue** (`#7dd3fc`, tokenised as `--cyan` for codebase compatibility) is the telemetry voice — system tags, status kickers, faint grid lines. The *modern, digital* half of the metaphor.
3. **Diamond pearl** (`#e0e7ef`, tokenised as `--crimson`) is the decorative bullet — the ◆ list markers, the `▸ PROFILE.LOG` file tags. A nod to Joseph's Taurus birthstone.
4. **Maroon** (`#5d2e3e`, tokenised as `--maroon`) is the rarest — lifted from Warframe's Harrow, the priest-warrior. Reserved for **ceremonial weight**: the single most important CTA on a page, an alert state, a badge edge, a signature rule under a hero subtitle. **Never used on more than one element per surface.** If maroon appears, it's the focal point.

Gold = ancient. Light blue = modern. Diamond = enduring. Maroon = sacred.

There is no gradient color theory beyond hairline rules: gradients exist only as 1px-tall horizontal `linear-gradient(transparent → gold → transparent)` dividers between sections, and as a radial-vignette darkening on the hero. **Never use a full-area color gradient.** Never use a purple/blue lavender wash.

### Type rhythm

Every section follows the same three-beat rhythm:

1. **Mono kicker** (light blue or diamond, 12px, 0.25em tracking, uppercase) — names the section like a log line.
2. **Cinzel display title** (parchment, 30–40px, bold, 0.25em tracking, uppercase) — the heraldic banner. Usually flanked by short gold hairline rules with a centered 45°-rotated gold square as a "diamond" diacritic.
3. **Inter body** (parchment at 70–80% opacity, 16px, line-height 1.65) — the human voice. Sentence case.

Avoid mixing Cinzel and Inter on the same line. Mono labels are fine alongside either.

### Backgrounds, motifs, atmosphere

- **Solid void by default.** `#08080d`. Pages alternate between `--void` and a slightly cooler `#0a0a10` band for the next section.
- **Faint circuit grid** is layered on the hero only: two stacked grids, an 80×80 gold-at-4%-alpha and a 20×20 light-blue-at-2.5%-alpha. Reads as a tactical map, never busy.
- **Scanlines.** 1px every 3–4px, repeating linear gradient at ~7% black. Adds a CRT/HUD texture without dominating.
- **Radial vignette** on hero: transparent center → void edges. Pulls focus to the headline.
- **Corner runes.** Hand-drawn SVG runes pinned to all four corners of the hero at 18% opacity, gold. Stylized half-frame + concentric rings + cross-hatch. These are the system's signature decoration; every fullscreen surface gets them.
- **No photography.** No illustrative imagery. No mascots. The decoration is geometric/symbolic.
- **No textures.** No paper grain, no noise overlay, no film grain.

### Animation

Restrained, almost ceremonial. Two named animations exist in the codebase:

- **`glitch`** — a 6-second loop on the hero name only. Two brief frames (at 2% and 98%) where the text gets a `text-shadow` of `-2px 0 light-blue, 2px 0 diamond` and a tiny skew. Reads as a HUD flicker. Never applied to any other text.
- **`fadeInUp`** — 0.6s ease-out, 20px translateY. Used on initial-mount of major content blocks. No spring, no bounce.

Everything else is plain `transition-colors duration-300` or `transition-all`. No parallax, no scroll-triggered reveals, no Lottie. The brand does not bounce.

### Hover / press states

- **Bordered button (primary):** `border: 1px solid gold; color: gold;` → on hover, `background: rgba(gold, 0.10); box-shadow: 0 0 20px rgba(gold, 0.20)` (the "torchlight" glow).
- **Ghost button:** `color: gray-600; border: 1px solid transparent;` → on hover, `color: parchment`.
- **Card:** `border: 1px solid rgba(gold, 0.20)` → on hover, `border: 1px solid rgba(gold, 0.60); box-shadow: 0 0 24px rgba(gold, 0.12)`. Skills card adds `transform: translateY(-4px)`.
- **Nav link:** `color: gray-500` → on hover, `color: gold`.
- **Wordmark link:** `color: gold` → on hover, `color: parchment` (inversion).
- **No press states defined in the codebase.** Default browser :active behavior. If extending, prefer a brief opacity dip to 0.9 over a scale-shrink.

### Borders, dividers, radii

- **Border-radius: 0.** Sharp corners everywhere. This is non-negotiable; the medieval-stone aesthetic dies the moment you add rounding. No `rounded-md`, no pill buttons, no circular avatars.
- **1px gold borders at 15–30% alpha** are the dominant separator.
- Skills cards add a heavier **`border-top: 2px solid gold`** as a heraldic banner-strip — the only exception to the uniform 1px rule.
- Inside-card list rows separate with **`border-bottom: 1px solid rgba(white, 0.04)`** — almost invisible hairlines.
- Section-to-section transitions use a **full-width 1px gradient rule** (gold or light blue, fades to transparent at edges).

### Shadows + elevation

There are no neutral drop shadows. The only shadow tokens are colored glows used on hover:

- `0 0 20px rgba(gold, 0.20)` — button torchlight.
- `0 0 24px rgba(gold, 0.12)` — card border halo.
- `0 8px 32px rgba(gold, 0.15)` — skills card lift.

A surface that is *not* hovered casts no shadow. Depth comes from border contrast and the void background, not from blur.

### Layout

- Hero is full-viewport (`min-h-screen`), content centered.
- Section bands are `py-28 px-8` with a `max-w-5xl mx-auto` content well.
- Nav is fixed top, 64px tall, with a backdrop blur that intensifies after the first 20px of scroll (`bg-void/60` → `bg-void/95`).
- Footer is `py-10`, centered, single column.
- Skills grid is responsive: 1 → 2 → 3 columns.
- About splits 50/50: bio left, stats grid right (2×2).

### Transparency / blur

Used in exactly two places:

1. **Nav backdrop:** `backdrop-blur-sm` then `backdrop-blur-md` once scrolled. This keeps the heraldic wordmark legible while the page content scrolls behind.
2. **Section-rule gradients fading to transparent at the edges** of horizontal lines.

No frosted-glass cards, no acrylic side panels.

### Imagery vibe (when added)

If photography is ever introduced, it must read **cool, low-key, high-contrast, near-monochrome with gold highlights**. Think candlelit forge or moonlit server rack. No warm Instagram filters. No saturated daylight. No people-facing-camera-smiling stock.

---

## Iconography

The portfolio codebase ships with **no icon font and no icon library**. Two icon paradigms appear:

1. **Hand-authored decorative SVGs**, inlined in component files:
   - **Corner Rune** — 64×64 viewBox, drawn in 4 instances around the hero with rotation/scale transforms for symmetry. Gold (`#c9a227`) at 18% opacity. Composed of a small angle bracket, an inner square, a central ring, four cardinal tick marks, and four diagonal hash marks. **The signature glyph of the system** — see `assets/corner-rune.svg`.
   - **Diamond diacritic** — 16×16, a 10×10 gold square rotated 45°. Used to flank section titles. See `assets/diamond.svg`.

2. **Glyph-as-icon (mono character)** — the only inline "icons" in body content:
   - **`▸`** (U+25B8) — used in mono labels: `▸ PROFILE.LOG`, `▸ AI Tools`. The system's bullet/marker.
   - **`◆`** (U+25C6) — diamond-pearl, 0.5rem, as the list-item marker in Skills. (Also the brand's literal glyph: it's a diamond.)
   - **`→`** (U+2192) — at the end of ghost buttons: `Arsenal →`.
   - **`·`** (U+00B7) — separator in tagline meta strings: `Systems Engineer · AI Architect · Digital Tactician`.

3. **Emoji** — used **only in the GitHub README**, never in product UI. The README leans into ⚔️📜🏰⚒️⚡🎨☁️🐍 because GitHub's badge ecosystem expects it; the application itself is emoji-free.

4. **No raster icons.** No PNG icons. No `react-icons` usage despite the package being installed.

If you need an iconography library for new screens, **add Lucide via CDN** (`https://unpkg.com/lucide@latest`) using the `stroke-width: 1.5` default — it matches the thin, drafting-pencil feel of the existing SVG runes. **Flag the substitution** to Joseph; he may want hand-drawn replacements.

### Available assets

| Path                          | What                                  |
|-------------------------------|---------------------------------------|
| `assets/corner-rune.svg`      | The 64×64 corner decoration.          |
| `assets/diamond.svg`          | 16×16 rotated-square diacritic.       |
| `assets/wordmark-jhd.svg`     | "JHD" monogram, Cinzel, gold.         |
| `assets/wordmark-full.svg`    | "JOSEPH H. DUNN II", Cinzel, gold.    |
| `assets/system-online.svg`    | The `[ SYSTEM: ONLINE ]` kicker SVG.  |

---

## Substitutions flagged

- **JetBrains Mono** and **Inter** are loaded from Google Fonts CDN in the source `index.html`. The user provided only Cinzel TTFs. Acceptable for web — but if you need offline/print fidelity, ask Joseph for the JetBrains Mono and Inter TTFs and self-host them in `fonts/`.
- **Icon library** is not provided. The system defines its own runes (above). For any new icon need beyond runes/glyphs, this kit suggests Lucide at `stroke-width: 1.5` — please confirm with Joseph before shipping.

---

## Quick-start for agents

```html
<link rel="stylesheet" href="colors_and_type.css">

<section style="padding:4rem 2rem; background: var(--void);">
  <p class="eyebrow">// IDENTIFICATION</p>
  <h2>About the Operator</h2>
  <p>Joseph H. Dunn II is a battle-hardened systems engineer…</p>
</section>
```

Then read `ui_kits/portfolio/README.md` for the JSX component recipes (Nav, Hero, Stat, SkillCard, etc).
