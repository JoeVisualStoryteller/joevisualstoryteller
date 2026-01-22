import type { PersonalInfo, Summary, Experience } from './resumeData';

export const personalInfo: PersonalInfo = {
  name: "Alexis B. Romero",
  title: "Operations & Client Support Professional",
  location: "Norman, OK",
  phone: "405-816-7106",
  email: "alexisbromero97@gmail.com",
  linkedin: {
    display: "",
    url: ""
  },
  github: {
    display: "",
    url: ""
  }
};

export const summary: Summary = {
  main: "Operations and client support professional with experience in account management, scheduling, recruiting, and service leadership. Known for clear communication, organized workflows, and accurate documentation in fast-paced, client-facing environments. Experienced with CRMs (OneSite, Knock), cross-team coordination, and keeping requests moving so clients stay informed."
};

export const keyAchievements: string[] = [
  "Coordinated multi-channel client communication and request tracking so priorities stayed aligned and service stayed on schedule",
  "Maintained clean records and CRM updates across leasing, recruiting, and account workflows to support reliable follow-up",
  "Coordinated educational programming and community events as The Buddy Bench team leader, handling logistics and participant communication"
];

export const experiences: Experience[] = [
  {
    company: "Skywalker Marketing — West Hollywood, CA (Remote)",
    role: "Talent Agent (Remote)",
    date: "Feb 2025 - Present",
    bullets: [
      "Serve as the main point of contact for assigned accounts, sorting requests, coordinating daily communication, and keeping response times timely",
      "Maintain workflows, documentation, and message tracking so account status is current and actionable",
      "Coordinate outreach to support revenue initiatives, tracking activity and ensuring accurate information flow",
      "Partner with operations, marketing, and sales to align priorities and make handoffs smooth",
      "Identify risks and workflow bottlenecks early, flagging issues to protect timelines and service quality"
    ],
  },
  {
    company: "Kam's Kookery — Oklahoma",
    role: "Lead Bartender - Banquet Services",
    date: "Aug 2024 - Jan 2025",
    bullets: [
      "Delivered high-volume service during large-scale events while keeping the guest experience positive",
      "Coordinated bar setup, breakdown, inventory, and supplies to keep events running smoothly",
      "Ensured compliance with safety, service, and alcohol regulations"
    ],
  },
  {
    company: "Yo Pablo — Oklahoma",
    role: "Lead Bartender",
    date: "Aug 2023 - Jul 2024",
    bullets: [
      "Led front-of-house bar operations during high-volume service periods while keeping the customer experience strong",
      "Trained and onboarded new staff to maintain consistent service standards",
      "Tracked inventory, restocking, and daily operational coordination"
    ],
  },
  {
    company: "Central LLC",
    role: "Family Assistant",
    date: "Jan 2023 - Aug 2023",
    bullets: [
      "Coordinated schedules, logistics, and task priorities to support daily operations and time-sensitive requests",
      "Managed online sales listings, customer inquiries, transactions, and follow-ups while keeping records accurate"
    ],
  },
  {
    company: "Live Boho",
    role: "Sales & Marketing Associate",
    date: "Feb 2022 - Jun 2022",
    bullets: [
      "Drove sales support through customer engagement, product guidance, and upselling",
      "Managed inventory, pricing updates, and new merchandise intake so displays stayed accurate"
    ],
  },
  {
    company: "NE Property Management",
    role: "Leasing Consultant",
    date: "Mar 2021 - Feb 2022",
    bullets: [
      "Managed applications, leases, and resident documentation using OneSite CRM",
      "Conducted tours and followed up with prospective clients to convert leads",
      "Tracked lead pipelines and activity updates using Knock CRM"
    ],
  },
  {
    company: "Addison Group",
    role: "Information Technology Recruiter",
    date: "Jan 2020 - Jun 2020",
    bullets: [
      "Conducted candidate screenings via phone, video, and in-person interviews",
      "Sourced and evaluated candidates using multiple recruiting platforms to support active requisitions",
      "Kept recruiting documentation, pipeline notes, and activity reports accurate and up to date"
    ],
  }
];

export const skillCategories = {
  "Client & Account Support": [
    "Client & Account Management",
    "Customer Experience & Issue Resolution",
    "Sales & Service Support"
  ],
  "Operations & Coordination": [
    "Operations & Workflow Coordination",
    "Scheduling & Task Prioritization",
    "Administrative Operations"
  ],
  "Systems & Records": [
    "CRM & Database Systems (Knock, OneSite, POS Platforms)",
    "Documentation & Records Management",
    "Reporting & Activity Tracking"
  ],
  "Communication & Team Support": [
    "Cross-Functional Communication",
    "Training & Team Support",
    "Client Communication"
  ]
};

export const skills: string[] = [
  "Account Management",
  "Client Support",
  "Customer Experience",
  "Scheduling & Calendar Management",
  "CRM (OneSite, Knock)",
  "Documentation & Records Management",
  "Operational Coordination",
  "Cross-Functional Communication",
  "Sales Support",
  "Recruiting & Screening",
  "Inventory Management",
  "Training & Onboarding"
];

export const education = {
  degree: "Bachelor of Arts & Sciences",
  institution: "University of Oklahoma",
  date: "2016 - 2019",
};

export const certifications: string[] = [];
