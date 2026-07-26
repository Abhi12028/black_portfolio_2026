import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatIDo from '../components/WhatIDo';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';

const Home: React.FC = () => {
    return (
        <>
            <div className="relative selection:bg-cyan-300 selection:text-black md:cursor-none">
                <div className="hidden md:block">
                    <CustomCursor />
                </div>
                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <WhatIDo />
                    <Projects />
                    <Skills />
                    <Experience />
                    <Contact />
                </main>

                <footer className="py-12 border-t border-white/5 bg-black">
                    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="font-outfit font-black text-xl tracking-tighter flex items-center gap-2">
                            <span>ABHISHEK SUTAR</span>
                            <span className="text-cyan-400 font-mono text-xs">/ DE</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
                            &copy; {new Date().getFullYear()} Abhishek Sutar. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
