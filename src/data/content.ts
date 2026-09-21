export const heroContent = {
  eyebrow: 'Systems / Operations / Applied AI',
  name: 'Joseph Henry Dunn II',
  title: 'Staff Engineer, Operations.',
  principle: 'Force enabler for engineering teams.',
  philosophy: 'Simplifying complex systems. Slow is smooth. Smooth is fast. Master the basics.',
  summary:
    'Amplify success through cross-team collaboration and high-agency ICs who can carry hard problems end to end. Systems engineering, infrastructure architecture, security, automation, and applied AI for environments where reliability is part of the product.',
  location: 'Southern California · Remote',
  currentRole: 'Staff engineer focused on resilient operations and production infrastructure',
}

export interface ImpactMetric {
  value: string
  label: string
  detail: string
}

export const impactMetrics: ImpactMetric[] = [
  { value: '700+', label: 'Physical hosts', detail: 'Large-scale production fleet experience' },
  { value: '1,000+', label: 'Virtual machines', detail: 'Multi-tenant infrastructure at scale' },
  { value: '100K+', label: 'Lifetime customers', detail: 'Platforms supporting real customer operations' },
  { value: '0', label: 'Data loss', detail: 'Cyberattack containment and recovery outcome' },
  { value: '8×', label: 'Productivity gain', detail: 'Reported result from applied AI adoption' },
  { value: '18+', label: 'Years engineering', detail: 'Commercial and Department of Defense environments' },
]

export const aboutContent = {
  eyebrow: '01 / Operating signal',
  title: 'Amplify team and department success.',
  body: [
    'Joseph is a Staff Engineer, Operations and systems engineer by trade. He sets architecture, security, reliability, automation, and production-change standards across company-wide infrastructure.',
    'His work moves between the physical fleet, virtual platforms, cloud services, security controls, delivery pipelines, and the teams responsible for keeping the system useful. The goal is not dependence on one expert; it is a clear operating model and individual contributors who can own hard problems end to end.',
  ],
  scopeLabel: 'Current scope',
  scope: ['Production infrastructure', 'AI engineering leadership', 'Security and recovery', 'Operating-model design'],
}

export interface CaseStudy {
  number: string
  title: string
  summary: string
  metric: string
  metricLabel: string
  tags: string[]
  points: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    number: '01',
    title: 'Set the platform direction.',
    summary:
      'A governed delivery platform for a large-scale production hosting fleet, built to make provisioning repeatable and production changes verifiable.',
    metric: '700+ / 1,000+',
    metricLabel: 'physical hosts / virtual machines',
    tags: ['Fleet automation', 'Virtualization', 'CI/CD', 'Image pipelines'],
    points: [
      'Architected approval-gated provisioning, inventory, placement, and standardized configuration controls.',
      'Established capacity-aware placement, backup and retention rules, ownership standards, and CI/CD modernization.',
    ],
  },
  {
    number: '02',
    title: 'See the threat. Neutralize it fast.',
    summary:
      'Recognizing a developing cyber threat, containing it quickly, and coordinating the response before it became a larger operational event.',
    metric: '0',
    metricLabel: 'data loss during recovery',
    tags: ['Incident response', 'NIST 800-53', 'Evidence handling', 'Recovery'],
    points: [
      'Detected the threat, removed persistence, reduced exposure, and coordinated containment across technical and executive teams before the incident could expand.',
      'Preserved data through recovery, delivered evidence, and strengthened controls against recurrence using NIST SP 800-53 Rev. 5.',
    ],
  },
  {
    number: '03',
    title: 'Make applied AI an operating capability.',
    summary:
      'Production AI systems that connect language models to operational workflows and internal knowledge—with human-in-the-loop controls where they matter.',
    metric: '10,000+',
    metricLabel: 'documents in governed RAG platform',
    tags: ['FastAPI', 'TypeScript', 'MCP', 'RAG', 'Human-in-the-loop'],
    points: [
      'Established reusable patterns for tool calling, provider fallbacks, audit trails, local-first execution, and cost controls.',
      'Improved answer accuracy by more than 40%, reduced manual work by 60%, and contributed to an 8× productivity gain.',
    ],
  },
  {
    number: '04',
    title: 'Build the operating model around the work.',
    summary:
      'Creating the conditions around the technology: clear ownership, useful standards, and enough context for individual contributors to make good decisions without waiting for permission.',
    metric: '4',
    metricLabel: 'operational domains established',
    tags: ['Org design', 'Hiring', 'Mentoring', '$1M+ budget', '24/7 support'],
    points: [
      'Defined and filled four positions, established ownership across four operational domains, and mentored engineers across systems, software, web, and database disciplines.',
      'Previously built and developed an IT organization of 70+ personnel and led a $1M IT portfolio with 95%+ SLA compliance.',
    ],
  },
]

