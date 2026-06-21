/* @ds-bundle: {"format":3,"namespace":"JosephDunnDesignSystem_988385","components":[{"name":"App","sourcePath":"src/App.tsx"},{"name":"About","sourcePath":"src/components/About.tsx"},{"name":"ChapterProgress","sourcePath":"src/components/ChapterProgress.tsx"},{"name":"Chronicle","sourcePath":"src/components/Chronicle.tsx"},{"name":"Footer","sourcePath":"src/components/Footer.tsx"},{"name":"Hero","sourcePath":"src/components/Hero.tsx"},{"name":"Nav","sourcePath":"src/components/Nav.tsx"},{"name":"Reveal","sourcePath":"src/components/Reveal.tsx"},{"name":"SectionHeader","sourcePath":"src/components/SectionHeader.tsx"},{"name":"Skills","sourcePath":"src/components/Skills.tsx"},{"name":"StatCard","sourcePath":"src/components/StatCard.tsx"}],"sourceHashes":{"repo-changes/tailwind.config.js":"7f1b0289efad","src/App.tsx":"79a8e112fc70","src/components/About.tsx":"712bb63af76f","src/components/ChapterProgress.tsx":"df5263298362","src/components/Chronicle.tsx":"8ecbb74408b4","src/components/Footer.tsx":"b7d37e1c1255","src/components/Hero.tsx":"9928f4d449a1","src/components/Nav.tsx":"7e31d80f05ba","src/components/Reveal.tsx":"e61a0b873c41","src/components/SectionHeader.tsx":"2119cf5bf281","src/components/Skills.tsx":"90e7f5a5335f","src/components/StatCard.tsx":"e70885ef924a","src/data/content.ts":"a7eb5e4c5c7f","src/hooks/useTypewriter.ts":"ecc2d21b10a8","src/main.tsx":"27b0ddfab3c1","ui_kits/portfolio/Contact.jsx":"0a56eacf29a2","ui_kits/portfolio/Deployments.jsx":"3b04890455bf","ui_kits/portfolio/KitAbout.jsx":"e9b3eb88ee9f","ui_kits/portfolio/KitFooter.jsx":"a77242e630b1","ui_kits/portfolio/KitHero.jsx":"66409b1626ab","ui_kits/portfolio/KitNav.jsx":"071ccf7acd75","ui_kits/portfolio/KitSectionHeader.jsx":"a3f689e14ba6","ui_kits/portfolio/KitSkills.jsx":"1dac5d239eb8","ui_kits/portfolio/Runes.jsx":"9ec0abc73554","ui_kits/portfolio/Summon.jsx":"d834c5ac8463","ui_kits/portfolio/content.js":"c17746552f1a"},"inlinedExternals":[],"unexposedExports":[{"name":"aboutContent","sourcePath":"src/data/content.ts"},{"name":"chronicleData","sourcePath":"src/data/content.ts"},{"name":"heroContent","sourcePath":"src/data/content.ts"},{"name":"navSections","sourcePath":"src/data/content.ts"},{"name":"skillsData","sourcePath":"src/data/content.ts"},{"name":"useTypewriter","sourcePath":"src/hooks/useTypewriter.ts"}]} */

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

// src/components/Reveal.tsx
try { (() => {
const {
  useEffect,
  useRef,
  ReactNode
} = React;
function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up'
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let revealTimeout;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        revealTimeout = setTimeout(() => el.classList.add('revealed'), delay);
        observer.unobserve(el);
      }
    }, {
      threshold: 0.08
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(revealTimeout);
    };
  }, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `reveal reveal-${direction} ${className}`
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Reveal.tsx", error: String((e && e.message) || e) }); }

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

