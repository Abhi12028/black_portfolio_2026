import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { StaggerContainer, StaggerItem, FadeIn, SlideUp } from './ui/Motion';

const Hero: React.FC = () => {
  const nameParts = PORTFOLIO_DATA.name.split(' ');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <HeroBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-cyan-300">
                {PORTFOLIO_DATA.title}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="font-outfit font-black text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] tracking-tighter uppercase mb-2">
            {nameParts.map((word, idx) => (
              <StaggerItem key={idx} className="block last:text-white/30">
                {word.split('').map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + (idx * 0.2) + (charIdx * 0.04),
                      ease: [0.215, 0.610, 0.355, 1.000]
                    }}
                    className="inline-block origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4">
            <SlideUp delay={1.0} className="max-w-2xl">
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                {PORTFOLIO_DATA.heroSubtitle}
              </p>
            </SlideUp>

            <FadeIn delay={1.2}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-lg hover:shadow-cyan-500/20 rounded-sm"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 border border-white/20 hover:border-cyan-400/60 text-white text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Resume download link placeholder. Replace with your actual resume file path.");
                  }}
                  className="px-6 py-3.5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest hover:text-white hover:border-white/30 transition-all rounded-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Resume
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
