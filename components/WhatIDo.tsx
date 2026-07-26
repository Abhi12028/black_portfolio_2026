import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

const WhatIDo: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#060606] border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8">
                02 // Core Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tight">
                What I Do
              </h2>
            </div>
            <p className="max-w-md text-white/50 text-base leading-relaxed font-light">
              Specialized in building end-to-end data pipelines, modern cloud database solutions, automated workflows, and robust software architectures.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <StaggerItem
              key={service.title}
              className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-cyan-400/60 font-semibold tracking-widest">
                    0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-300"></div>
                </div>

                <h3 className="text-2xl font-outfit font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white/80 transition-colors">
                <span>Specialization</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatIDo;
