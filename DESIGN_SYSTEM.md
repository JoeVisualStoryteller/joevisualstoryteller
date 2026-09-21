# Quiet Signal design system

Quiet Signal is a dark Mac-like instrument for explaining complex systems. It should feel calm, exact, and authored—not like an AI product template.

## Design principles

1. **Evidence before decoration.** Every visual device supports scale, reliability, architecture, or team impact.
2. **Calm surfaces.** Use depth, blur, and light sparingly. Avoid noisy gradients, floating pills, and dashboard clutter.
3. **System first, human always.** Technical work and team leadership share the same visual language.
4. **One signal color.** Cobalt blue marks action, connection, and emphasis. It does not fill every surface.
5. **Progressive density.** The hero is spacious. Proof gets denser. Technical detail stays available without dominating the story.

## Tokens

- **Color:** void `#07090d`, ink `#0d1118`, surface `#121821`, raised surface `#18212d`, cobalt `#5277f7`, signal blue `#91adff`.
- **Temperature:** the page stays graphite and blue; the navigation window uses a cooler, silver-neutral glass so it reads as a separate system surface while remaining transparent to the content beneath it.
- **Type:** native Apple/system sans for voice; native system mono only for telemetry and technical metadata.
- **Spacing:** 8-point rhythm from `0.25rem` through `9rem`.
- **Shape:** 10px controls, 16px cards, 24px feature panels, 28px system windows. Avoid default pill shapes except status indicators.
- **Depth:** one panel shadow and one window shadow. No solid offset shadows.
- **Motion:** 180ms interaction transitions; operational nodes float, collide, and stay inside the system window; all map motion stops when the user prefers reduced motion.

## Component rules

- **Navigation:** one floating window with a quiet border and a single action.
- **Hero:** one claim, one operating principle, one personal philosophy, then proof.
- **System window:** a single operational map with soft orbital structure, not a fake product dashboard.
- **Cards:** use surface contrast and a small signal line; do not give every card a unique visual treatment.
- **Tags:** compact rectangular labels with 10px corners; use them for taxonomy, not decoration.
- **Buttons:** rounded rectangles with clear hierarchy; reserve blue fill for the primary action.
- **Telemetry:** mono type, uppercase labels, and blue only where it communicates a real signal.

## Content rules

- Lead with systems engineering and operations authority.
- Use applied AI as production capability, not as the identity of the site.
- Use metrics only when they prove scope or outcome.
- Define charged phrases such as “lethal ICs” through plain language nearby.
