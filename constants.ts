
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "ABHISHEK SUTAR",
  title: "Principal Creative Developer",
  about: "Bridging the gap between design and engineering. I specialize in building high-performance web applications with a focus on immersive user experiences and scalable architecture. With over 8 years of experience in the digital space, I transform complex problems into elegant solutions.",
  projects: [
    {
      id: "1",
      title: "Quantum Flux Dashboard",
      category: "FinTech / SaaS",
      description: "A real-time analytics engine for high-frequency crypto trading with sub-100ms latency visualization.",
      image: "https://picsum.photos/seed/dash/1200/800",
      tags: ["React", "TypeScript", "D3.js", "WebSockets"],
      link: "#"
    },
    {
      id: "2",
      title: "Aether OS",
      category: "Web OS / Experimental",
      description: "A browser-based operating system concept featuring a custom window manager and file system integration.",
      image: "https://picsum.photos/seed/aether/1200/800",
      tags: ["Three.js", "Rust", "WebAssembly", "Tailwind"],
      link: "#"
    },
    {
      id: "3",
      title: "Vanguard E-Commerce",
      category: "Digital Retail",
      description: "High-end luxury fashion store with dynamic layout engine and AR try-on features.",
      image: "https://picsum.photos/seed/vanguard/1200/800",
      tags: ["Next.js", "Shopify Engine", "Framer Motion"],
      link: "#"
    }
  ],
  skills: [
    { name: "Frontend Architecture", level: 95, icon: "Layout" },
    { name: "Creative Engineering", level: 90, icon: "Sparkles" },
    { name: "TypeScript / Node.js", level: 98, icon: "Code" },
    { name: "Cloud Infrastructure", level: 85, icon: "Cloud" },
    { name: "UI/UX Strategy", level: 92, icon: "PenTool" }
  ],
  experience: [
    {
      company: "Stellar Systems",
      role: "Lead Frontend Engineer",
      period: "2021 — Present",
      description: "Leading a team of 12 engineers in reimagining the core product architecture using modern micro-frontend patterns."
    },
    {
      company: "Nebula Creative",
      role: "Senior Fullstack Developer",
      period: "2018 — 2021",
      description: "Delivered award-winning digital experiences for Fortune 500 clients, focusing on interactive storytelling."
    },
    {
      company: "Orbit Digital",
      role: "Web Developer",
      period: "2016 — 2018",
      description: "Developed responsive web applications and managed large-scale CMS migrations."
    }
  ],
  testimonials: [
    {
      name: "Sarah Jenkins",
      role: "CTO @ Peak Flow",
      text: "Alexander is a rare talent who understands both the aesthetic and technical requirements of high-scale products. His work on our dashboard was transformative.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Marcus Thorne",
      role: "Founder @ Aura Labs",
      text: "Exceptional eye for detail. The animations and performance of the site he built for us are regularly cited as industry-leading by our users.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    }
  ]
};
