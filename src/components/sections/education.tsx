"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const educationData = [
    {
        id: 1,
        date: "2022 – PRESENT",
        degree: "Bachelor of Engineering (B.E.)",
        specialization: "Artificial Intelligence & Data Science",
        institution: "Methodist College of Engineering and Technology, Hyderabad",
        details: [
            "Currently pursuing my undergraduate degree with a focus on core computer science, AI algorithms, and data engineering.",
            "Consistently maintaining strong academic performance with a current CGPA of 8.2.",
        ],
        cgpa: "8.2",
        color: "from-purple-500/20 to-pink-500/20",
        accent: "text-purple-500",
        bgAccent: "bg-purple-900/40",
    },
    {
        id: 2,
        date: "2020 – 2022",
        degree: "Intermediate",
        specialization: "MPC (Maths, Physics, Chemistry)",
        institution: "Sree Chaitanya Junior College, Karimnagar",
        details: [
            "Completed higher secondary education with a strong foundation in mathematics and sciences.",
            "Achieved a final grade of 86.3%.",
        ],
        cgpa: "86.3%",
        color: "from-blue-500/20 to-cyan-500/20",
        accent: "text-blue-500",
        bgAccent: "bg-blue-900/40",
    },
    {
        id: 3,
        date: "2019 – 2020",
        degree: "SSC",
        specialization: "High School",
        institution: "Paradise High School, Karimnagar",
        details: [
            "Completed secondary education with excellent academic standing.",
            "Graduated with a CGPA of 9.8.",
        ],
        cgpa: "9.8 CGPA",
        color: "from-orange-500/20 to-red-500/20",
        accent: "text-orange-500",
        bgAccent: "bg-orange-900/40",
    },
];

export function EducationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Monitor which education block is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const items = container.querySelectorAll(".edu-scroll-item");
            const viewportMidpoint = window.innerHeight / 2;

            let closestIndex = 0;
            let minDistance = Infinity;

            items.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                // Calculate distance from the midpoint of the element to the midpoint of the viewport
                const elMidpoint = rect.top + rect.height / 2;
                const distance = Math.abs(viewportMidpoint - elMidpoint);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== activeIndex) {
                setActiveIndex(closestIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);

    const activeData = educationData[activeIndex];

    return (
        <section className="py-24 max-w-7xl mx-auto px-6" ref={containerRef}>
            <Reveal direction="down">
                <div className="text-center mb-16 space-y-4">
                    <p className="text-sm font-medium tracking-widest text-white/50 uppercase">Academic Journey</p>
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Education</span>
                        </h2>
                    </div>
                </div>
            </Reveal>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative ml-2 lg:ml-0">

                {/* Left Side: Scrolling Timeline Headers */}
                <div className="w-full lg:w-1/2 flex flex-col gap-24 py-[10vh] border-l border-white/10 pl-6 lg:pl-12">
                    {educationData.map((item, idx) => (
                        <Reveal key={item.id} direction={idx % 2 === 0 ? "left" : "right"}>
                            <div
                                className={`edu-scroll-item min-h-[40vh] flex items-center transition-all duration-500 relative ${idx === activeIndex ? "opacity-100 scale-100" : "opacity-30 scale-95"
                                    }`}
                            >
                                {/* Timeline Marker visible on all devices now */}
                                <div className="absolute left-[calc(-1.5rem-6.5px)] lg:left-[calc(-3rem-6.5px)] top-1/2 -translate-y-1/2">
                                    {idx === activeIndex ? (
                                        <div className="relative flex h-3 w-3">
                                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${item.bgAccent.replace('900/40', '500')} opacity-75`}></span>
                                            <span className={`relative inline-flex rounded-full h-3 w-3 ${item.bgAccent.replace('900/40', '500')} shadow-[0_0_10px_currentColor]`}></span>
                                        </div>
                                    ) : (
                                        <div className="flex bg-[#111] h-3 w-3 rounded-full border-2 border-white/30"></div>
                                    )}
                                </div>

                                <div className={`w-full p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden bg-[#111]`}>
                                    {/* Background Gradient Blur */}
                                    <div className={`absolute -inset-20 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-1000 ${idx === activeIndex ? 'opacity-40' : 'opacity-10'}`} />

                                    <div className="relative z-10">
                                        <span className="text-sm font-semibold tracking-wider text-white/50 mb-4 block uppercase">
                                            {item.date}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                                            {item.degree}
                                        </h3>
                                        <div className={`inline-block px-4 py-2 ${item.bgAccent.replace('900/40', '500/10')} border border-white/5 ${item.accent} rounded-xl text-sm font-medium mb-4`}>
                                            {item.specialization}
                                        </div>
                                        <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                            {item.institution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Right Side: Sticky Details & CGPA */}
                <div className="w-full lg:w-1/2 lg:sticky top-32 h-auto lg:h-[calc(100vh-8rem)] flex flex-col justify-center py-10 pl-6 lg:pl-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeData.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <h4 className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Passout / CGPA</h4>
                                    <span className={`text-3xl font-bold ${activeData.accent}`}>{activeData.cgpa}</span>
                                </div>
                            </div>

                            <div className="space-y-6 bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem]">
                                <ul className="space-y-4">
                                    {activeData.details.map((desc, i) => (
                                        <li key={i} className="flex items-start text-white/70 leading-relaxed">
                                            <span className={`${activeData.accent} mr-4 text-xl leading-tight`}>•</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
