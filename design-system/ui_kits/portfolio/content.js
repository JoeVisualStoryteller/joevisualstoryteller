// content.js — Joseph's portfolio copy. Theatrical third-person; tactical kickers.
// Deployments are placeholder case studies — replace with real project data before shipping.
window.JHD_CONTENT = {
  hero: {
    systemLabel: '[ SYSTEM: ONLINE ]',
    name: 'JOSEPH H. DUNN II',
    subtitle: 'Systems Engineer · AI Architect · Digital Tactician',
    // Tagline v2 — concrete proof over generic metaphor
    tagline: 'A decade across military intelligence and enterprise cloud — forging systems under real operational pressure. 8× productivity gains. Still running.',
  },
  about: {
    sectionLabel: '// IDENTIFICATION',
    sectionTitle: 'About the Operator',
    fileLabel: '▸ PROFILE.LOG',
    bio: [
      'Joseph H. Dunn II is a battle-hardened systems engineer with over a decade of service spanning military intelligence and enterprise IT. He has designed, deployed, and defended critical infrastructure across government and commercial domains.',
      'Specializing in AI-augmented automation and cloud architecture, he bridges the gap between strategic vision and operational execution — transforming legacy environments into resilient, modern systems.',
      'A proven force multiplier: led programs that achieved 8× productivity gains through AI adoption, deploying tools that still serve enterprise teams today.',
    ],
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '100+', label: 'Systems Managed' },
      { value: '4',   label: 'Service Branches' },
      { value: '3',   label: 'Cloud Platforms' },
    ],
  },
  skills: [
    { category: 'AI Tools',         items: ['ChatGPT', 'GitHub Copilot', 'Claude AI', 'Azure OpenAI'] },
    { category: 'Cloud Platforms',  items: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
    { category: 'Automation',       items: ['PowerShell', 'Python', 'Bash', 'Ansible'] },
    { category: 'Security',         items: ['Zero Trust', 'SIEM', 'Vulnerability Mgmt', 'NIST/RMF'] },
    { category: 'Infrastructure',   items: ['Active Directory', 'VMware', 'Hyper-V', 'Cisco Networking'] },
    { category: 'ITSM / CRM',       items: ['ServiceNow', 'Salesforce', 'Jira', 'Remedy'] },
  ],
  // ── DEPLOYMENTS ─────────────────────────────────────────────────────────────
  // Replace [BRACKET] fields with real project details.
  // Set featured: true on the one you want as the hero card.
  deployments: [
    {
      featured: true,
      codename: 'OPERATION VELOCITY',
      classification: 'AI AUGMENTATION · ENTERPRISE',
      desc: 'Designed and deployed a GPT-powered automation suite that eliminated manual bottlenecks across three business units. Integrated into daily workflows — tools remain in active service.',
      problem: 'Manual processes consumed 80% of team capacity. Repetitive data processing, report generation, and ticket routing left no bandwidth for strategic work.',
      outcome: '8×',
      outcomeLabel: 'Productivity Gain',
      stack: ['Azure OpenAI', 'Python', 'PowerShell', 'SharePoint'],
    },
    {
      codename: 'PROJECT IRONGATE',
      classification: 'SECURITY · ZERO TRUST',
      desc: 'Architected and executed a full Zero Trust migration. Closed all critical CVEs, enforced least-privilege access across the estate, and passed the compliance audit on schedule.',
      problem: 'Legacy flat-network with 14 open compliance findings. Full audit 90 days out.',
      outcome: '0',
      outcomeLabel: 'Critical Findings at Audit',
      stack: ['Azure AD', 'Defender XDR', 'NIST RMF', 'SIEM'],
    },
    {
      codename: 'ATLAS MIGRATION',
      classification: 'CLOUD · INFRASTRUCTURE',
      desc: 'Phased lift-and-shift of an aging on-prem estate to AWS and Azure. Decommissioned legacy hardware, implemented infrastructure-as-code, and stood up DR for the first time.',
      problem: '100+ physical servers on two EOL operating systems. No disaster recovery.',
      outcome: '40%',
      outcomeLabel: 'Infrastructure Cost Reduction',
      stack: ['AWS', 'Azure', 'Terraform', 'Ansible'],
    },
  ],
};