// src/components/StatCard.tsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/** Hover dwell (ms) before the dossier reveals. Within the 0.5–1s spec. */
const HOVER_DELAY = 600;
function StatCard({
  value,
  label,
  detailLabel,
  detail,
  column
}) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(undefined);
  const tooltipId = `stat-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const hasDetail = detail.length > 0;

  // Mobile: anchor to the box's outer edge and grow inward so the dossier
  // stays on-screen. Desktop (sm+): there's room, so center it over the box.
  const alignClasses = column === 'left' ? 'left-0 sm:left-1/2 sm:-translate-x-1/2' : 'right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2';
  const clearTimer = () => {
    if (timerRef.current !== undefined) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  // Pointer hover → reveal after the dwell delay.
  const handleEnter = () => {
    clearTimer();
    timerRef.current = setTimeout(() => setOpen(true), HOVER_DELAY);
  };

  // Leave / blur → dismiss immediately.
  const handleClose = () => {
    clearTimer();
    setOpen(false);
  };

  // Keyboard focus and touch-tap (which focuses) reveal at once — no dwell.
  const handleOpenNow = () => {
    clearTimer();
    setOpen(true);
  };
  useEffect(() => clearTimer, []);

  // Dismiss with Escape while the dossier is open.
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-full",
    onMouseEnter: hasDetail ? handleEnter : undefined,
    onMouseLeave: hasDetail ? handleClose : undefined
  }, /*#__PURE__*/React.createElement("div", {
    role: hasDetail ? 'button' : undefined,
    tabIndex: hasDetail ? 0 : undefined,
    "aria-expanded": hasDetail ? open : undefined,
    "aria-describedby": open ? tooltipId : undefined,
    onFocus: hasDetail ? handleOpenNow : undefined,
    onBlur: hasDetail ? handleClose : undefined,
    className: "flex h-full flex-col items-center justify-center bg-surface border border-gold/20 p-6 text-center select-none transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_24px_rgba(201,162,39,0.12)] focus:outline-none focus-visible:border-gold/60 focus-visible:shadow-[0_0_24px_rgba(201,162,39,0.12)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-cinzel text-4xl font-bold text-gold leading-none mb-2"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs tracking-widest text-gray-500 uppercase"
  }, label)), open && hasDetail && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: tooltipId,
    role: "tooltip",
    className: `pointer-events-none absolute bottom-full z-30 mb-3 w-64 max-w-[calc(100vw-3rem)] ${alignClasses}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-tooltip-in relative overflow-hidden border border-gold/50 bg-void p-4 text-left shadow-[0_0_24px_rgba(201,162,39,0.18)]"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(125,211,252,0.6)_3px)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative font-mono text-[10px] tracking-[0.2em] text-cyan/80 uppercase mb-2"
  }, detailLabel), /*#__PURE__*/React.createElement("div", {
    className: "relative mb-3 h-px w-full bg-gradient-to-r from-gold/40 to-transparent"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "relative space-y-2"
  }, detail.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.name,
    className: "flex items-baseline justify-between gap-x-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-baseline gap-2 font-sans text-[13px] leading-snug text-parchment/90"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] leading-none text-gold/70"
  }, "\u25B8"), item.name), item.meta && /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] tracking-wider text-cyan/70 whitespace-nowrap"
  }, item.meta)))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute bottom-full left-1/2 z-30 mb-[6px] h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gold/50 bg-void"
  })));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/StatCard.tsx", error: String((e && e.message) || e) }); }

