import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { SlideUp, StaggerContainer, StaggerItem } from './ui/Motion';
import { TiltCard } from './ui/TiltCard';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8 text-center">
              05 // Career Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-center mb-6">
              Work Experience
            </h2>
            <div className="flex justify-center mb-16">
              <span className="px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                Incentius · 2 yrs 1 mo Total Impact
              </span>
            </div>
          </SlideUp>

          {/* Timeline Wrapper */}
          <div className="relative pl-6 md:pl-10 border-l-2 border-gradient-to-b border-cyan-500/40 space-y-12">
            {/* Glowing Vertical Line Gradient Track */}
            <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-cyan-500/20 shadow-[0_0_10px_#38bdf8]"></div>

            <StaggerContainer className="space-y-12">
              {PORTFOLIO_DATA.experience.map((exp, expIdx) => (
                <StaggerItem key={expIdx} className="relative">
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_12px_#38bdf8] z-20">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full rounded-full bg-cyan-300"
                    />
                  </div>

                  <TiltCard className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.01] hover:border-cyan-400/40 hover:bg-white/[0.03] transition-colors duration-500 shadow-xl hover:shadow-cyan-500/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                            {exp.role.includes("Intern") ? "Internship" : "Full-Time"}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-outfit font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          <span className="text-cyan-400 font-mono text-sm font-semibold tracking-wider uppercase">
                            {exp.company}
                          </span>
                          {exp.location && (
                            <span className="text-xs text-white/50 font-light flex items-center gap-1">
                              <span>📍</span> {exp.location}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 text-xs font-mono text-cyan-300 bg-cyan-500/10 w-fit shrink-0 shadow-sm">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-white/70 text-base leading-relaxed font-light mb-8">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                          Key Deliverables & Impact
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {exp.highlights.map((highlight, idx) => (
                            <motion.div 
                              key={idx} 
                              whileHover={{ x: 3 }}
                              className="flex items-start gap-3 text-sm text-white/80 font-light p-2 rounded-md hover:bg-white/5 transition-colors"
                            >
                              <span className="text-cyan-400 mt-1 text-xs">◆</span>
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="pt-4 border-t border-white/5 flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono text-white/40 mr-2">Core Tech:</span>
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 rounded-md border border-white/10 text-xs font-mono text-cyan-300/90 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
