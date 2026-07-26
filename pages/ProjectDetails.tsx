import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '../components/ui/Motion';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import { PORTFOLIO_DATA } from '../constants';

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const currentIndex = PORTFOLIO_DATA.projects.findIndex(p => p.id === id);
    const project = currentIndex !== -1 ? PORTFOLIO_DATA.projects[currentIndex] : PORTFOLIO_DATA.projects[0];

    const nextProjectIndex = (currentIndex + 1) % PORTFOLIO_DATA.projects.length;
    const nextProject = PORTFOLIO_DATA.projects[nextProjectIndex];

    const galleryImages = project.galleryImages && project.galleryImages.length >= 2 
        ? project.galleryImages 
        : [
            `https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&auto=format&fit=crop`,
            `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop`
        ];

    return (
        <div className="relative min-h-screen bg-black selection:bg-cyan-300 selection:text-black md:cursor-none">
            <div className="hidden md:block">
                <CustomCursor />
            </div>
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Project Hero */}
                <section className="container mx-auto px-6 md:px-12 mb-20">
                    <Link to="/" className="inline-flex items-center gap-2 text-cyan-400/80 hover:text-cyan-300 transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">
                        <SlideUp>
                            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block font-semibold">
                                {project.category}
                            </span>
                            <h1 className="font-outfit font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                                {project.title}
                            </h1>
                        </SlideUp>
                        <FadeIn delay={0.3} className="max-w-xl">
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                {project.description}
                            </p>
                        </FadeIn>
                    </div>

                    <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full aspect-video rounded-2xl overflow-hidden relative border border-white/10"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </motion.div>
                </section>

                {/* Project Info Grid */}
                <section className="container mx-auto px-6 md:px-12 mb-20">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                        <StaggerItem>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-3">Domain / Client</h3>
                            <p className="text-xl font-outfit font-medium text-white">{project.client || "Enterprise Systems"}</p>
                        </StaggerItem>
                        <StaggerItem>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-3">Category</h3>
                            <p className="text-xl font-outfit font-medium text-white">{project.category}</p>
                        </StaggerItem>
                        <StaggerItem>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 border border-white/15 bg-white/5 rounded-full text-xs font-mono text-white/80">{tag}</span>
                                ))}
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </section>

                {/* Case Study Content */}
                <section className="container mx-auto px-6 md:px-12 max-w-4xl">
                    {project.challenge && (
                        <FadeIn className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-white">The Challenge</h2>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                {project.challenge}
                            </p>
                        </FadeIn>
                    )}

                    {project.solution && (
                        <FadeIn delay={0.2} className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-white">The Solution</h2>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                {project.solution}
                            </p>
                        </FadeIn>
                    )}

                    {/* Relevant Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                        <FadeIn delay={0.3} className="aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 group">
                            <img 
                                src={galleryImages[0]} 
                                alt={`${project.title} Showcase 1`} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                            />
                        </FadeIn>
                        <FadeIn delay={0.4} className="aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 group">
                            <img 
                                src={galleryImages[1]} 
                                alt={`${project.title} Showcase 2`} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                            />
                        </FadeIn>
                    </div>
                </section>

                {/* Next Project Navigation */}
                <section className="container mx-auto px-6 md:px-12 border-t border-white/5 pt-20 mt-20">
                    <Link to={`/project/${nextProject.id}`} className="group block text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4 group-hover:text-cyan-300 transition-colors">Next Project</p>
                        <h2 className="text-4xl md:text-7xl font-outfit font-black uppercase text-white/40 group-hover:text-white transition-colors duration-500">
                            {nextProject.title}
                        </h2>
                    </Link>
                </section>

            </main>
        </div>
    );
};

export default ProjectDetails;
