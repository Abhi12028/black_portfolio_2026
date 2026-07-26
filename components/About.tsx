import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';
import { TiltCard } from './ui/TiltCard';

const About: React.FC = () => {
  const stats = [
    { label: "Cloud DW Platform", value: "Snowflake", desc: "Snowpark & Dynamic Tables" },
    { label: "Rule Compliance", value: "100%", desc: "EN 16931 Schematron Engine" },
    { label: "Core Integrations", value: "5+", desc: "Zoho, Sumsub, Gupshup, Sentry, Twilio" },
    { label: "ETL Automation", value: "Zero-Downtime", desc: "Automated Data Processing" }
  ];

  return (
    <section id="about" className="py-24 md:py-36 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Background Glass Orbs Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
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
            {/* Glassmorphism Profile Card */}
            <TiltCard className="rounded-2xl border border-white/20 bg-white/[0.02] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden group">
              <div className="relative aspect-[4/4] overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Abhishek Sutar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                {/* Frosted Glass Overlay Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  <p className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold flex items-center justify-between">
                    <span>Abhishek Sutar</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  </p>
                  <p className="text-xs text-white/70 mt-1 font-light">
                    Solution Developer | Data Engineer
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Glassmorphism Goal Card */}
            <TiltCard className="p-7 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-indigo-500/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(56,189,248,0.15)] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-cyan-300 block mb-3">
                🎯 Career Focus & Goal
              </span>
              <p className="text-sm text-white/90 leading-relaxed font-light italic">
                "{PORTFOLIO_DATA.goal}"
              </p>
            </TiltCard>
          </FadeIn>
        </div>

        {/* Glassmorphism Impact Metrics Stats Bar */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-white/10">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <TiltCard className="p-6 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-cyan-400/50 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-cyan-500/20">
                <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 mb-2">{stat.label}</p>
                <h4 className="text-2xl lg:text-3xl font-outfit font-black text-white mb-1 tracking-tight">{stat.value}</h4>
                <p className="text-xs text-white/60 font-light">{stat.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
