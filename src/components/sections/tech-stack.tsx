"use client";

import React from "react";
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaNpm, FaFigma, FaJava, FaPython, FaDatabase, FaServer
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiMongodb, SiFramer, SiJavascript, SiTypescript, SiExpress, SiVercel, SiPostman, SiFirebase
} from "react-icons/si";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const technologies = [
    { name: "HTML", icon: <FaHtml5 className="w-5 h-5 text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-5 h-5 text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-400" /> },
    { name: "ReactJS", icon: <FaReact className="w-5 h-5 text-cyan-400" /> },
    { name: "NextJS", icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-5 h-5 text-pink-500" /> },
    { name: "NodeJS", icon: <FaNodeJs className="w-5 h-5 text-green-500" /> },
    { name: "ExpressJS", icon: <SiExpress className="w-5 h-5 text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-400" /> },
    { name: "SQL", icon: <FaDatabase className="w-5 h-5 text-blue-300" /> },
    { name: "REST API", icon: <FaServer className="w-5 h-5 text-gray-400" /> },
    { name: "GitHub", icon: <FaGithub className="w-5 h-5 text-white" /> },
    { name: "Vercel", icon: <SiVercel className="w-5 h-5 text-white" /> },
    { name: "Postman", icon: <SiPostman className="w-5 h-5 text-orange-400" /> },
    { name: "npm", icon: <FaNpm className="w-5 h-5 text-red-500" /> },
    { name: "Figma", icon: <FaFigma className="w-5 h-5 text-pink-400" /> },
    { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="w-5 h-5 text-red-500" /> },
    { name: "Python", icon: <FaPython className="w-5 h-5 text-blue-500" /> },
];

export function TechStackSection() {
    const innerRing = technologies.slice(0, 5);
    const middleRing = technologies.slice(5, 12);
    const outerRing = technologies.slice(12, 21);

    return (
        <section id="tech-stack" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative z-10 px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-[10px] md:text-xs font-semibold tracking-widest text-white/80 uppercase">
                        Tools of the Trade
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 px-2 leading-tight">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">Tech Stack</span>
                </h2>
            </div>

            {/* --- Mobile Grid Layout (visible only on mobile) --- */}
            <div className="flex md:hidden flex-wrap justify-between gap-y-3 gap-x-2 w-full max-w-[400px] mx-auto z-20 relative px-2">
                {technologies.map((tech) => (
                    <div
                        key={`mobile-${tech.name}`}
                        className="flex items-center gap-3 px-3 py-2 w-[48%] rounded-full bg-[#0a0a0a] border border-white/10 relative"
                    >
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            {tech.icon}
                        </div>
                        <span className="text-white text-xs font-semibold truncate tracking-tight">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* --- Desktop Orbiting Layout (hidden on mobile) --- */}
            <div className="hidden md:flex relative h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent shadow-xl scale-100 origin-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
                    Stack
                </span>

                {/* Inner Circles */}
                <OrbitingCircles
                    className="border-none bg-transparent"
                    duration={30}
                    radius={130}
                >
                    {innerRing.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-white/10 group relative whitespace-nowrap scale-110" title={tech.name}>
                            <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            {tech.icon}
                            <span className="text-white text-sm font-medium">{tech.name}</span>
                        </div>
                    ))}
                </OrbitingCircles>

                {/* Middle Circles */}
                <OrbitingCircles
                    className="border-none bg-transparent"
                    duration={40}
                    radius={210}
                    reverse
                >
                    {middleRing.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-white/10 group relative whitespace-nowrap scale-110" title={tech.name}>
                            <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            {tech.icon}
                            <span className="text-white text-sm font-medium">{tech.name}</span>
                        </div>
                    ))}
                </OrbitingCircles>

                {/* Outer Circles */}
                <OrbitingCircles
                    className="border-none bg-transparent"
                    duration={50}
                    radius={300}
                >
                    {outerRing.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-white/10 group relative whitespace-nowrap scale-110" title={tech.name}>
                            <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            {tech.icon}
                            <span className="text-white text-sm font-medium">{tech.name}</span>
                        </div>
                    ))}
                </OrbitingCircles>
            </div>
        </section>
    );
}
