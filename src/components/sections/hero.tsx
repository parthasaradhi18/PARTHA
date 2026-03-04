"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen pt-40 md:pt-32 pb-20 flex items-center justify-center max-w-7xl mx-auto px-6 overflow-hidden"
        >
            {/* Background overlay */}
            <div className="absolute inset-0 z-0 bg-transparent opacity-[0.03] mix-blend-overlay" />

            <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* ===== Heading ===== */}
                <div className="text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 px-1 sm:px-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white leading-tight"
                    >
                        Turning Ideas Into
                        <br />
                        beautiful{" "}
                        <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-b from-zinc-600 to-white">
                            Digital Experiences
                        </span>
                    </motion.h1>
                </div>

                {/* ===== Intro Text ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex relative flex-col items-center justify-center gap-1.5 sm:gap-3 md:flex-row mb-[88px] md:mb-24 scale-90 sm:scale-100"
                >
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90">Hello, I&apos;m</p>

                    <div className="bg-red-600 px-3 sm:px-5 py-1 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                        <span className="text-white font-semibold tracking-wide block text-xs sm:text-base">
                            Maddela Partha Saradhi
                        </span>
                    </div>

                    <div className="group block md:block cursor-pointer relative h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 rounded-full overflow-hidden border-2 border-white/20 my-0.5 sm:my-2 md:my-0 bg-[#111] flex items-center justify-center text-white/50 font-bold text-xs md:text-lg">
                        <Image
                            src="/PARTHA.jpeg"
                            alt="Partha"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 28px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                            priority
                        />
                    </div>

                    <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-white/90">A Web Developer</p>
                </motion.div>
            </div>

            {/* ===== Bottom Dome ===== */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                      w-[150%] md:w-[110%] 
                      h-[220px] md:h-[180px] 
                      bg-[#050505] rounded-t-[100%] 
                      border-t border-red-500/20 
                      shadow-[0_-30px_60px_rgba(239,68,68,0.05)] 
                      z-20 flex flex-col items-center pt-8 md:pt-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full px-4"
                >
                    {/* Let's Connect Button */}
                    <Link
                        href="#contact"
                        className="group flex flex-row items-center justify-between gap-4 bg-[#0a0a0a] border border-white/10 text-white pl-6 pr-2 py-2 rounded-full font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-[240px] md:w-[220px]"
                    >
                        <span>Let&apos;s Connect</span>
                        <div className="bg-white/10 p-2 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors text-white/70">
                            <ArrowRight className="w-4 h-4 md:w-4 md:h-4" />
                        </div>
                    </Link>

                    {/* Contact Info container */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
                        <Link
                            href="mailto:pardhu.maddela103@gmail.com"
                            className="flex items-center gap-2 text-[15px] md:text-base text-white/60 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/40" />
                            pardhu.maddela103@gmail.com
                        </Link>

                        <Link
                            href="tel:8639865534"
                            className="flex items-center gap-2 text-[15px] md:text-base text-white/60 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-white/40" />
                            +91 8639865534
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}