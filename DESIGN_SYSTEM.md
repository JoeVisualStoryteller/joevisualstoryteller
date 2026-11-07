# Crystal Chronicle design system

Crystal Chronicle is a fantasy-inspired, crystal-lit frame for explaining complex systems. It should feel crafted, exact, and authored—like a well-made game menu around serious engineering work, not like an AI product template.

## Design principles

1. **Evidence before decoration.** Every visual device supports scale, reliability, architecture, or team impact. Ornament frames the proof; it never replaces it.
2. **Framed surfaces.** Panels read as inset crystal frames: a dark navy fill, a thin inner rule, and a soft outer glow. Use glow sparingly.
3. **System first, human always.** Technical work and team leadership share the same visual language.
4. **One signal color.** Crystal blue marks action, connection, and emphasis. It does not fill every surface.
5. **Progressive density.** The hero is spacious. Proof gets denser. Technical detail stays available without dominating the story.

## Tokens

`src/design-system/tokens.css` is the source of truth; the values below summarize it.

- **Color:** void `#07101f`, ink `#0b1830`, surface `#101f3a`, raised surface `#102342`, text `#f0f4f3`, muted `#c2d1dd`, faint `#a6bdcb`, crystal blue `#a9e5f3`, blue-strong `#70c4de`, leather `#88654e` (a warm accent that ties the site to the README cover).
- **Temperature:** deep navy page with cool cyan light. Hard-coded tints use the crystal blue (`169, 229, 243`) and blue-strong (`112, 196, 222`) channels.
- **Type:** Georgia serif for display headings and metrics; native system sans for body copy; native system mono only for telemetry and technical metadata.
- **Spacing:** 8-point rhythm from `0.25rem` through `9rem`.
- **Shape:** 2px corners on controls, cards, panels, and system windows. Pills and circles only for status indicators.
- **Depth:** one panel shadow, one window shadow, and one focus ring, all tinted with crystal colors. Inset double rules give frames their edge. No solid offset shadows.
- **Motion:** 180ms interaction transitions; operational nodes float, collide, and stay inside the system window; all map motion stops when the user prefers reduced motion.

## Component rules

- **Navigation:** one framed bar with a gradient fill, uppercase spaced links, and a single action.
- **Hero:** the Crystal Chronicle backdrop, one claim, one operating principle, one personal philosophy, then proof.
- **System window:** a single operational map in a crystal frame with a diamond core, not a fake product dashboard.
- **Cards:** framed gradient surfaces with a thin crystal line under the header; do not give every card a unique visual treatment.
- **Eyebrows:** spaced uppercase labels led by a `✦` mark.
- **Tags:** compact rectangular labels with near-square corners; use them for taxonomy, not decoration.
- **Buttons:** framed rectangles with clear hierarchy; reserve the blue gradient fill for the primary action.
- **Telemetry:** mono type, uppercase labels, and blue only where it communicates a real signal.

## Content rules

- Lead with systems engineering and operations authority.
- Use applied AI as production capability, not as the identity of the site.
- Use metrics only when they prove scope or outcome.
- Define charged phrases such as “lethal ICs” through plain language nearby.