export interface CapabilityGroup {
  category: string
  description: string
  items: string[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    category: 'Platform architecture',
    description: 'Designing platforms that can be understood, governed, and operated after launch.',
    items: ['Proxmox', 'VMware ESXi', 'Linux', 'AWS', 'Azure', 'MySQL', 'REST APIs'],
  },
  {
    category: 'Security & governance',
    description: 'Making security controls part of the operating model, not a last-minute gate.',
    items: ['Incident response', 'NIST SP 800-53', 'Zero Trust', 'IAM', 'CMMC', 'DISA STIG', 'RMF'],
  },
  {
    category: 'Automation & delivery',
    description: 'Replacing recurring manual effort with observable, repeatable workflows.',
    items: ['Python', 'PowerShell', 'TypeScript', 'FastAPI', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD'],
  },
  {
    category: 'Applied AI systems',
    description: 'LLMs and agentic workflows built with boundaries, traceability, and human-in-the-loop judgment.',
    items: ['LLMs', 'RAG', 'MCP integrations', 'Tool calling', 'Amazon Bedrock', 'Amazon Q', 'SageMaker'],
  },
  {
    category: 'Operations leadership',
    description: 'Creating the conditions for teams to move with clear ownership, strong fundamentals, and sound judgment.',
    items: ['Technical authority', 'Operating-model design', 'Hiring', 'Mentoring', 'Executive communication', 'Budget ownership'],
  },
  {
    category: 'Credentials & frameworks',
    description: 'Formal grounding for work across commercial and Department of Defense environments.',
    items: ['Security+', 'AWS Solutions Architect', 'Azure Administrator', 'ITIL v4'],
  },
]

export interface CareerEntry {
  role: string
  company: string
  period: string
  detail: string
}

export const careerData: CareerEntry[] = [
  {
    role: 'Staff Engineer, Operations',
    company: 'Private infrastructure company',
    period: 'Jan 2026 — Present',
    detail: 'Promoted from Senior Systems Engineer; company-wide operations and production infrastructure scope.',
  },
  {
    role: 'Systems Engineer, AI & Business Applications',
    company: 'Tactis LLC',
    period: 'Jan 2024 — Oct 2025',
    detail: 'Directed a CTO-backed AI and business-applications transformation across five departments.',
  },
  {
    role: 'Systems Administrator, Business Applications & Infrastructure',
    company: 'Tactis LLC',
    period: 'Aug 2022 — Jan 2024',
    detail: 'Led cloud, identity, fleet management, ServiceNow, SIEM, and automation across the operating environment.',
  },
  {
    role: 'Information Technology Manager',
    company: 'Tlingit Haida Tribal Business Corporation',
    period: 'Apr 2021 — Apr 2022',
    detail: 'Directed a $1M IT portfolio, service desk, network, systems operations, and CMMC Level 2 readiness.',
  },
  {
    role: 'Information Management Director / Senior Systems Administrator',
    company: 'United States Army',
    period: 'Apr 2008 — Apr 2021',
    detail: 'Set mission-critical infrastructure strategy across 500+ classified and unclassified systems and developed a 70+ person IT organization.',
  },
]

export interface NavSection {
  id: string
  label: string
}

export const navSections: NavSection[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Signal' },
  { id: 'work', label: 'Selected work' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'contact', label: 'Contact' },
]
