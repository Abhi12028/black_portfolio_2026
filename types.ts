
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
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
  about: string;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  testimonials: Testimonial[];
}
