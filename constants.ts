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
      link: "#",
      client: "Open Source / European E-Invoicing",
      challenge: "Validating European e-invoices (XRechnung and ZUGFeRD) requires strict adherence to official EN 16931 and KoSIT Schematron rule sets. Standard validators produce cryptic XML parser error logs that make line-item debugging difficult for finance and engineering teams.",
      solution: "Built Invora as a pure, high-performance validation engine in Python using SaxonC XSLT 3.0. It detects XML syntax (UBL, CII, or embedded PDF streams), runs pinned Schematron rule suites, and maps failure SVRL node paths into clear English and German explanations specifying the exact XML element to fix.",
      galleryImages: [
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "2",
      title: "Puma Data Warehouse",
      category: "Data Engineering / Cloud DW",
      description: "Designed and optimized ETL workflows, automated data processing, and improved pipeline performance for enterprise-scale data operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["Snowflake", "SQL", "Python", "ETL"],
      link: "#",
      client: "Enterprise Data Systems",
      challenge: "Enterprise operations generated vast streams of data, causing query performance bottlenecks and data consistency issues across reporting platforms.",
      solution: "Architected a cloud data warehouse on Snowflake utilizing Snowpark Python, Dynamic Tables, and automated tasks to accelerate pipeline execution and ensure reliable analytics.",
      galleryImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
      ]
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
