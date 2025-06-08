#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { Resume } from "./types";

const resume: Resume = {
  name: "Devansh Verma",
  title: "Full Stack Developer",
  contact: {
    email: "devanshverma1609.@gmail.com",
    phone: "+91 9027669472",
    linkedin: "https://www.linkedin.com/in/devanshverma09",
    github: "https://github.com/devansh193",
    location: "New Delhi, India",
  },
  education: [
    {
      degree: "Bachelor of Technology",
      major: "Artificial Intelligence and Machine Learning",
      school: "Galgotias College Of Engineering And Technology",
      year: "2025",
    },
    {
      degree: "10+2",
      major: "PCM + Computer Science",
      school: "St. Joseph's Convent School",
      year: "2020",
    },
  ],
  skills: {
    Frameworks: ["React", "Next.js", "Node.js", "Express"],
    Languages: ["JavaScript", "TypeScript"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    Tools: ["Git", "Docker", "AWS", "CI/CD", "REST APIs"],
    SoftSkills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Time Management",
      "Adaptability",
    ],
  },
  projects: [
    {
      name: "testify",
      description:
        "Interactive platform for businesses to collect and showcase user testimonials enhancing credibility and trust. Integrated secure authentication with NextAuthjs and Recoil reducing login-related errors by 40% and improving session reliability. Conceptualized customer review templates offering customizable question sets and interactive interfaces boosting response submissions by 75 completed forms in the first week. Public testimonial page generator where users can view and leave reviews driving engagement, Dashboard for managing testimonials and insights, designed with a focus on UX and accessibility.",
      technologies: [
        "Nextjs",
        "Typescript",
        "Tailwindcss",
        "Recoil",
        "NextAuth.js",
        "Shadcn/ui",
      ],
      link: "https://github.com/devansh193/testify",
    },
    {
      name: "Tube",
      description:
        "Engineered a full-stack video streaming platform featuring Nextjs, tRPC achieving a 90 percent reduction in video loading times via server-side prefetching for optimal playback experience. Leveraged MUX for adaptive streaming and video optimization, reducing buffering by 70% and supporting 1000+ concurrent users. Designed a scalable architecture with background jobs for video processing, database optimizations to support hight-concurrency workload.",
      technologies: [
        "Nextjs",
        "Typescript",
        "tRPC",
        "Tanstack Query",
        "MUX",
        "Tailwindcss",
        "Shadcn/ui",
        "Drizzle ORM",
        "Clerk Auth",
        "Redis",
      ],
      link: "https://github.com/devansh193/tube",
    },
  ],
};

function displayResume(): void {
  console.clear();

  // Header
  const nameLine = chalk.bold.cyan(resume.name);
  const titleLine = chalk.white(resume.title);
  const header: string = `${nameLine}\n${titleLine}`;

  // Contact
  const contactLine = `📧 ${resume.contact.email}  📶 ${resume.contact.phone}  💼 ${resume.contact.linkedin}  🐙 ${resume.contact.github}`;

  const contact = contactLine;

  // Education
  let educationText: string = chalk.yellow.bold("\nEDUCATION\n");
  resume.education.forEach((edu, index) => {
    educationText +=
      chalk.cyanBright(`${edu.school} (${edu.year})\n`) +
      chalk.white(`${edu.degree} (${edu.major})\n`);

    if (index !== resume.education.length - 1) {
      educationText += chalk.gray(`\n`);
    }
  });

  const skillsText: string =
    chalk.yellow.bold("\nSKILLS\n") +
    Object.keys(resume.skills)
      .map((category) => {
        const items = (resume.skills as any)[category] as string[];
        return `${chalk.cyan.bold(`${category}:`)} ${chalk.white(
          items.join(", ")
        )}`;
      })
      .join("\n");

  const projectText: string =
    chalk.yellow.bold("\nPROJECTS\n") +
    resume.projects
      .map((project) => {
        const techStack = project.technologies.join(", ");
        const header = chalk.bold.cyan(`${project.name} | ${techStack}`);

        const points = project.description
          .split(/\. ?/)
          .filter((line) => line.trim().length > 0)
          .map((line) => chalk.white(`• ${line.trim()}.`))
          .join("\n");

        return `${header}\n${points}`;
      })
      .join("\n\n");

  const fullResume: string = `${header}\n${contact}\n${educationText}\n${skillsText}\n${projectText}`;

  console.log(
    boxen(fullResume, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
    })
  );

  console.log(
    chalk.gray(
      "\n💡 Tip: You can also visit my github to see some of my other projects!"
    )
  );
}

displayResume();
