"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Plus } from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFramer } from "react-icons/si";
import { Reveal } from "@/components/ui/reveal";

const projects = [
    {
        id: "ms-edu",
        title: "MS Educational Services",
        type: "Admissions Consultancy Website",
        description: "Designed and developed a stunning portfolio website for an educational consultancy. Showcases their services, admission process with high-quality imagery and modern UI.",
        features: [
            "Premium service showcase with high-quality images",
            "Dynamic filtering and category-based browsing",
            "Application process timeline and service offerings",
            "Client testimonials and success stories",
            "Responsive design optimized for all devices",
            "Contact and inquiry management system"
        ],
        tech: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> }
        ],
        color: "from-blue-500/20 to-indigo-500/20",
        accent: "text-blue-500",
        bgAccent: "bg-blue-500",
        imageHeading: "Premium educational consultancy based in India.",
    },
    {
        id: "scan-digital",
        title: "SCAN Digital Marketing",
        type: "Agency Portfolio Website",
        description: "A highly interactive and conversion-focused agency portfolio driving digital transformation and growth strategies.",
        features: [
            "Dynamic scrollytelling and animations",
            "Service and case study portfolios",
            "Client dashboard and real-time metrics",
            "SEO optimized architecture"
        ],
        tech: [
            { name: "React.js", icon: <FaReact className="text-blue-400" /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> }
        ],
        color: "from-emerald-500/20 to-teal-500/20",
        accent: "text-emerald-500",
        bgAccent: "bg-emerald-500",
        imageHeading: "Digital marketing and growth agency.",
    },
    {
        id: "honey-tailoring",
        title: "Honey Tailoring",
        type: "Local Business Website",
        description: "A beautiful and accessible local business website designed for a tailoring shop to increase local footfall and online appointments.",
        features: [
            "Custom catalog of tailoring services",
            "Online appointment booking",
            "Responsive and lightweight design",
            "Local SEO optimization"
        ],
        tech: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <FaReact className="text-yellow-400" /> },
            { name: "React", icon: <FaReact className="text-blue-400" /> }
        ],
        color: "from-orange-500/20 to-red-500/20",
        accent: "text-orange-500",
        bgAccent: "bg-orange-500",
        imageHeading: "Bespoke tailoring services online.",
    },
    {
        id: "mp-portfolio",
        title: "Maddela Pavan Portfolio",
        type: "Personal Portfolio Website",
        description: "A modern, dark-themed personal portfolio showcasing projects, skills, and providing a seamless contact experience.",
        features: [
            "Dark theme with custom color tokens",
            "Smooth page transitions and micro-interactions",
            "Interactive project showcase",
            "Contact form with email integration"
        ],
        tech: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> }
        ],
        color: "from-purple-500/20 to-pink-500/20",
        accent: "text-purple-500",
        bgAccent: "bg-purple-500",
        imageHeading: "Premium personal developer portfolio.",
    },
];

