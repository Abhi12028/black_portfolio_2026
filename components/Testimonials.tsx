import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { StaggerContainer, StaggerItem } from './ui/Motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {PORTFOLIO_DATA.testimonials.map((test, index) => (
            <StaggerItem key={test.name} className="relative">
              <div className="absolute -top-10 -left-6 text-[10rem] font-serif text-white/[0.03] leading-none pointer-events-none">“</div>
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 relative z-10">
                {test.text}
              </p>
              <div className="flex items-center gap-6">
                <img src={test.avatar} alt={test.name} className="w-16 h-16 rounded-full grayscale border border-white/10" />
                <div>
                  <h4 className="font-bold text-lg">{test.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-white/40">{test.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
