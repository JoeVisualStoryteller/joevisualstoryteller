export const heroContent = {
  systemLabel: '[ SYSTEM: ONLINE ]',
  name: 'JOSEPH H. DUNN II',
  subtitle: 'Systems Engineer · Digital Tactician',
  tagline:
    '10+ years forging resilient systems across military and enterprise domains. Where ancient discipline meets modern technology.',
}

export interface StatDetailItem {
  /** Org, system, branch, or platform name */
  name: string
  /** Optional supporting detail — dates, role, or context shown right-aligned */
  meta?: string
}

export interface Stat {
  value: string
  label: string
  /** Terminal-style eyebrow shown at the top of the hover dossier */
  detailLabel: string
  /** Items that back the headline number — powers the hover tooltip */
  detail: StatDetailItem[]
}

export const aboutContent = {
  sectionLabel: '// IDENTIFICATION',
  sectionTitle: 'About the Operator',
  fileLabel: '▸ PROFILE.LOG',
  bio: [
    'Joseph H. Dunn II is a battle-hardened systems engineer with over a decade of service spanning military intelligence and enterprise IT. He has designed, deployed, and defended critical infrastructure across government and commercial domains.',
    'Specializing in AI-augmented automation and cloud architecture, he bridges the gap between strategic vision and operational execution — transforming legacy environments into resilient, modern systems.',
    'A proven force multiplier: led programs that achieved 8× productivity gains through AI adoption, deploying tools that still serve enterprise teams today.',
  ],
  // `detail` powers the hover dossier on each stat box (the interactive résumé).
  // Years Experience, Roles Held, and Cloud Platforms are confirmed.
  // TODO(Joseph): Systems Managed categories are approximate — refine if you want.
  stats: [
    {
      value: '10+',
      label: 'Years Experience',
      detailLabel: '// SERVICE RECORD',
      detail: [
        { name: 'United States Army', meta: '2008 – 2021' },
        { name: 'THTBC', meta: '2021 – 2022' },
        { name: 'Tactis', meta: '2022 – 2026' },
        { name: 'Briviant', meta: '2026 – Present' },
      ],
    },
    {
      value: '100+',
      label: 'Systems Managed',
      detailLabel: '// DEPLOYMENTS',
      detail: [
        { name: 'Active Directory forests' },
        { name: 'VMware / Hyper-V hosts' },
        { name: 'Cloud workloads' },
        { name: 'Security appliances' },
        { name: 'AI systems' },
      ],
    },
    {
      value: '4',
      label: 'Roles Held',
      detailLabel: '// CAREER LADDER',
      detail: [
        { name: 'System Administrator' },
        { name: 'IT Manager' },
        { name: 'Systems Engineer' },
        { name: 'AI Engineer' },
      ],
    },
    {
      value: '3',
      label: 'Cloud Platforms',
      detailLabel: '// ENVIRONMENTS',
      detail: [
        { name: 'Amazon Web Services' },
        { name: 'Microsoft Azure' },
        { name: 'Google Cloud' },
      ],
    },
  ] satisfies Stat[],
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const skillsData: SkillGroup[] = [
  { category: 'AI Tools', items: ['ChatGPT', 'Ollama', 'Claude AI', 'Azure OpenAI'] },
  { category: 'Cloud Platforms', items: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
  { category: 'Automation', items: ['PowerShell', 'Python', 'Bash', 'Ansible'] },
  { category: 'Security', items: ['Zero Trust', 'SIEM', 'Vulnerability Mgmt', 'NIST/RMF'] },
  { category: 'Infrastructure', items: ['Active Directory', 'VMware', 'Hyper-V', 'Cisco Networking'] },
  { category: 'ITSM / CRM', items: ['ServiceNow', 'Salesforce', 'Jira', 'Remedy'] },
]

export interface NavSection {
  id: string
  navLabel: string
  chapterLabel: string
}

export const navSections: NavSection[] = [
  { id: 'home',      navLabel: 'Home',      chapterLabel: 'Prologue'      },
  { id: 'about',     navLabel: 'About',     chapterLabel: 'The Operator'  },
  { id: 'chronicle', navLabel: 'Chronicle', chapterLabel: 'The Chronicle' },
  { id: 'skills',    navLabel: 'Skills',    chapterLabel: 'Arsenal'       },
]

export interface ChronicleAct {
  label: string
  period: string
  narrative: string
  tools: string[]
  quote: string
}

export const chronicleData: ChronicleAct[] = [
  {
    label: 'The Foundation',
    period: '2014 – 2018',
    narrative:
      'Military intelligence forged the fundamentals — secure networks, disciplined process, and the craft of operating under pressure. Every system hardened, every access controlled, every threat mapped.',
    tools: ['Active Directory', 'Cisco Networking', 'VMware', 'SIEM', 'NIST / RMF'],
    quote: 'Zero Trust before it had a name.',
  },
  {
    label: 'The Expansion',
    period: '2018 – 2022',
    narrative:
      'Enterprise domains demanded scale. Cloud platforms became the new battlefield. Automation replaced repetition with precision — transforming manual operations into repeatable, resilient pipelines.',
    tools: ['Microsoft Azure', 'AWS', 'PowerShell', 'Ansible', 'ServiceNow'],
    quote: '100+ systems architected and defended.',
  },
  {
    label: 'The Augmentation',
    period: '2022 – Present',
    narrative:
      'AI changed the equation. The mission shifted from managing systems to multiplying human capability — deploying intelligence at scale, accelerating teams, and rewriting what one operator can accomplish.',
    tools: ['Claude AI', 'ChatGPT', 'Ollama', 'Azure OpenAI', 'Python'],
    quote: '8× productivity gains through AI adoption.',
  },
]
