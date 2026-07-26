import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../constants';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Glowing Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-300 z-[100] origin-left shadow-[0_0_12px_#38bdf8]"
        style={{ scaleX }}
      />

      <nav className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 ${scrolled ? 'py-4 bg-black/85 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '#')}
            className="font-outfit font-black text-xl tracking-tighter z-[100] flex items-center gap-2"
          >
            <span>ABHISHEK</span>
            <span className="text-cyan-400 font-mono text-sm font-light">/ DE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold text-white/60 hover:text-cyan-300 transition-colors tracking-widest uppercase cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/20 hover:border-cyan-400 text-white hover:text-cyan-300 transition-all rounded-sm flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-300 transition-all rounded-sm cursor-pointer"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-[100] p-2.5 rounded-lg border border-white/20 bg-white/10 active:scale-95 transition-all flex items-center gap-2"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyan-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </>
            ) : (
              <>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/80">Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#060606] z-[85] md:hidden flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto"
          >
            {/* Top Close Button Bar */}
            <div className="absolute top-6 right-6 z-[100]">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 active:scale-95 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              >
                <span>✕ CANCEL</span>
              </button>
            </div>

            {/* Background Radial Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 relative z-10 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + idx * 0.04 }}
                  href={`/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="w-full text-center py-3.5 text-2xl font-outfit font-bold text-white/85 hover:text-cyan-300 active:text-cyan-300 transition-colors tracking-wider uppercase border-b border-white/10"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-3.5 bg-[#0A66C2] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl shadow-lg active:scale-98"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                Connect on LinkedIn
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                href="/#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3.5 bg-white text-black text-xs font-bold uppercase tracking-widest text-center rounded-xl shadow-lg active:scale-98"
              >
                Hire Me
              </motion.a>

              {/* Explicit Cancel Button at Bottom */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 mt-2 bg-white/5 border border-white/20 text-white/70 hover:text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest text-center rounded-xl active:scale-98 transition-all"
              >
                ✕ Cancel & Close Menu
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
