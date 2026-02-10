
import { CVData } from './types';

export const CV_DATA: CVData = {
  name: "Muhammed Rahees",
  phone: "+91 8592841557",
  email: "muhammedrahees159@gmail.com",
  linkedin: "linkedin.com/in/muhammed-rahees",
  github: ["https://github.com/MHDRAHEES", "https://github.com/RAHEES55"],
  summary: "Frontend Developer and ERP Technical Support Specialist with experience in React-based UI development, API integration, ERP system support, troubleshooting, and cross-module business operations.",
  experience: [
    {
      role: "Front-End Developer",
      company: "Polosys Technologies",
      location: "Kakkanchery, Kerala",
      period: "June 2025 – Present",
      highlights: [
        "Developed responsive ERP interfaces using React, Next.js, and TypeScript",
        "Integrated REST APIs for ticketing, e-commerce, and accounting modules",
        "Improved application performance by optimizing rendering and bundles",
        "Built reusable components and followed Git-based workflows"
      ]
    },
    {
      role: "ERP Technical Support Specialist",
      company: "Polosys Technologies",
      location: "Kakkanchery, Kerala",
      period: "Feb 2024 – Apr 2025",
      highlights: [
        "Provided ERP configuration, access control, and role management support",
        "Monitored system performance, backups, and operational stability",
        "Coordinated with developers and consultants for issue resolution"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techolas Technologies",
      location: "Calicut, Kerala",
      period: "Jun 2023 – Jan 2024",
      highlights: [
        "Built web applications using React, Node.js, Express.js, and MongoDB",
        "Developed secure REST APIs and integrated frontend authentication"
      ]
    }
  ],
  projects: [
    {
      title: "Polosys Books — Accounting & Billing SaaS",
      description: "A comprehensive financial management platform.",
      features: [
        "Developed UI modules for invoices, clients, expenses, and payments",
        "Integrated authentication and role-based access using APIs"
      ],
      techStack: ["React", "Next.js", "REST APIs", "TypeScript"]
    },
    {
      title: "Polosys ERP — Ticketing Module",
      description: "Support and tracking system for enterprise operations.",
      features: [
        "Built ticket creation, assignment, and status tracking interfaces",
        "Integrated API-driven workflows with role-based permissions"
      ],
      techStack: ["React", "Node.js", "Context API"]
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Firebase", "AWS", "Vercel", "Netlify", "VS Code"]
    }
  ],
  education: {
    degree: "B.Com Computer Application",
    period: "2018 – 2021",
    institution: "University of Calicut — M.A.O Arts and Science College, Elayoor"
  },
  languages: ["English", "Malayalam"]
};
