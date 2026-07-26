import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8 text-center">
              05 // Professional History
            </span>
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-center mb-16">
              Work Experience
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <StaggerItem
                key={exp.company}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.01] hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-outfit font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400/80 font-mono text-sm font-semibold tracking-wider uppercase mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/50 bg-white/5 w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-white/70 text-base leading-relaxed font-light mb-8">
                  {exp.description}
                </p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                      Key Highlights & Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-white/80 font-light">
                          <span className="text-cyan-400 mt-1 text-xs">◆</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Experience;
