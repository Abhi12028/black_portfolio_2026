
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-white/40 animate-[fadeIn_1s_ease-out]">
            {PORTFOLIO_DATA.title}
          </p>
          <h1 className="font-outfit font-black text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tighter uppercase mb-6 animate-[slideUp_1.2s_ease-out]">
            {PORTFOLIO_DATA.name.split(' ').map((word, idx) => (
              <span key={idx} className="block last:text-white/20">
                {word}
              </span>
            ))}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8 animate-[fadeIn_1.5s_ease-out]">
            <p className="max-w-md text-white/50 text-lg leading-relaxed">
              Crafting premium digital experiences through high-performance engineering and minimal aesthetic design.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#projects" className="group flex items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">Scroll to View</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
