"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Plus } from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFramer, SiPython, SiTensorflow, SiOpencv, SiFlask, SiHtml5 } from "react-icons/si";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

const projects = [
    {
        id: "ms-edu",
        title: "MS Educational Services",
        type: "Admissions Consultancy Website",
        link: "https://msedifysolutions.vercel.app/",
        image: "/MS Edify.png",
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
        link: "https://scandigital.vercel.app/",
        image: "/Scandigital.png",
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
        link: "https://honeytailoring.vercel.app/",
        image: "/Honey.png",
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
        id: "skin-lesion-system",
        title: "Lesion Interpretation System",
        type: "AI Healthcare Web Application",
        description: "An intelligent web-based system that detects and classifies skin diseases using image processing and deep learning, providing confidence scores and clinical insights for preliminary diagnosis.",
        features: [
            "AI-based skin disease classification using CNN",
            "Image preprocessing and quality analysis using OpenCV",
            "Confidence score for prediction reliability",
            "Lesion spread analysis for severity estimation",
            "Clinical guidance including symptoms and prevention tips",
            "User-friendly interface for easy image upload and results"
        ],
        tech: [
            { name: "Python", icon: <SiPython className="text-yellow-400" /> },
            { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
            { name: "OpenCV", icon: <SiOpencv className="text-blue-400" /> },
            { name: "Flask", icon: <SiFlask className="text-white" /> },
            { name: "HTML/CSS/JS", icon: <SiHtml5 className="text-orange-500" /> }
        ],
        color: "from-green-500/20 to-blue-500/20",
        accent: "text-green-500",
        bgAccent: "bg-green-500",
        imageHeading: "AI-powered skin disease detection system.",
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
                                            <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                                                <ExternalLink className="w-5 h-5 text-white" />
                                            </a>
                                        </div>

                                        {/* Mockup Placeholder */}
                                        <div className="mt-auto w-full h-[65%] rounded-t-xl overflow-hidden relative group-hover:translate-y-2 transition-transform duration-500 shadow-2xl border border-white/10 border-b-0">
                                            {project.image ? (
                                                <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                                            ) : project.link ? (
                                                <iframe src={project.link} className="absolute inset-0 w-full h-full border-none pointer-events-none bg-white" loading="lazy" />
                                            ) : (
                                                <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                                                    <div className="text-white/20 font-bold text-xl px-6 text-center">
                                                        {project.title} <br /> <span className="text-sm font-normal">Preview Template</span>
                                                    </div>
                                                </div>
                                            )}
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
                        "skin-lesion-system": "bg-[#064e3b]",
                    };
                    const btnMap: Record<string, string> = {
                        "ms-edu": "bg-[#1d4ed8] hover:bg-[#2563eb]",
                        "scan-digital": "bg-[#059669] hover:bg-[#10b981]",
                        "honey-tailoring": "bg-[#ea580c] hover:bg-[#f97316]",
                        "skin-lesion-system": "bg-[#059669] hover:bg-[#10b981]",
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
                                    <div className="mt-auto w-full h-[65%] rounded-t-lg relative overflow-hidden flex items-center justify-center border border-white/10 border-b-0 shadow-2xl">
                                        {project.image ? (
                                            <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                                        ) : project.link ? (
                                            <iframe src={project.link} className="absolute inset-0 w-full h-full border-none pointer-events-none bg-white" loading="lazy" />
                                        ) : (
                                            <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                                                <div className="text-white/20 font-bold text-base px-4 text-center">
                                                    {project.title} <br /> <span className="text-xs font-normal">Preview Layout</span>
                                                </div>
                                            </div>
                                        )}
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

                                <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className={`w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-colors ${btnBg}`}>
                                    View Project <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
