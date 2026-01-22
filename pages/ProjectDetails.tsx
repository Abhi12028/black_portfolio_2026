import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '../components/ui/Motion';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import { PORTFOLIO_DATA } from '../constants';

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const project = PORTFOLIO_DATA.projects.find(p => p.id === id) || PORTFOLIO_DATA.projects[0];

    return (
        <div className="relative min-h-screen bg-black selection:bg-white selection:text-black md:cursor-none">
            <div className="hidden md:block">
                <CustomCursor />
            </div>
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Project Hero */}
                <section className="container mx-auto px-6 md:px-12 mb-24">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">
                        <SlideUp>
                            <h1 className="font-outfit font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                                {project.title}
                            </h1>
                        </SlideUp>
                        <FadeIn delay={0.3} className="max-w-xl">
                            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                                {project.description}
                            </p>
                        </FadeIn>
                    </div>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full aspect-video rounded-lg overflow-hidden relative"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </motion.div>
                </section>

                {/* Project Info Grid */}
                <section className="container mx-auto px-6 md:px-12 mb-24">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                        <StaggerItem>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Client</h3>
                            <p className="text-xl font-outfit font-medium">Nexus Architecture Inc.</p>
                        </StaggerItem>
                        <StaggerItem>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Services</h3>
                            <p className="text-xl font-outfit font-medium">{project.category}</p>
                        </StaggerItem>
                        <StaggerItem>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-white/60">{tag}</span>
                                ))}
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </section>

                {/* Case Study Content */}
                <section className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8">The Challenge</h2>
                        <p className="text-lg text-white/50 leading-loose mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8">The Solution</h2>
                        <p className="text-lg text-white/50 leading-loose mb-12">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            We utilized {project.tags.join(', ')} to achieve high performance and scalability.
                        </p>
                    </FadeIn>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 gap-4 my-16">
                        <FadeIn delay={0.3} className="aspect-square bg-white/5 rounded-lg overflow-hidden">
                            <img src={`https://picsum.photos/seed/${project.id}-1/800/800`} alt="Gallery 1" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                        </FadeIn>
                        <FadeIn delay={0.4} className="aspect-square bg-white/5 rounded-lg overflow-hidden">
                            <img src={`https://picsum.photos/seed/${project.id}-2/800/800`} alt="Gallery 2" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                        </FadeIn>
                    </div>
                </section>

                {/* Next Project Nav */}
                <section className="container mx-auto px-6 md:px-12 border-t border-white/5 pt-24 mt-24">
                    <Link to="/" className="group block text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 group-hover:text-white transition-colors">Next Project</p>
                        <h2 className="text-5xl md:text-8xl font-outfit font-black uppercase text-white/20 group-hover:text-white transition-colors duration-500">
                            Coming Soon
                        </h2>
                    </Link>
                </section>

            </main>
        </div>
    );
};

export default ProjectDetails;
