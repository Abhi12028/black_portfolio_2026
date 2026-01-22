import React from 'react';
import { FadeIn, SlideUp } from './ui/Motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-48 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8 block">
            05 // Get in touch
          </span>
          <h2 className="text-5xl md:text-9xl font-outfit font-black tracking-tighter mb-16 uppercase hover:text-white/20 transition-all cursor-pointer">
            Let's Build <br /> Something New.
          </h2>
        </FadeIn>

        <SlideUp delay={0.3} className="max-w-2xl mx-auto mt-24">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-colors" placeholder="john@example.com" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-colors resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <div className="md:col-span-2 pt-8">
              <button className="w-full py-6 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-white/90 transition-all">
                Send Message
              </button>
            </div>
          </form>
        </SlideUp>

        <FadeIn delay={0.6} className="mt-40 flex flex-wrap justify-center gap-12 text-xs font-bold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
