export type ProjectType = "AI" | "Web" | "Data" | "ML" | "Cloud";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  type: ProjectType;
  highlights: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  id: string;
  category: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  field: string;
  graduationYear: string;
  details?: string;
}

export interface Stat {
  label: string;
  value: string;
  unit?: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}
