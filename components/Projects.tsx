
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-40 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block underline decoration-white/20 underline-offset-8">
              02 // Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-outfit font-bold">Featured Projects</h2>
          </div>
          <p className="max-w-xs text-white/40 text-sm tracking-wide">
            A collection of digital artifacts crafted with precision and passion between 2021 and 2024.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center reveal`}
            >
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden aspect-video bg-white/5 cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">{project.category}</p>
                <h3 className="text-4xl md:text-5xl font-outfit font-bold mb-6 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-lg text-white/50 mb-8 max-w-lg leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-block pb-1 border-b-2 border-white/20 hover:border-white transition-all text-sm font-bold uppercase tracking-[0.2em]">
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
