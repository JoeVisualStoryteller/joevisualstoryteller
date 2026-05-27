---
name: joseph-dunn-design
description: Use this skill to generate well-branded interfaces and assets for Joseph H. Dunn II — a Systems Engineer / AI Architect with a medieval × cyber-tactical brand. Use for production code, prototypes, mocks, slides, or any visual artifact carrying Joseph's name. Contains essential design guidelines, the gold/crimson/cyan palette, Cinzel + JetBrains Mono + Inter typography, self-hosted Cinzel fonts, the corner-rune signature glyph, and a JSX UI kit recreating his portfolio site.
user-invocable: true
---

Read the `README.md` file within this skill first — it contains the brand voice rules, palette reasoning, visual foundations, and iconography decisions. Then explore the other available files:

- `colors_and_type.css` — drop-in CSS variables + base classes. Link this from any HTML artifact.
- `fonts/` — self-hosted Cinzel TTFs (Regular / SemiBold / Bold / Black / Variable). JetBrains Mono + Inter come from Google Fonts.
- `assets/` — corner rune, diamond diacritic, wordmarks (JHD and full), SYSTEM:ONLINE label.
- `preview/` — small reference cards for each token, component, and motif.
- `ui_kits/portfolio/` — a working React (Babel-in-browser) recreation of josephdunn.github.io. Read this if you need any layout pattern: Nav, Hero, SectionHeader, About, Skills, Footer, plus the Rune and Diamond primitives.

If creating visual artifacts (slides, mocks, throwaway prototypes), **copy** assets out of this skill folder into your output, link `colors_and_type.css` (or inline its variables), and produce static HTML the user can open directly. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build — a deck, a screen, a landing page, a resume layout — ask 3–5 specific questions (audience, voice intensity, dark/light, length), then act as an expert designer and output HTML artifacts or production code as appropriate.

### Non-negotiables when designing for Joseph

1. **Border radius is always 0.** Sharp corners. No rounded buttons, no pill chips, no circular avatars.
2. **Four accent colors in strict order of frequency**: gold `#c9a227` (most used) → light blue `#7dd3fc` (`--cyan`) → diamond pearl `#e0e7ef` (`--crimson`) → maroon `#5d2e3e` (`--maroon`, rarest — ceremonial only, never more than one element per surface). Never lavender/purple gradients. Gradients exist only as 1px hairline rules.
3. **Three typefaces, distinct roles**: Cinzel (display, ALL-CAPS, wide-tracked) · JetBrains Mono (eyebrows, button labels, system tags, ALL-CAPS) · Inter (body, sentence case).
4. **Voice is theatrical third-person.** "Joseph H. Dunn II is …", never "I am". Section eyebrows read like log lines: `// IDENTIFICATION`, `▸ PROFILE.LOG`, `[ SYSTEM: ONLINE ]`.
5. **Decoration is rune-based**, not illustrative. Use the corner-rune SVG, the rotated-square diamond, and mono glyphs (▸ ◆ → ·). No emoji in product UI.
6. **Hover = gold glow.** Never plain drop shadows. Glow tokens are in `colors_and_type.css`.
7. **End every long page with `[END OF TRANSMISSION]`** in the footer.