// src/data/content.ts
try { (() => {
const heroContent = {
  systemLabel: '[ SYSTEM: ONLINE ]',
  name: 'JOSEPH H. DUNN II',
  subtitle: 'Systems Engineer · Digital Tactician',
  tagline: '10+ years forging resilient systems across military and enterprise domains. Where ancient discipline meets modern technology.'
};
const aboutContent = {
  sectionLabel: '// IDENTIFICATION',
  sectionTitle: 'About the Operator',
  fileLabel: '▸ PROFILE.LOG',
  bio: ['Joseph H. Dunn II is a battle-hardened systems engineer with over a decade of service spanning military intelligence and enterprise IT. He has designed, deployed, and defended critical infrastructure across government and commercial domains.', 'Specializing in AI-augmented automation and cloud architecture, he bridges the gap between strategic vision and operational execution — transforming legacy environments into resilient, modern systems.', 'A proven force multiplier: led programs that achieved 8× productivity gains through AI adoption, deploying tools that still serve enterprise teams today.'],
  // `detail` powers the hover dossier on each stat box (the interactive résumé).
  // Years Experience, Roles Held, and Cloud Platforms are confirmed.
  // TODO(Joseph): Systems Managed categories are approximate — refine if you want.
  stats: [{
    value: '10+',
    label: 'Years Experience',
    detailLabel: '// SERVICE RECORD',
    detail: [{
      name: 'United States Army',
      meta: '2008 – 2021'
    }, {
      name: 'THTBC',
      meta: '2021 – 2022'
    }, {
      name: 'Tactis',
      meta: '2022 – 2026'
    }, {
      name: 'Briviant',
      meta: '2026 – Present'
    }]
  }, {
    value: '100+',
    label: 'Systems Managed',
    detailLabel: '// DEPLOYMENTS',
    detail: [{
      name: 'Active Directory forests'
    }, {
      name: 'VMware / Hyper-V hosts'
    }, {
      name: 'Cloud workloads'
    }, {
      name: 'Security appliances'
    }, {
      name: 'AI systems'
    }]
  }, {
    value: '4',
    label: 'Roles Held',
    detailLabel: '// CAREER LADDER',
    detail: [{
      name: 'System Administrator'
    }, {
      name: 'Systems Engineer',
      meta: 'AI · Infra'
    }, {
      name: 'IT Manager',
      meta: 'Operations'
    }, {
      name: 'IT Director',
      meta: 'AI'
    }]
  }, {
    value: '3',
    label: 'Cloud Platforms',
    detailLabel: '// ENVIRONMENTS',
    detail: [{
      name: 'Amazon Web Services'
    }, {
      name: 'Microsoft Azure'
    }, {
      name: 'Google Cloud'
    }]
  }]
};
const skillsData = [{
  category: 'AI Tools',
  items: ['ChatGPT', 'Ollama', 'Claude AI', 'Azure OpenAI']
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
const navSections = [{
  id: 'home',
  navLabel: 'Home',
  chapterLabel: 'Prologue'
}, {
  id: 'about',
  navLabel: 'About',
  chapterLabel: 'The Operator'
}, {
  id: 'chronicle',
  navLabel: 'Chronicle',
  chapterLabel: 'The Chronicle'
}, {
  id: 'skills',
  navLabel: 'Skills',
  chapterLabel: 'Arsenal'
}];
const chronicleData = [{
  label: 'The Foundation',
  period: '2014 – 2018',
  narrative: 'Military intelligence forged the fundamentals — secure networks, disciplined process, and the craft of operating under pressure. Every system hardened, every access controlled, every threat mapped.',
  tools: ['Active Directory', 'Cisco Networking', 'VMware', 'SIEM', 'NIST / RMF'],
  quote: 'Zero Trust before it had a name.'
}, {
  label: 'The Expansion',
  period: '2018 – 2022',
  narrative: 'Enterprise domains demanded scale. Cloud platforms became the new battlefield. Automation replaced repetition with precision — transforming manual operations into repeatable, resilient pipelines.',
  tools: ['Microsoft Azure', 'AWS', 'PowerShell', 'Ansible', 'ServiceNow'],
  quote: '100+ systems architected and defended.'
}, {
  label: 'The Augmentation',
  period: '2022 – Present',
  narrative: 'AI changed the equation. The mission shifted from managing systems to multiplying human capability — deploying intelligence at scale, accelerating teams, and rewriting what one operator can accomplish.',
  tools: ['Claude AI', 'ChatGPT', 'Ollama', 'Azure OpenAI', 'Python'],
  quote: '8× productivity gains through AI adoption.'
}];
Object.assign(__ds_scope, { heroContent, aboutContent, skillsData, navSections, chronicleData });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/data/content.ts", error: String((e && e.message) || e) }); }

// src/components/About.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "relative py-28 px-8 bg-void"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    label: __ds_scope.aboutContent.sectionLabel,
    title: __ds_scope.aboutContent.sectionTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 80,
    direction: "left"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-[0.2em] text-crimson uppercase mb-4"
  }, __ds_scope.aboutContent.fileLabel), __ds_scope.aboutContent.bio.map((paragraph, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "font-sans text-base text-parchment/70 leading-relaxed mb-5 last:mb-0"
  }, paragraph)))), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 160,
    direction: "right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 auto-rows-fr gap-4"
  }, __ds_scope.aboutContent.stats.map((stat, i) => /*#__PURE__*/React.createElement(__ds_scope.StatCard, _extends({
    key: stat.label,
    column: i % 2 === 0 ? 'left' : 'right'
  }, stat))))))));
}
Object.assign(__ds_scope, { About });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/About.tsx", error: String((e && e.message) || e) }); }

