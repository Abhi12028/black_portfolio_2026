
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  client?: string;
  challenge?: string;
  solution?: string;
  galleryImages?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  heroSubtitle: string;
  about: string[];
  goal: string;
  services: Service[];
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  testimonials?: Testimonial[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio?: string;
  };
}

