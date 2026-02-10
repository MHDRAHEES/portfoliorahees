
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CVData {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string[];
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: {
    degree: string;
    period: string;
    institution: string;
  };
  languages: string[];
}
