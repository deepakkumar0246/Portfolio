// ─── Education ───────────────────────────────────────────────────────────────
export type Education = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  status: string;
  description?: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    institution: "Galgotias University",
    degree: "B.Tech",
    field: "Computer Science Engineering",
    status: "Ongoing",
    description:
      "Studying core CS subjects including data structures, algorithms, operating systems, and software engineering.",
  },
  {
    id: 2,
    institution: "High School, Buxar",
    degree: "Higher Secondary (Class XII) & Secondary (Class X)",
    field: "Science",
    status: "Completed",
    description:
      "Completed both secondary and higher-secondary education from Buxar, Bihar.",
  },
];

// ─── Achievements / Hackathons ────────────────────────────────────────────────
export type Achievement = {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Participant — Smart India Hackathon (SIH)",
    event: "Galgotias University",
    date: "15–16 Sept 2025",
    description:
      "Participated in the national hackathon, building rapid software solutions for real-world problem statements as part of a core dev team under time constraints.",
  },
  {
    id: 2,
    title: "Participant — Code Astra Hackathon",
    event: "Galgotias University",
    date: "5–6 April 2025",
    description:
      "Two-day on-campus programming sprint focused on building prototype code and fast-paced product integration.",
  },
  {
    id: 3,
    title: "LeetCode 50 Days Badge",
    event: "LeetCode",
    date: "29 Dec 2025",
    description:
      "Awarded for consistency and proficiency solving DSA problems in Java over 50 days.",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export type Certification = {
  id: number;
  title: string;
  issuer: string;
  description?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    description:
      "Certified in SQL fundamentals, relational database design, and query programming.",
  },
  {
    id: 2,
    title: "Coding Certificate (C & Java)",
    issuer: "GUVI Geek Network",
    description: "Certification covering programming fundamentals in C and Java.",
  },
];
