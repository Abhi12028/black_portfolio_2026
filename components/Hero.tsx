import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { StaggerContainer, StaggerItem, FadeIn, SlideUp } from './ui/Motion';

const Hero: React.FC = () => {
  const letters = PORTFOLIO_DATA.name.split(' ');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <HeroBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-4">
          <FadeIn delay={0.2}>
            <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-white/40">
              {PORTFOLIO_DATA.title}
            </p>
          </FadeIn>

          <StaggerContainer className="font-outfit font-black text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tighter uppercase mb-6">
            {letters.map((word, idx) => (
              <StaggerItem key={idx} className="block last:text-white/20">
                {word.split('').map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + (idx * 0.3) + (charIdx * 0.05),
                      ease: [0.215, 0.610, 0.355, 1.000]
                    }}
                    className="inline-block origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Add space if not last word, handled by block display but for safety */}
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8">
            <SlideUp delay={1.2} className="max-w-md">
              <p className="text-white/50 text-lg leading-relaxed">
                Crafting premium digital experiences through high-performance engineering and minimal aesthetic design.
              </p>
            </SlideUp>

            <FadeIn delay={1.5}>
              <div className="flex items-center gap-6">
                <a href="#projects" className="group flex items-center gap-4">
                  <motion.span
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.span>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Scroll to View</span>
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
