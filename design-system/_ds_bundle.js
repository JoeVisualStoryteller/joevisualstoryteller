/* @ds-bundle: {"format":3,"namespace":"JosephDunnDesignSystem_988385","components":[{"name":"App","sourcePath":"src/App.tsx"},{"name":"About","sourcePath":"src/components/About.tsx"},{"name":"Footer","sourcePath":"src/components/Footer.tsx"},{"name":"Hero","sourcePath":"src/components/Hero.tsx"},{"name":"Nav","sourcePath":"src/components/Nav.tsx"},{"name":"SectionHeader","sourcePath":"src/components/SectionHeader.tsx"},{"name":"Skills","sourcePath":"src/components/Skills.tsx"}],"sourceHashes":{"repo-changes/tailwind.config.js":"7f1b0289efad","src/App.tsx":"db0023695bea","src/components/About.tsx":"b3d620b16be2","src/components/Footer.tsx":"b7d37e1c1255","src/components/Hero.tsx":"2bd404a354ad","src/components/Nav.tsx":"36fc5723c506","src/components/SectionHeader.tsx":"2119cf5bf281","src/components/Skills.tsx":"a2e28104ee22","src/data/content.ts":"2f5f15b35bee","src/main.tsx":"27b0ddfab3c1","ui_kits/portfolio/Contact.jsx":"0a56eacf29a2","ui_kits/portfolio/Deployments.jsx":"3b04890455bf","ui_kits/portfolio/KitAbout.jsx":"e9b3eb88ee9f","ui_kits/portfolio/KitFooter.jsx":"a77242e630b1","ui_kits/portfolio/KitHero.jsx":"66409b1626ab","ui_kits/portfolio/KitNav.jsx":"071ccf7acd75","ui_kits/portfolio/KitSectionHeader.jsx":"a3f689e14ba6","ui_kits/portfolio/KitSkills.jsx":"1dac5d239eb8","ui_kits/portfolio/Runes.jsx":"9ec0abc73554","ui_kits/portfolio/Summon.jsx":"d834c5ac8463","ui_kits/portfolio/content.js":"c17746552f1a"},"inlinedExternals":[],"unexposedExports":[{"name":"aboutContent","sourcePath":"src/data/content.ts"},{"name":"heroContent","sourcePath":"src/data/content.ts"},{"name":"skillsData","sourcePath":"src/data/content.ts"}]} */

(() => {

const __ds_ns = (window.JosephDunnDesignSystem_988385 = window.JosephDunnDesignSystem_988385 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// repo-changes/tailwind.config.js
try { (() => {
/** @type {import('tailwindcss').Config} */
try {
  void {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          void: '#08080d',
          surface: '#111118',
          raised: '#1a1a24',
          gold: '#c9a227',
          // Token names preserved for source-code compatibility — values updated.
          crimson: '#e0e7ef',
          // was #8b1a1a — now "diamond" pearl-white (Taurus birthstone)
          cyan: '#7dd3fc',
          // was #06b6d4 — now light blue
          maroon: '#5d2e3e',
          // NEW — Harrow oxblood. Ceremonial. One per surface only.
          parchment: '#e8e0cc'
        },
        fontFamily: {
          cinzel: ['Cinzel', 'serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
          sans: ['Inter', 'sans-serif']
        },
        keyframes: {
          glitch: {
            '0%, 4%, 100%': {
              textShadow: 'none',
              transform: 'none'
            },
            // updated to match new accent values
            '2%': {
              textShadow: '-2px 0 #7dd3fc, 2px 0 #e0e7ef',
              transform: 'skewX(-1deg)'
            },
            '96%, 99%': {
              textShadow: 'none',
              transform: 'none'
            },
            '98%': {
              textShadow: '2px 0 #c9a227, -1px 0 #7dd3fc',
              transform: 'skewX(0.5deg)'
            }
          },
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          }
        },
        animation: {
          glitch: 'glitch 6s infinite',
          fadeInUp: 'fadeInUp 0.6s ease forwards'
        },
        boxShadow: {
          'glow-gold-soft': '0 0 20px rgba(201,162,39,0.20)',
          'glow-gold-medium': '0 0 24px rgba(201,162,39,0.12)',
          'glow-gold-card': '0 8px 32px rgba(201,162,39,0.15)',
          'glow-maroon-soft': '0 0 20px rgba(93,46,62,0.35)'
        }
      }
    },
    plugins: []
  };
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "repo-changes/tailwind.config.js", error: String((e && e.message) || e) }); }

// src/components/Footer.tsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-void border-t border-gold/20 py-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-cinzel text-base text-gold tracking-widest mb-2"
  }, "JOSEPH H. DUNN II"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-widest text-gray-700 uppercase"
  }, "\xA9 ", new Date().getFullYear(), " \xB7 All Rights Reserved \xB7 [END OF TRANSMISSION]"));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Footer.tsx", error: String((e && e.message) || e) }); }

