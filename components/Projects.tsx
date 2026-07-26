import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-36 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8">
                03 // Portfolio Showcase
              </span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold">Featured Projects</h2>
            </div>
            <p className="max-w-xs text-white/50 text-sm tracking-wide font-light">
              Enterprise data warehousing, full-stack applications, and responsive web platforms.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-24">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <StaggerItem
              key={project.id}
              className={`group flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center border border-white/5 rounded-2xl p-6 lg:p-10 bg-white/[0.01] hover:bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-500`}
            >
              <div className="flex-1 w-full overflow-hidden rounded-xl">
                <Link to={`/project/${project.id}`} className="group relative overflow-hidden aspect-video bg-white/5 cursor-pointer block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="flex-1">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-4">{project.category}</p>
                <h3 className="text-3xl md:text-4xl font-outfit font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-base text-white/70 mb-6 max-w-lg leading-relaxed font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3.5 py-1 border border-white/10 text-xs font-mono font-semibold uppercase tracking-wider text-white/70 rounded-full bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 hover:text-white transition-all group-hover:translate-x-1 duration-300">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
