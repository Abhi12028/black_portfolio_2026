import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { SlideUp, FadeIn } from './ui/Motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <SlideUp delay={0.2} className="w-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block underline decoration-white/20 underline-offset-8">
                01 // The Vision
              </span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-10 leading-tight">
                Designing the future <br /> of the web.
              </h2>
              <div className="space-y-6 text-xl text-white/60 leading-relaxed font-light">
                <p>{PORTFOLIO_DATA.about}</p>
                <p>
                  I believe that digital interactions should be as fluid as nature and as precise as clockwork.
                  My methodology revolves around "Invisible Engineering" — where the complexity remains hidden behind a seamless, high-performance interface.
                </p>
              </div>
            </div>
          </SlideUp>

          <FadeIn delay={0.4} className="w-full h-full">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src="https://picsum.photos/seed/portrait/800/1000"
                alt="Profile"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 p-6 bg-black/80 backdrop-blur-md border border-white/10 max-w-xs">
                <p className="text-sm font-medium italic text-white/80">
                  "Simplicity is the ultimate sophistication."
                </p>
                <p className="text-xs uppercase tracking-tighter mt-4 text-white/40">Nexus Digital Architecture</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
