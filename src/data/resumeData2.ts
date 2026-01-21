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
  main: "Operations and client support professional with experience in account management, coordination, sales support, recruiting, and service leadership. Known for organized workflows, accurate records, and responsive client experiences in fast-paced environments. Strengths include communication, scheduling, and operational follow-through."
};

export const keyAchievements: string[] = [
  "Managed workflows, documentation, and cross-functional coordination to deliver consistent client and customer experiences",
  "Handled scheduling, communication, and operational follow-through in fast-paced environments",
  "Coordinated educational programming and community events as The Buddy Bench team leader"
];

export const experiences: Experience[] = [
  {
    company: "Skywalker Marketing | West Hollywood, CA",
    role: "Talent Agent (Remote)",
    date: "Feb 2025 - Present",
    bullets: [
      "Manage assigned accounts as primary point of contact, coordinating daily communication, requests, and follow-ups",
      "Maintain organized workflows, documentation, and messaging systems to ensure timely service delivery",
      "Support revenue initiatives by coordinating outreach, tracking activity, and ensuring accurate information flow",
      "Collaborate with operations, marketing, and sales to align priorities and streamline processes",
      "Monitor activity to identify issues, improve efficiency, and maintain consistent service quality"
    ],
  },
  {
    company: "Kam's Kookery | Oklahoma",
    role: "Lead Bartender - Banquet Services",
    date: "Aug 2024 - Jan 2025",
    bullets: [
      "Delivered high-volume service during large-scale events while maintaining a positive guest experience",
      "Coordinated bar setup, breakdown, inventory, and supplies to ensure smooth operations",
      "Ensured compliance with safety, service, and alcohol regulations"
    ],
  },
  {
    company: "Yo Pablo | Oklahoma",
    role: "Lead Bartender",
    date: "Aug 2023 - Jul 2024",
    bullets: [
      "Led front-of-house bar operations during high-volume service periods while maintaining strong customer experience",
      "Supported training and onboarding of new staff to ensure consistent service standards",
      "Assisted with inventory tracking, restocking, and daily operational coordination"
    ],
  },
  {
    company: "Central LLC",
    role: "Family Assistant",
    date: "Jan 2023 - Aug 2023",
    bullets: [
      "Coordinated schedules, logistics, and task prioritization to support daily operations",
      "Managed online sales listings, customer inquiries, transactions, and follow-ups"
    ],
  },
  {
    company: "Live Boho",
    role: "Sales & Marketing Associate",
    date: "Feb 2022 - Jun 2022",
    bullets: [
      "Supported sales operations through customer engagement and strategic upselling",
      "Managed inventory, pricing updates, and new merchandise intake"
    ],
  },
  {
    company: "NE Property Management",
    role: "Leasing Consultant",
    date: "Mar 2021 - Feb 2022",
    bullets: [
      "Managed applications, leases, and resident documentation using OneSite CRM",
      "Conducted tours and followed up with prospective clients to convert leads",
      "Tracked and maintained lead pipelines using Knock CRM"
    ],
  },
  {
    company: "Addison Group",
    role: "Information Technology Recruiter",
    date: "Jan 2020 - Jun 2020",
    bullets: [
      "Conducted candidate screenings via phone, video, and in-person interviews",
      "Sourced and evaluated candidates using multiple recruiting platforms",
      "Maintained accurate recruiting documentation and activity reports"
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
    "Documentation & Records Management"
  ],
  "Communication & Team Support": [
    "Cross-Functional Communication",
    "Training & Team Support"
  ]
};

export const skills: string[] = [];

export const education = {
  degree: "Bachelor of Arts & Sciences",
  institution: "University of Oklahoma",
  date: "2016 - 2019",
};

export const certifications: string[] = [];
