
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-40 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block underline decoration-white/20 underline-offset-8 text-center reveal">
            04 // Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-outfit font-bold text-center mb-24 reveal">Career Path</h2>
          
          <div className="space-y-0">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div key={exp.company} className="group relative grid grid-cols-1 md:grid-cols-12 py-16 border-b border-white/5 hover:bg-white/[0.01] transition-colors reveal">
                <div className="md:col-span-3 mb-4 md:mb-0">
                  <span className="text-sm font-mono text-white/30">{exp.period}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold font-outfit mb-1">{exp.company}</h3>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">{exp.role}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-white/50 text-base leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