// src/components/Nav.tsx
try { (() => {
const {
  useEffect,
  useState
} = React;
const links = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Skills',
  href: '#skills'
}];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: `fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 border-b border-gold/30 transition-colors duration-300 ${scrolled ? 'bg-void/95 backdrop-blur-md' : 'bg-void/60 backdrop-blur-sm'}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "font-cinzel text-xl font-bold text-gold tracking-widest hover:text-parchment transition-colors"
  }, "JHD"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-10"
  }, links.map(({
    label,
    href
  }) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    className: "font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-gold transition-colors"
  }, label))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Nav.tsx", error: String((e && e.message) || e) }); }

// src/components/SectionHeader.tsx
try { (() => {
function SectionHeader({
  label,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-14"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-[0.25em] text-cyan uppercase mb-3"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5 justify-center mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 h-px bg-gradient-to-l from-gold to-transparent max-w-[200px]"
  }), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "10",
    height: "10",
    fill: "#c9a227",
    transform: "rotate(45 8 8)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 h-px bg-gradient-to-r from-gold to-transparent max-w-[200px]"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "font-cinzel text-3xl md:text-4xl font-bold text-parchment tracking-widest uppercase"
  }, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SectionHeader.tsx", error: String((e && e.message) || e) }); }

// src/data/content.ts
try { (() => {
const heroContent = {
  systemLabel: '[ SYSTEM: ONLINE ]',
  name: 'JOSEPH H. DUNN II',
  subtitle: 'Systems Engineer · AI Architect · Digital Tactician',
  tagline: '10+ years forging resilient systems across military and enterprise domains. Where ancient discipline meets modern technology.'
};
const aboutContent = {
  sectionLabel: '// IDENTIFICATION',
  sectionTitle: 'About the Operator',
  fileLabel: '▸ PROFILE.LOG',
  bio: ['Joseph H. Dunn II is a battle-hardened systems engineer with over a decade of service spanning military intelligence and enterprise IT. He has designed, deployed, and defended critical infrastructure across government and commercial domains.', 'Specializing in AI-augmented automation and cloud architecture, he bridges the gap between strategic vision and operational execution — transforming legacy environments into resilient, modern systems.', 'A proven force multiplier: led programs that achieved 8× productivity gains through AI adoption, deploying tools that still serve enterprise teams today.'],
  stats: [{
    value: '10+',
    label: 'Years Experience'
  }, {
    value: '100+',
    label: 'Systems Managed'
  }, {
    value: '4',
    label: 'Service Branches'
  }, {
    value: '3',
    label: 'Cloud Platforms'
  }]
};
const skillsData = [{
  category: 'AI Tools',
  items: ['ChatGPT', 'GitHub Copilot', 'Claude AI', 'Azure OpenAI']
}, {
  category: 'Cloud Platforms',
  items: ['AWS', 'Microsoft Azure', 'Google Cloud']
}, {
  category: 'Automation',
  items: ['PowerShell', 'Python', 'Bash', 'Ansible']
}, {
  category: 'Security',
  items: ['Zero Trust', 'SIEM', 'Vulnerability Mgmt', 'NIST/RMF']
}, {
  category: 'Infrastructure',
  items: ['Active Directory', 'VMware', 'Hyper-V', 'Cisco Networking']
}, {
  category: 'ITSM / CRM',
  items: ['ServiceNow', 'Salesforce', 'Jira', 'Remedy']
}];
Object.assign(__ds_scope, { heroContent, aboutContent, skillsData });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/data/content.ts", error: String((e && e.message) || e) }); }

// src/components/About.tsx
try { (() => {
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "relative py-28 px-8 bg-void"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    label: __ds_scope.aboutContent.sectionLabel,
    title: __ds_scope.aboutContent.sectionTitle
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-[0.2em] text-crimson uppercase mb-4"
  }, __ds_scope.aboutContent.fileLabel), __ds_scope.aboutContent.bio.map((paragraph, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "font-sans text-base text-parchment/70 leading-relaxed mb-5 last:mb-0"
  }, paragraph))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, __ds_scope.aboutContent.stats.map(stat => /*#__PURE__*/React.createElement("div", {
    key: stat.label,
    className: "bg-surface border border-gold/20 p-6 text-center hover:border-gold/60 hover:shadow-[0_0_24px_rgba(201,162,39,0.12)] transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-cinzel text-4xl font-bold text-gold leading-none mb-2"
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs tracking-widest text-gray-500 uppercase"
  }, stat.label)))))));
}
Object.assign(__ds_scope, { About });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/About.tsx", error: String((e && e.message) || e) }); }

// src/components/Hero.tsx
try { (() => {
function CornerRune({
  pos
}) {
  const isRight = pos.includes('r');
  const isBottom = pos.includes('b');
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute opacity-[0.18] w-16 h-16 pointer-events-none",
    style: {
      [isBottom ? 'bottom' : 'top']: '1.5rem',
      [isRight ? 'right' : 'left']: '1.5rem',
      transform: isRight && isBottom ? 'rotate(180deg)' : isRight ? 'scaleX(-1)' : isBottom ? 'scaleY(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z",
    fill: "#c9a227"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10 L20 10 L20 14 L14 14 L14 20 L10 20 Z",
    fill: "#c9a227"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "4",
    stroke: "#c9a227",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 24 L32 16 M32 40 L32 48 M24 32 L16 32 M40 32 L48 32",
    stroke: "#c9a227",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 28 L22 22 M36 36 L42 42 M36 28 L42 22 M28 36 L22 42",
    stroke: "#c9a227",
    strokeWidth: "0.5"
  })));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      backgroundImage: ['linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px)', 'linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)', 'linear-gradient(rgba(6,182,212,0.025) 1px, transparent 1px)', 'linear-gradient(90deg, rgba(6,182,212,0.025) 1px, transparent 1px)'].join(', '),
      backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none",
    style: {
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      background: 'radial-gradient(ellipse at center, transparent 35%, #08080d 100%)'
    }
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "tl"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "tr"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "bl"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "br"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 text-center px-8 max-w-3xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-[0.3em] text-cyan uppercase mb-6"
  }, __ds_scope.heroContent.systemLabel), /*#__PURE__*/React.createElement("h1", {
    className: "font-cinzel font-bold text-5xl md:text-7xl text-parchment tracking-wider uppercase mb-4 animate-glitch leading-tight"
  }, __ds_scope.heroContent.name), /*#__PURE__*/React.createElement("div", {
    className: "w-40 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-gold to-transparent"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs md:text-sm tracking-[0.15em] text-gray-500 uppercase mb-8"
  }, __ds_scope.heroContent.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "font-sans text-base text-gray-600 max-w-md mx-auto mb-12 leading-relaxed"
  }, __ds_scope.heroContent.tagline), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-5 justify-center flex-wrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "font-mono text-xs tracking-widest uppercase text-gold border border-gold px-8 py-3 hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(201,162,39,0.2)] transition-all"
  }, "View Profile"), /*#__PURE__*/React.createElement("a", {
    href: "#skills",
    className: "font-mono text-xs tracking-widest uppercase text-gray-600 border border-transparent px-8 py-3 hover:text-parchment transition-colors"
  }, "Arsenal \u2192"))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Hero.tsx", error: String((e && e.message) || e) }); }

// src/components/Skills.tsx
try { (() => {
function Skills() {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "relative py-28 px-8 bg-[#0a0a10]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    label: "// LOADOUT",
    title: "Arsenal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, __ds_scope.skillsData.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.category,
    className: "bg-surface border border-gold/15 border-t-2 border-t-gold p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,162,39,0.15)] transition-all"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-[0.2em] text-cyan uppercase mb-4"
  }, "\u25B8 ", group.category), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    className: "font-sans text-sm text-parchment/80 flex items-center gap-2 pb-2 border-b border-white/[0.04] last:border-0 last:pb-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-crimson text-[0.5rem] shrink-0"
  }, "\u25C6"), item))))))));
}
Object.assign(__ds_scope, { Skills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Skills.tsx", error: String((e && e.message) || e) }); }

// src/App.tsx
try { (() => {
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(__ds_scope.Hero, null), /*#__PURE__*/React.createElement(__ds_scope.About, null), /*#__PURE__*/React.createElement(__ds_scope.Skills, null)), /*#__PURE__*/React.createElement(__ds_scope.Footer, null));
}
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/App.tsx", error: String((e && e.message) || e) }); }

// src/main.tsx
try { (() => {
// @ds-bundle-skip — Vite app entry; not a design system component.
// react-dom/client loaded dynamically so the DS in-browser bundler doesn't
// try to resolve it as a static dependency.
const {
  StrictMode
} = React;
const rootEl = document.getElementById('root');
import('react-dom/client').then(({
  createRoot
}) => {
  createRoot(rootEl).render(/*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(__ds_scope.App, null)));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/main.tsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact.jsx — // COMMS section. Replaces bare Summon. Split panel + channel rows + ceremonial CTA.
// Update href values for GitHub, LinkedIn, and resume before shipping.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function Contact({
  email = 'jdunn0423@gmail.com'
}) {
  const {
    useState
  } = React;
  const [sent, setSent] = useState(false);
  const channels = [{
    label: 'EMAIL',
    value: email,
    href: `mailto:${email}`
  }, {
    label: 'GITHUB',
    value: 'github.com/[your-handle]',
    href: '#'
  }, {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/[handle]',
    href: '#'
  }, {
    label: 'RESUME',
    value: 'Download Dossier (PDF)',
    href: '#',
    download: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__rule-top section__rule-top--cyan"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "// COMMS",
    title: "Make Contact"
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "about__file-label"
  }, "\u25B8 AVAILABILITY.LOG"), /*#__PURE__*/React.createElement("p", {
    className: "about__bio"
  }, "If you need an operator who can architect at altitude and execute in the mud \u2014 this is the right channel. Systems built right speak for themselves; the record is above."), /*#__PURE__*/React.createElement("p", {
    className: "about__bio"
  }, "Open to contract engagements, full-time roles, and advisory work in AI systems, cloud infrastructure, and enterprise automation.")), /*#__PURE__*/React.createElement("div", {
    className: "contact__channels"
  }, /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__class",
    style: {
      marginBottom: '1rem'
    }
  }, "\u25B8 OPEN HAILING FREQUENCIES"), channels.map(ch => /*#__PURE__*/React.createElement("a", {
    key: ch.label,
    href: ch.href,
    className: "channel-row",
    target: ch.href.startsWith('http') ? '_blank' : undefined,
    rel: ch.href.startsWith('http') ? 'noopener noreferrer' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "channel-row__label"
  }, ch.label), /*#__PURE__*/React.createElement("span", {
    className: "channel-row__value"
  }, ch.value), /*#__PURE__*/React.createElement("span", {
    className: "channel-row__arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "contact__cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summon__eyebrow"
  }, "[ AWAITING TRANSMISSION ]"), /*#__PURE__*/React.createElement("h2", {
    className: "summon__title"
  }, "Ready to Deploy"), /*#__PURE__*/React.createElement("p", {
    className: "summon__sub"
  }, "One operator. High-stakes environments only."), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    className: "btn btn--ceremony"
  }, "\u25C6 Initiate Contact"), /*#__PURE__*/React.createElement("p", {
    className: "summon__email"
  }, email))));
}
window.JHDKit.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Deployments.jsx
try { (() => {
// Deployments.jsx — // FIELD RECORDS section. Featured hero card + compact case study grid.
// Replace placeholder [BRACKET] values with real project data before shipping.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function Deployments({
  data
}) {
  const featured = data.find(d => d.featured);
  const rest = data.filter(d => !d.featured);
  return /*#__PURE__*/React.createElement("section", {
    id: "deployments",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__rule-top section__rule-top--gold"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "// FIELD RECORDS",
    title: "Deployments"
  }), featured && /*#__PURE__*/React.createElement("div", {
    className: "deploy-featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deploy-featured__left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__class"
  }, "\u25B8 FEATURED \xB7 ", featured.classification), /*#__PURE__*/React.createElement("h3", {
    className: "deploy-card__name"
  }, featured.codename), /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__desc"
  }, featured.desc), /*#__PURE__*/React.createElement("div", {
    className: "deploy-card__stack"
  }, featured.stack.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "deploy-stack-tag"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "deploy-featured__right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__class"
  }, "\u25B8 OUTCOME"), /*#__PURE__*/React.createElement("div", {
    className: "deploy-card__metric"
  }, featured.outcome), /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__metric-label"
  }, featured.outcomeLabel), /*#__PURE__*/React.createElement("div", {
    className: "deploy-featured__divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__class"
  }, "\u25B8 PROBLEM STATEMENT"), /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__desc"
  }, featured.problem))), /*#__PURE__*/React.createElement("div", {
    className: "deploy-grid"
  }, rest.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.codename,
    className: "deploy-card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__class"
  }, "\u25B8 ", d.classification), /*#__PURE__*/React.createElement("h3", {
    className: "deploy-card__name"
  }, d.codename), /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__desc"
  }, d.desc), /*#__PURE__*/React.createElement("div", {
    className: "deploy-card__metric"
  }, d.outcome), /*#__PURE__*/React.createElement("p", {
    className: "deploy-card__metric-label"
  }, d.outcomeLabel), /*#__PURE__*/React.createElement("div", {
    className: "deploy-card__stack"
  }, d.stack.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "deploy-stack-tag"
  }, t))))))));
}
window.JHDKit.Deployments = Deployments;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Deployments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitAbout.jsx
try { (() => {
// About.jsx — IDENTIFICATION section. Bio left, 2x2 stat grid right.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function KitAbout({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__rule-top section__rule-top--gold"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    label: data.sectionLabel,
    title: data.sectionTitle
  }), /*#__PURE__*/React.createElement("div", {
    className: "about__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "about__file-label"
  }, data.fileLabel), data.bio.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "about__bio"
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "about__stats"
  }, data.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card__v"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "stat-card__l"
  }, s.label)))))));
}
window.JHDKit.About = KitAbout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitFooter.jsx
try { (() => {
// Footer.jsx — wordmark + transmission ending.
function KitFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__mark"
  }, "JOSEPH H. DUNN II"), /*#__PURE__*/React.createElement("p", {
    className: "footer__copy"
  }, "\xA9 ", new Date().getFullYear(), " \xB7 All Rights Reserved \xB7 [END OF TRANSMISSION]"));
}
window.JHDKit = window.JHDKit || {};
window.JHDKit.Footer = KitFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitHero.jsx
try { (() => {
// Hero.jsx — full-viewport hero with 4 corner runes, circuit grid, scanlines, vignette.
const CornerRune = (window.JHDKit = window.JHDKit || {}).CornerRune;
function KitHero({
  data,
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scan"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__vignette"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "tl"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "tr"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "bl"
  }), /*#__PURE__*/React.createElement(CornerRune, {
    pos: "br"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero__system-label"
  }, data.systemLabel), /*#__PURE__*/React.createElement("h1", {
    className: "hero__name"
  }, data.name), /*#__PURE__*/React.createElement("div", {
    className: "hero__name-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "hero__subtitle"
  }, data.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "hero__tagline"
  }, data.tagline), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "btn btn--primary",
    onClick: e => {
      e.preventDefault();
      onCta?.('about');
    }
  }, "View Profile"), /*#__PURE__*/React.createElement("a", {
    href: "#skills",
    className: "btn btn--ghost",
    onClick: e => {
      e.preventDefault();
      onCta?.('skills');
    }
  }, "Arsenal ", /*#__PURE__*/React.createElement("span", null, "\u2192")))));
}
window.JHDKit.Hero = KitHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitNav.jsx
try { (() => {
// Nav.jsx — fixed top, 64px tall, backdrop-blur intensifies on scroll.
function KitNav({
  activeId = 'home',
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'skills',
    label: 'Arsenal'
  }, {
    id: 'deployments',
    label: 'Deployments'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "nav__mark",
    onClick: e => {
      e.preventDefault();
      onNav?.('home');
    }
  }, "JHD"), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    className: `nav__link ${activeId === l.id ? 'active' : ''}`,
    onClick: e => {
      e.preventDefault();
      onNav?.(l.id);
    }
  }, l.label))));
}
window.JHDKit = window.JHDKit || {};
window.JHDKit.Nav = KitNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitSectionHeader.jsx
try { (() => {
// SectionHeader.jsx — mono eyebrow, diamond-flanked rule, display title.
const Diamond = (window.JHDKit = window.JHDKit || {}).Diamond;
function KitSectionHeader({
  label,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "section-header__eyebrow"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "section-header__diamond-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header__rule section-header__rule--l"
  }), /*#__PURE__*/React.createElement(Diamond, null), /*#__PURE__*/React.createElement("div", {
    className: "section-header__rule section-header__rule--r"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "section-header__title"
  }, title));
}
window.JHDKit.SectionHeader = KitSectionHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitSectionHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitSkills.jsx
try { (() => {
// Skills.jsx — LOADOUT section. Cards with gold banner-top.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function KitSkills({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__rule-top section__rule-top--cyan"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "// LOADOUT",
    title: "Arsenal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "skills__grid"
  }, data.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.category,
    className: "skill-card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "skill-card__h"
  }, "\u25B8 ", group.category), /*#__PURE__*/React.createElement("ul", {
    className: "skill-card__list"
  }, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    className: "skill-card__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "skill-card__bullet"
  }, "\u25C6"), item))))))));
}
window.JHDKit.Skills = KitSkills;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitSkills.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Runes.jsx
try { (() => {
// CornerRune.jsx — the signature decoration; 4 corners of any full-bleed surface.
function CornerRune({
  pos = 'tl'
}) {
  const cls = `hero__rune ${pos}`;
  return /*#__PURE__*/React.createElement("svg", {
    className: cls,
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z",
    fill: "#c9a227"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10 L20 10 L20 14 L14 14 L14 20 L10 20 Z",
    fill: "#c9a227"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "4",
    stroke: "#c9a227",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 24 L32 16 M32 40 L32 48 M24 32 L16 32 M40 32 L48 32",
    stroke: "#c9a227",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 28 L22 22 M36 36 L42 42 M36 28 L42 22 M28 36 L22 42",
    stroke: "#c9a227",
    strokeWidth: "0.5"
  }));
}

// Diamond.jsx — the 45°-rotated gold square diacritic.
function Diamond({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "10",
    height: "10",
    fill: "#c9a227",
    transform: "rotate(45 8 8)"
  }));
}
window.JHDKit = window.JHDKit || {};
window.JHDKit.CornerRune = CornerRune;
window.JHDKit.Diamond = Diamond;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Runes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Summon.jsx
try { (() => {
// Summon.jsx — the page's single ceremonial element. Maroon CTA, exactly once.
function Summon({
  email = 'jdunn0423@gmail.com'
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "summon",
    className: "summon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__rule-top rule-maroon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "summon__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "summon__eyebrow"
  }, "// COMMS CHANNEL"), /*#__PURE__*/React.createElement("h2", {
    className: "summon__title"
  }, "Summon the Architect"), /*#__PURE__*/React.createElement("p", {
    className: "summon__sub"
  }, "For consults, contracts, and quests of consequence."), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    className: "btn btn--ceremony"
  }, "OPEN HAILING FREQUENCY"), /*#__PURE__*/React.createElement("p", {
    className: "summon__email"
  }, email)));
}
window.JHDKit = window.JHDKit || {};
window.JHDKit.Summon = Summon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Summon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/content.js
try { (() => {
// content.js — Joseph's portfolio copy. Theatrical third-person; tactical kickers.
// Deployments are placeholder case studies — replace with real project data before shipping.
window.JHD_CONTENT = {
  hero: {
    systemLabel: '[ SYSTEM: ONLINE ]',
    name: 'JOSEPH H. DUNN II',
    subtitle: 'Systems Engineer · AI Architect · Digital Tactician',
    // Tagline v2 — concrete proof over generic metaphor
    tagline: 'A decade across military intelligence and enterprise cloud — forging systems under real operational pressure. 8× productivity gains. Still running.'
  },
  about: {
    sectionLabel: '// IDENTIFICATION',
    sectionTitle: 'About the Operator',
    fileLabel: '▸ PROFILE.LOG',
    bio: ['Joseph H. Dunn II is a battle-hardened systems engineer with over a decade of service spanning military intelligence and enterprise IT. He has designed, deployed, and defended critical infrastructure across government and commercial domains.', 'Specializing in AI-augmented automation and cloud architecture, he bridges the gap between strategic vision and operational execution — transforming legacy environments into resilient, modern systems.', 'A proven force multiplier: led programs that achieved 8× productivity gains through AI adoption, deploying tools that still serve enterprise teams today.'],
    stats: [{
      value: '10+',
      label: 'Years Experience'
    }, {
      value: '100+',
      label: 'Systems Managed'
    }, {
      value: '4',
      label: 'Service Branches'
    }, {
      value: '3',
      label: 'Cloud Platforms'
    }]
  },
  skills: [{
    category: 'AI Tools',
    items: ['ChatGPT', 'GitHub Copilot', 'Claude AI', 'Azure OpenAI']
  }, {
    category: 'Cloud Platforms',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud']
  }, {
    category: 'Automation',
    items: ['PowerShell', 'Python', 'Bash', 'Ansible']
  }, {
    category: 'Security',
    items: ['Zero Trust', 'SIEM', 'Vulnerability Mgmt', 'NIST/RMF']
  }, {
    category: 'Infrastructure',
    items: ['Active Directory', 'VMware', 'Hyper-V', 'Cisco Networking']
  }, {
    category: 'ITSM / CRM',
    items: ['ServiceNow', 'Salesforce', 'Jira', 'Remedy']
  }],
  // ── DEPLOYMENTS ─────────────────────────────────────────────────────────────
  // Replace [BRACKET] fields with real project details.
  // Set featured: true on the one you want as the hero card.
  deployments: [{
    featured: true,
    codename: 'OPERATION VELOCITY',
    classification: 'AI AUGMENTATION · ENTERPRISE',
    desc: 'Designed and deployed a GPT-powered automation suite that eliminated manual bottlenecks across three business units. Integrated into daily workflows — tools remain in active service.',
    problem: 'Manual processes consumed 80% of team capacity. Repetitive data processing, report generation, and ticket routing left no bandwidth for strategic work.',
    outcome: '8×',
    outcomeLabel: 'Productivity Gain',
    stack: ['Azure OpenAI', 'Python', 'PowerShell', 'SharePoint']
  }, {
    codename: 'PROJECT IRONGATE',
    classification: 'SECURITY · ZERO TRUST',
    desc: 'Architected and executed a full Zero Trust migration. Closed all critical CVEs, enforced least-privilege access across the estate, and passed the compliance audit on schedule.',
    problem: 'Legacy flat-network with 14 open compliance findings. Full audit 90 days out.',
    outcome: '0',
    outcomeLabel: 'Critical Findings at Audit',
    stack: ['Azure AD', 'Defender XDR', 'NIST RMF', 'SIEM']
  }, {
    codename: 'ATLAS MIGRATION',
    classification: 'CLOUD · INFRASTRUCTURE',
    desc: 'Phased lift-and-shift of an aging on-prem estate to AWS and Azure. Decommissioned legacy hardware, implemented infrastructure-as-code, and stood up DR for the first time.',
    problem: '100+ physical servers on two EOL operating systems. No disaster recovery.',
    outcome: '40%',
    outcomeLabel: 'Infrastructure Cost Reduction',
    stack: ['AWS', 'Azure', 'Terraform', 'Ansible']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/content.js", error: String((e && e.message) || e) }); }

__ds_ns.App = __ds_scope.App;

__ds_ns.About = __ds_scope.About;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Skills = __ds_scope.Skills;

})();
