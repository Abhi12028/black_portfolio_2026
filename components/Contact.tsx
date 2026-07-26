import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, SlideUp } from './ui/Motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8">
            06 // Get In Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-outfit font-black tracking-tight mb-6 uppercase">
            Let's connect and build <br /> <span className="text-cyan-300">something meaningful.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-16 font-light">
            Open for opportunities in Data Engineering, Snowflake solutions, and software development.
          </p>
        </FadeIn>

        <SlideUp delay={0.3} className="max-w-2xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-white/[0.01] p-8 md:p-12 rounded-2xl border border-white/10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/15 py-3 focus:border-cyan-400 outline-none transition-colors text-white" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/15 py-3 focus:border-cyan-400 outline-none transition-colors text-white" placeholder="john@example.com" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/15 py-3 focus:border-cyan-400 outline-none transition-colors resize-none text-white" placeholder="How can I help you?"></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full py-4 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-cyan-300 transition-all rounded-sm shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </SlideUp>

        <FadeIn delay={0.5} className="mt-20 flex flex-wrap justify-center items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/60">
          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email
          </a>
          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
          >
            GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
