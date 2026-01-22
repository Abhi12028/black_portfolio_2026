import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block underline decoration-white/20 underline-offset-8">
              03 // Arsenal
            </span>
            <h2 className="text-5xl font-outfit font-bold mb-8">Technical Expertise</h2>
            <p className="text-white/40 leading-relaxed">
              Leveraging modern technologies to build resilient, scalable, and delightful digital products.
            </p>
          </FadeIn>

          <StaggerContainer className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <StaggerItem key={skill.name} className="group p-8 border border-white/5 hover:border-white/20 transition-all bg-white/[0.01]">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold uppercase tracking-wider">{skill.name}</h4>
                  <span className="text-sm font-mono text-white/30">{skill.level}%</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-1000 ease-in-out group-hover:opacity-100 opacity-30"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
