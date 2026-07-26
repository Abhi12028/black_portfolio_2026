import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { SlideUp, FadeIn } from './ui/Motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <SlideUp delay={0.2} className="lg:col-span-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8">
                01 // Background & Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-10 leading-tight">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                {PORTFOLIO_DATA.about.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </SlideUp>

          <FadeIn delay={0.4} className="lg:col-span-5 h-full flex flex-col gap-6">
            <div className="relative aspect-[4/4] rounded-xl overflow-hidden group border border-white/10">
              <img
                src="/profile.png"
                alt="Abhishek Sutar"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  Abhishek Sutar
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Solution Developer | Data Engineer
                </p>
              </div>
            </div>

            {/* My Goal Card */}
            <div className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-black to-slate-900/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full filter blur-xl"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300 block mb-3">
                🎯 Career Focus & Goal
              </span>
              <p className="text-sm text-white/80 leading-relaxed font-light italic">
                "{PORTFOLIO_DATA.goal}"
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