export function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeProject, setActiveProject] = useState(0);

    // Monitor which project is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const projectElements = container.querySelectorAll(".project-scroll-item");
            const viewportMidpoint = window.innerHeight / 2;

            let closestIndex = 0;
            let minDistance = Infinity;

            projectElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                // Calculate distance from the midpoint of the element to the midpoint of the viewport
                const elMidpoint = rect.top + rect.height / 2;
                const distance = Math.abs(viewportMidpoint - elMidpoint);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== activeProject) {
                setActiveProject(closestIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeProject]);

    const activeData = projects[activeProject];

    return (
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6" ref={containerRef}>
            <Reveal direction="down">
                <div className="text-center mb-16 space-y-4">
                    <p className="text-sm font-medium tracking-widest text-white/50 uppercase">Code Meets Creativity</p>
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Crafted <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Projects</span>
                        </h2>
                    </div>
                </div>
            </Reveal>

            {/* Desktop View */}
            <div className="hidden lg:flex flex-row gap-20 items-start relative w-full">
                {/* Left Side: Scrolling Image Cards */}
                <div className="w-full lg:w-1/2 flex flex-col gap-24 py-[10vh]">
                    {projects.map((project, idx) => (
                        <Reveal key={project.id} direction={idx % 2 === 0 ? "left" : "right"}>
                            <div
                                className={`project-scroll-item min-h-[60vh] flex items-center transition-opacity duration-500 ${idx === activeProject ? 'opacity-100' : 'opacity-30'}`}
                            >
                                <div className={`w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative group border border-white/10 ${project.bgAccent.replace('bg-', 'bg-').replace('500', '900/40')}`}>
                                    {/* Background Gradient Blur inside the card */}
                                    <div className={`absolute -inset-20 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-50`} />

                                    <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-8">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-[80%]">
                                                {project.imageHeading}
                                            </h3>
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                                                <ExternalLink className="w-5 h-5 text-white" />
                                            </div>
                                        </div>

                                        {/* Mockup Placeholder */}
                                        <div className="mt-auto w-full h-[60%] bg-[#0a0a0a] rounded-t-xl border border-white/10 border-b-0 shadow-2xl relative overflow-hidden flex items-center justify-center group-hover:translate-y-2 transition-transform duration-500">
                                            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
                                            </div>
                                            <div className="text-white/20 font-bold text-xl mt-4 px-6 text-center">
                                                {project.title} <br /> <span className="text-sm font-normal">Preview Template</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Right Side: Sticky Details */}
                <div className="w-full lg:w-1/2 lg:sticky top-32 h-auto lg:h-[calc(100vh-8rem)] flex flex-col justify-center py-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeData.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-[2px] ${activeData.bgAccent}`}></div>
                                <h3 className="text-3xl font-bold text-white">{activeData.title}</h3>
                            </div>

                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                {activeData.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {activeData.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <Plus className={`w-5 h-5 mt-0.5 shrink-0 ${activeData.accent}`} />
                                        <span className="text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {activeData.tech.map((t, idx) => (
                                    <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors">
                                        {t.icon}
                                        <span>{t.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex lg:hidden flex-col gap-10 w-full relative">
                {projects.map((project) => {
                    const bgMap: Record<string, string> = {
                        "ms-edu": "bg-[#0b2942]",
                        "scan-digital": "bg-[#064e3b]",
                        "honey-tailoring": "bg-[#431407]",
                        "mp-portfolio": "bg-[#3b0764]",
                    };
                    const btnMap: Record<string, string> = {
                        "ms-edu": "bg-[#1d4ed8] hover:bg-[#2563eb]",
                        "scan-digital": "bg-[#059669] hover:bg-[#10b981]",
                        "honey-tailoring": "bg-[#ea580c] hover:bg-[#f97316]",
                        "mp-portfolio": "bg-[#9333ea] hover:bg-[#a855f7]",
                    };
                    const cardBg = bgMap[project.id] || "bg-[#064e3b]";
                    const btnBg = btnMap[project.id] || "bg-[#059669]";

                    // Separate tech to show max 3 + count for mobile layout
                    const visibleTech = project.tech.slice(0, 3);
                    const remainingTech = project.tech.length > 3 ? project.tech.length - 3 : 0;

                    return (
                        <div key={project.id} className="w-full flex flex-col rounded-3xl overflow-hidden shadow-2xl">
                            {/* Top Image Part */}
                            <div className="w-full aspect-[4/3] relative p-5 flex flex-col items-center justify-center overflow-hidden bg-[#111]">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />

                                <div className="relative z-10 w-full h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white leading-tight max-w-[80%]">
                                            {project.imageHeading}
                                        </h3>
                                    </div>

                                    {/* Mockup Placeholder */}
                                    <div className="mt-auto w-full h-[65%] bg-[#0a0a0a] rounded-t-lg border border-white/10 border-b-0 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                                        </div>
                                        <div className="text-white/20 font-bold text-base mt-4 px-4 text-center">
                                            {project.title} <br /> <span className="text-xs font-normal">Preview Layout</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Details Part */}
                            <div className={`p-6 flex flex-col ${cardBg}`}>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {visibleTech.map((t, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 text-xs font-semibold text-white">
                                            {t.icon}
                                            <span>{t.name}</span>
                                        </div>
                                    ))}
                                    {remainingTech > 0 && (
                                        <div className="flex items-center justify-center px-3 py-1.5 rounded-full bg-black/40 text-xs font-semibold text-white">
                                            +{remainingTech}
                                        </div>
                                    )}
                                </div>

                                <details className="group mb-6">
                                    <summary className="flex items-center gap-1.5 cursor-pointer text-sm font-semibold text-white transition-opacity hover:opacity-80 list-none select-none">
                                        Show more
                                        <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="pt-4 space-y-3">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <Plus className="w-4 h-4 mt-0.5 shrink-0 text-white/70" />
                                                <span className="text-white/90 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </details>

                                <button className={`w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-colors ${btnBg}`}>
                                    View Project <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
