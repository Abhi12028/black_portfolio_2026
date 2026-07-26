import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "ABHISHEK SUTAR",
  title: "Solution Developer | Data Engineer | Snowflake Enthusiast",
  heroSubtitle: "I build scalable data solutions, automate workflows, and develop modern web applications. Passionate about transforming raw data into meaningful insights using SQL, Python, Snowflake, and cloud technologies.",
  about: [
    "I'm Abhishek Sutar, a Solution Developer with hands-on experience in Data Engineering, ETL automation, SQL development, and full-stack web applications.",
    "Over the past year, I've worked on building automation pipelines, optimizing database processes, and developing applications using Python, Flask, Vue.js, Docker, and PostgreSQL. My experience includes improving ETL workflows, ensuring data integrity, and creating scalable backend solutions.",
    "Currently, I'm expanding my expertise in Snowflake, modern data architecture, cloud technologies, and analytics engineering while continuously learning industry best practices.",
    "I enjoy solving complex technical problems and building efficient systems that deliver real business value."
  ],
  goal: "I'm focused on becoming a skilled Data Engineer, specializing in Snowflake, cloud data platforms, and scalable data infrastructure. I believe in continuous learning, writing clean code, and building solutions that make an impact.",
  services: [
    {
      title: "Data Engineering",
      description: "Designing and optimizing ETL pipelines, SQL transformations, and scalable data workflows.",
      icon: "Database"
    },
    {
      title: "Snowflake",
      description: "Building modern cloud data warehouse solutions using Snowflake, Snowpark, Dynamic Tables, Streams, Tasks, and data sharing.",
      icon: "Cloud"
    },
    {
      title: "Backend Development",
      description: "Developing secure and scalable REST APIs using Python and Flask.",
      icon: "Server"
    },
    {
      title: "Frontend Development",
      description: "Building responsive user interfaces with Vue.js, Quasar Framework, HTML, CSS, and JavaScript.",
      icon: "Layout"
    },
    {
      title: "Database Design",
      description: "Working with PostgreSQL, MySQL, and Snowflake to create efficient and reliable data models.",
      icon: "Layers"
    },
    {
      title: "Automation",
      description: "Automating repetitive workflows to improve efficiency, reduce manual effort, and increase reliability.",
      icon: "Cpu"
    }
  ],
  projects: [
    {
      id: "1",
      title: "Invora",
      category: "E-Invoice Validator & Core Engine",
      description: "A free, GDPR-compliant web validator engine for German/European e-invoices (XRechnung & ZUGFeRD/Factur-X). Implements official EN 16931 & KoSIT Schematron rule sets via SaxonC XSLT 3.0 to explain failure rules in plain language with exact XML locations.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "FastAPI", "Schematron", "SaxonC", "Docker", "Jinja2"],
      link: "#"
    },
    {
      id: "2",
      title: "Puma Data Warehouse",
      category: "Data Engineering / Cloud DW",
      description: "Designed and optimized ETL workflows, automated data processing, and improved pipeline performance for enterprise-scale data operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["Snowflake", "SQL", "Python", "ETL"],
      link: "#"
    },
    {
      id: "3",
      title: "AnimeFlix",
      category: "Full-Stack OTT Platform",
      description: "A full-stack OTT platform designed for anime enthusiasts featuring authentication, content browsing, and responsive UI.",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "PostgreSQL", "JavaScript"],
      link: "#"
    },
    {
      id: "4",
      title: "HP Tattoo",
      category: "Modern Web Design",
      description: "Modern landing page with responsive design, SEO optimization, and smooth user experience.",
      image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#"
    }
  ],
  skillCategories: [
    {
      category: "Languages",
      skills: ["Python", "SQL", "JavaScript", "Java"]
    },
    {
      category: "Data Engineering",
      skills: ["Snowflake", "ETL", "Data Warehousing", "Data Modeling", "SQL Optimization", "Snowpark", "Dynamic Tables", "Streams", "Tasks"]
    },
    {
      category: "Backend",
      skills: ["Flask", "REST APIs", "Docker"]
    },
    {
      category: "Frontend",
      skills: ["Vue.js", "Quasar", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Databases",
      skills: ["Snowflake", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Linux", "VS Code", "Postman"]
    }
  ],
  experience: [
    {
      company: "Incentius",
      role: "Solution Developer Intern",
      period: "Internship",
      description: "Worked on enterprise applications and data engineering solutions by developing automation scripts, optimizing ETL workflows, improving database performance, and building scalable web applications.",
      highlights: [
        "Developed and optimized ETL workflows.",
        "Automated repetitive business processes.",
        "Built backend services using Flask.",
        "Developed frontend features using Vue.js and Quasar.",
        "Improved data integrity and processing efficiency.",
        "Worked with Docker and relational databases."
      ]
    }
  ],
  contact: {
    email: "abhishek.sutar@example.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  }
};
