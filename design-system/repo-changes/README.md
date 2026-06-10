# Repo Changes — `JoeVisualStoryteller/joevisualstoryteller`

Apply these changes to your live portfolio repo to bring it in line with the updated design system.

> **TL;DR** — Update one file (`tailwind.config.js`) and you're done. The Tailwind class names (`text-crimson`, `text-cyan`, etc.) stay the same; only the color *values* change. Optionally add a new `Summon.tsx` component below for the ceremonial maroon CTA.

---

## Required: `tailwind.config.js`

Replace your existing `tailwind.config.js` with the file at `./tailwind.config.js` in this folder.

### What changed

| Token        | Before      | After       | Reason                                  |
|--------------|-------------|-------------|-----------------------------------------|
| `crimson`    | `#8b1a1a`   | `#e0e7ef`   | "Diamond" pearl-white (Taurus birthstone). All existing `text-crimson` / `border-crimson` usages keep working — they just render pearl-white. |
| `cyan`       | `#06b6d4`   | `#7dd3fc`   | Lighter blue.                           |
| `maroon`     | *(new)*     | `#5d2e3e`   | Harrow oxblood. The 4th, rarest accent. |
| `keyframes.glitch` | hex literals updated to match | — | text-shadow values updated. |

### Files in your repo that reference these tokens (no edits needed — class names unchanged)

```
src/components/Hero.tsx           — text-cyan, gold, parchment, glitch animation
src/components/About.tsx          — text-crimson on the "▸ PROFILE.LOG" eyebrow
src/components/Skills.tsx         — text-cyan, text-crimson bullet
src/components/SectionHeader.tsx  — text-cyan eyebrow
src/components/Nav.tsx            — text-gold, hover:text-gold
src/components/Footer.tsx         — text-gold
src/index.css                     — scrollbar (#08080d, gold @ 40%)
```

After updating `tailwind.config.js`, run `npm run dev` or `npm run build` and Tailwind will regenerate utility classes with the new values automatically. Zero TSX edits required.

---

## Optional: Add the ceremonial Summon section

This is the one place the new `maroon` token is meant to appear — a single CTA above the footer.

### 1. Create `src/components/Summon.tsx`

```tsx
export default function Summon() {
  const email = 'jdunn0423@gmail.com';
  return (
    <section id="summon" className="relative py-24 px-8 bg-void text-center">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/60 to-transparent" />
      <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
        <p className="font-mono text-xs tracking-[0.25em] text-maroon uppercase">// COMMS CHANNEL</p>
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-parchment tracking-widest uppercase">
          Summon the Architect
        </h2>
        <p className="font-sans text-base text-gray-500 max-w-md leading-relaxed">
          For consults, contracts, and quests of consequence.
        </p>
        <a
          href={`mailto:${email}`}
          className="font-mono text-xs tracking-widest uppercase text-parchment bg-maroon border border-maroon px-8 py-3 hover:shadow-[0_0_20px_rgba(93,46,62,0.4)] hover:bg-[#6b3848] transition-all"
        >
          OPEN HAILING FREQUENCY
        </a>
        <p className="font-mono text-xs tracking-[0.15em] text-gray-500 uppercase mt-2">{email}</p>
      </div>
    </section>
  );
}
```

### 2. Mount it in `src/App.tsx`

```diff
 import Nav from './components/Nav'
 import Hero from './components/Hero'
 import About from './components/About'
 import Skills from './components/Skills'
+import Summon from './components/Summon'
 import Footer from './components/Footer'

 export default function App() {
   return (
     <>
       <Nav />
       <main>
         <Hero />
         <About />
         <Skills />
+        <Summon />
       </main>
       <Footer />
     </>
   )
 }
```

### 3. Optionally add it to the nav

```diff
 // src/components/Nav.tsx
 const links = [
   { label: 'Home', href: '#home' },
   { label: 'About', href: '#about' },
   { label: 'Skills', href: '#skills' },
+  { label: 'Summon', href: '#summon' },
 ]
```

---

## Suggested commit

```
git checkout -b design-system-refresh
# replace tailwind.config.js with the new one
# create src/components/Summon.tsx
# edit src/App.tsx to mount Summon
git add tailwind.config.js src/components/Summon.tsx src/App.tsx
git commit -m "refresh palette: diamond pearl + light blue + Harrow maroon ceremony"
git push origin design-system-refresh
```

---

## Verification checklist

- [ ] `npm run dev` — page loads, no console errors
- [ ] Hero glitch animation flashes light blue + pearl-white at 2% / 98% (not cyan + red)
- [ ] `▸ PROFILE.LOG` reads pearl-white, not red
- [ ] Skill-card `◆` bullets are pearl-white
- [ ] If Summon added: maroon eyebrow visible, maroon top-rule, filled-maroon CTA hover-glows
- [ ] No other element on the page uses maroon — it's a single point of emphasis