// src/components/ChapterProgress.tsx
try { (() => {
const {
  useState,
  useEffect
} = React;
const DOT_SPACING = 52;
const ACTIVE_ZONE_INSET = 40; // % of viewport height trimmed from top+bottom to define "active" band
const ACTIVE_ZONE_MARGIN = `-${ACTIVE_ZONE_INSET}% 0px -${ACTIVE_ZONE_INSET}% 0px`;
function ChapterProgress() {
  const [active, setActive] = useState('home');
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      const clamped = isNaN(pct) ? 0 : Math.round(Math.min(1, Math.max(0, pct)) * 1000) / 1000;
      setScrollPct(prev => clamped === prev ? prev : clamped);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: ACTIVE_ZONE_MARGIN
    });
    __ds_scope.navSections.forEach(({
      id
    }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const trackHeight = (__ds_scope.navSections.length - 1) * DOT_SPACING;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Chapter progress",
    className: "fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col",
    style: {
      gap: `${DOT_SPACING}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[5px] top-[5px] w-px bg-gold/15 pointer-events-none",
    style: {
      height: `${trackHeight}px`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[5px] top-[5px] w-px bg-gold/50 pointer-events-none transition-all duration-150",
    style: {
      height: `${scrollPct * trackHeight}px`
    }
  }), __ds_scope.navSections.map(({
    id,
    chapterLabel
  }) => {
    const isActive = active === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: `#${id}`,
      className: "flex items-center gap-3 group",
      "aria-label": `Go to ${chapterLabel}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-[11px] h-[11px] rounded-full border transition-all duration-300 shrink-0 ${isActive ? 'bg-gold border-gold shadow-[0_0_10px_rgba(201,162,39,0.7)]' : 'bg-transparent border-gold/30 group-hover:border-gold/60'}`
    }), /*#__PURE__*/React.createElement("span", {
      className: `font-mono text-[9px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ${isActive ? 'text-gold opacity-100 translate-x-0' : 'text-gold/0 -translate-x-1 group-hover:text-gold/40 group-hover:opacity-100 group-hover:translate-x-0'}`
    }, chapterLabel));
  })));
}
Object.assign(__ds_scope, { ChapterProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/ChapterProgress.tsx", error: String((e && e.message) || e) }); }

// src/components/Chronicle.tsx
try { (() => {
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
function Chronicle() {
  return /*#__PURE__*/React.createElement("section", {
    id: "chronicle",
    className: "relative py-28 px-8 bg-void"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    label: "// THE ARC",
    title: "The Chronicle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-16"
  }, __ds_scope.chronicleData.map((act, i) => /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    key: act.label,
    delay: i * 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:pl-12 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -left-[4px] top-[6px] w-[14px] h-[14px] rounded-full border border-gold/60 bg-void hidden md:flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[5px] h-[5px] rounded-full bg-gold/80"
  })), /*#__PURE__*/React.createElement("div", {
    className: "border border-gold/12 bg-surface/60 p-8 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,162,39,0.07)] transition-all duration-500 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-cinzel text-xs tracking-[0.35em] text-gold/50 uppercase"
  }, `ACT ${ROMAN[i]}`), /*#__PURE__*/React.createElement("h3", {
    className: "font-cinzel text-xl md:text-2xl font-semibold text-parchment tracking-wide"
  }, act.label)), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs tracking-widest text-gray-600"
  }, act.period)), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-px bg-gradient-to-r from-gold/25 to-transparent mb-6"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-sans text-base text-parchment/65 leading-relaxed mb-7"
  }, act.narrative), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-7"
  }, act.tools.map(tool => /*#__PURE__*/React.createElement("span", {
    key: tool,
    className: "font-mono text-[10px] tracking-widest uppercase text-cyan/70 border border-cyan/20 px-3 py-1 group-hover:border-cyan/35 group-hover:text-cyan/90 transition-all duration-300"
  }, tool))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-4 h-px bg-gold/40 shrink-0"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-cinzel text-xs tracking-[0.15em] text-gold/70 italic"
  }, act.quote))))))))));
}
Object.assign(__ds_scope, { Chronicle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Chronicle.tsx", error: String((e && e.message) || e) }); }

// src/components/Nav.tsx
try { (() => {
const {
  useEffect,
  useState
} = React;
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20;
      if (next !== scrolled) setScrolled(next);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  return /*#__PURE__*/React.createElement("nav", {
    className: `fixed top-0 left-0 right-0 z-50 border-b border-gold/30 transition-colors duration-300 ${scrolled ? 'bg-void/95 backdrop-blur-md' : 'bg-void/60 backdrop-blur-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-5 sm:px-10 h-16"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "font-cinzel text-xl font-bold text-gold tracking-widest hover:text-parchment transition-colors"
  }, "JHD"), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex gap-6 lg:gap-10"
  }, __ds_scope.navSections.map(({
    id,
    navLabel
  }) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    className: "font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-gold transition-colors"
  }, navLabel))), /*#__PURE__*/React.createElement("button", {
    className: "sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-gold",
    onClick: () => setMenuOpen(o => !o),
    "aria-label": menuOpen ? 'Close menu' : 'Open menu',
    "aria-expanded": menuOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: `block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex flex-col border-t border-gold/20 bg-void/95 backdrop-blur-md"
  }, __ds_scope.navSections.map(({
    id,
    navLabel
  }) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    onClick: () => setMenuOpen(false),
    className: "font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-gold px-5 py-4 border-b border-gold/10 last:border-b-0 transition-colors"
  }, navLabel))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Nav.tsx", error: String((e && e.message) || e) }); }

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
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    label: "// LOADOUT",
    title: "Arsenal"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, __ds_scope.skillsData.map((group, i) => /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    key: group.category,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface border border-gold/15 border-t-2 border-t-gold p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,162,39,0.15)] transition-all h-full"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs tracking-[0.2em] text-cyan uppercase mb-4"
  }, "\u25B8 ", group.category), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    className: "font-sans text-sm text-parchment/80 flex items-center gap-2 pb-2 border-b border-white/[0.04] last:border-0 last:pb-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-crimson text-[0.5rem] shrink-0"
  }, "\u25C6"), item)))))))));
}
Object.assign(__ds_scope, { Skills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Skills.tsx", error: String((e && e.message) || e) }); }

// src/hooks/useTypewriter.ts
try { (() => {
const {
  useState,
  useEffect
} = React;
function useTypewriter(text, speed = 32, startDelay = 1400) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return {
    displayed,
    done
  };
}
Object.assign(__ds_scope, { useTypewriter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/hooks/useTypewriter.ts", error: String((e && e.message) || e) }); }

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
  const {
    displayed,
    done
  } = __ds_scope.useTypewriter(__ds_scope.heroContent.tagline);
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      backgroundImage: ['linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px)', 'linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)', 'linear-gradient(rgba(125,211,252,0.025) 1px, transparent 1px)', 'linear-gradient(90deg, rgba(125,211,252,0.025) 1px, transparent 1px)'].join(', '),
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
    className: "font-sans text-base text-gray-600 max-w-md mx-auto mb-12 leading-relaxed min-h-[4rem]"
  }, displayed, !done && /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-[2px] h-[1em] bg-gold/70 ml-0.5 align-middle animate-cursor-blink"
  })), /*#__PURE__*/React.createElement("div", {
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

// src/App.tsx
try { (() => {
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.ChapterProgress, null), /*#__PURE__*/React.createElement(__ds_scope.Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(__ds_scope.Hero, null), /*#__PURE__*/React.createElement(__ds_scope.About, null), /*#__PURE__*/React.createElement(__ds_scope.Chronicle, null), /*#__PURE__*/React.createElement(__ds_scope.Skills, null)), /*#__PURE__*/React.createElement(__ds_scope.Footer, null));
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

__ds_ns.ChapterProgress = __ds_scope.ChapterProgress;

__ds_ns.Chronicle = __ds_scope.Chronicle;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Skills = __ds_scope.Skills;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
