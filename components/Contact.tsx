import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { FadeIn, SlideUp } from './ui/Motion';
import { TiltCard } from './ui/TiltCard';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'fallback'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = formData;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // 1. If Web3Forms key is configured, send silently via API
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            message,
            subject: `Portfolio Inquiry from ${name}`,
            from_name: 'Nexus Portfolio Contact',
          }),
        });

        const result = await response.json();
        if (result.success) {
          setSubmittedStatus('success');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmittedStatus('idle'), 6000);
          return;
        }
      } catch (err) {
        console.warn('Web3Forms submission error, triggering mailto fallback', err);
      }
    }

    // 2. Direct Mailto Fallback (Opens default mail app pre-filled)
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('fallback');
    setIsSubmitting(false);

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 300);

    setTimeout(() => {
      setSubmittedStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background Accent Glass Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <SlideUp>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 block underline decoration-cyan-400/30 underline-offset-8">
            06 // Get In Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-outfit font-black tracking-tight mb-6 uppercase">
            Let's connect and build <br /> <span className="text-cyan-300">something meaningful.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-16 font-light">
            Open for opportunities in Data Engineering, Snowflake solutions, and software development.
          </p>
        </SlideUp>

        <SlideUp delay={0.2} className="max-w-2xl mx-auto">
          {/* Glassmorphism Form Container */}
          <TiltCard className="p-8 md:p-12 rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-2xl shadow-[0_16px_48px_0_rgba(0,0,0,0.5)] hover:border-cyan-400/40 transition-all duration-500 relative">
            <AnimatePresence>
              {submittedStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl z-30 flex flex-col items-center justify-center p-8 rounded-3xl border border-cyan-400/40"
                >
                  <div className="w-14 h-14 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-4 shadow-[0_0_25px_#38bdf8]">
                    ✓
                  </div>
                  <h3 className="text-2xl font-outfit font-bold text-white mb-2">
                    {submittedStatus === 'success' ? 'Message Sent Successfully!' : 'Opening Email App...'}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 text-center max-w-md leading-relaxed">
                    {submittedStatus === 'success'
                      ? `Your message has been sent directly to ${PORTFOLIO_DATA.contact.email}. I will reply shortly!`
                      : `Opening your email application to send directly to ${PORTFOLIO_DATA.contact.email}.`}
                  </p>
                  <button
                    onClick={() => setSubmittedStatus('idle')}
                    className="mt-6 px-6 py-2 rounded-full border border-white/20 text-xs font-mono text-white/70 hover:text-white hover:border-white/40 transition-all"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-cyan-300/80">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:bg-white/[0.06] outline-none transition-all text-white placeholder-white/20" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-cyan-300/80">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:bg-white/[0.06] outline-none transition-all text-white placeholder-white/20" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-cyan-300/80">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:bg-white/[0.06] outline-none transition-all resize-none text-white placeholder-white/20" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-cyan-300 transition-all rounded-xl shadow-[0_8px_24px_rgba(255,255,255,0.2)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </TiltCard>
        </SlideUp>

        {/* Glassmorphism Social Pills */}
        <FadeIn delay={0.4} className="mt-16 flex flex-wrap justify-center items-center gap-5 text-xs font-bold uppercase tracking-widest text-white/70">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] lowercase font-mono text-xs tracking-normal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            <span>{PORTFOLIO_DATA.contact.email}</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
            LinkedIn Profile
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            GitHub
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
