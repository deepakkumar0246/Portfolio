import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "mobile-repair",
    category: "Management System",
    title: "Mobile Repairing System",
    // TODO: replace placeholder screenshot with a real screenshot once available
    src: `${BASE_PATH}/mobile-repair/landing.png`,
    screenshots: ["landing.png"],
    // TODO: confirm tech stack — update PROJECT_SKILLS entries if different
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.java, PROJECT_SKILLS.mysql],
    },
    // TODO: replace with your actual GitHub repo URL
    github: "https://github.com/your-github-username/mobile-repairing-system",
    // live: undefined — no live demo yet; add once deployed
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A management system for tracking mobile device repair jobs, customers,
            and inventory. Built to streamline the day-to-day operations of a repair
            shop — from logging incoming devices to tracking repair status and billing.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2 text-muted-foreground">
            <li>Track repair jobs from intake to completion</li>
            <li>Manage customer records and device history</li>
            <li>Inventory management for parts and accessories</li>
            <li>Billing and invoice generation</li>
          </ul>
          {/* TODO: add real screenshots and update SlideShow paths below */}
          <SlideShow images={[`${BASE_PATH}/mobile-repair/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "hospital-management",
    category: "Management System",
    title: "Hospital Management System",
    // TODO: replace placeholder screenshot with a real screenshot once available
    src: `${BASE_PATH}/hospital-management/landing.png`,
    screenshots: ["landing.png"],
    // TODO: confirm tech stack — update PROJECT_SKILLS entries if different
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.java, PROJECT_SKILLS.mysql],
    },
    // TODO: replace with your actual GitHub repo URL
    github: "https://github.com/your-github-username/hospital-management-system",
    // live: undefined — no live demo yet; add once deployed
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A system to manage patient records, appointments, and hospital staff data.
            Designed to reduce paperwork and centralise information for a small hospital
            or clinic, making day-to-day administration more efficient.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2 text-muted-foreground">
            <li>Patient registration and medical record management</li>
            <li>Appointment scheduling and doctor assignment</li>
            <li>Staff and department management</li>
            <li>Basic reporting and data export</li>
          </ul>
          {/* TODO: add real screenshots and update SlideShow paths below */}
          <SlideShow images={[`${BASE_PATH}/hospital-management/landing.png`]} />
        </div>
      );
    },
  },
];

export default projects;
