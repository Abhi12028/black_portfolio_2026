import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-36 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8">
            04 // Technical Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-outfit font-bold">
            Skills & Arsenal
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl font-light">
            Comprehensive skill set spanning data engineering, cloud data platforms, backend APIs, and modern frontend technologies.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <StaggerItem
              key={cat.category}
              className="group p-8 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-outfit font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cat.category}
                </h3>
                <span className="text-xs font-mono text-cyan-400/60 font-semibold">
                  {cat.skills.length} Technologies
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200 text-xs font-mono text-white/80 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
