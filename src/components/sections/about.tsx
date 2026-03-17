"use client";

import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
    return (
        <section id="about" className="py-24 max-w-7xl mx-auto px-6">
            <div className="mb-6 md:mb-10">
                <span className="text-xs md:text-sm font-semibold tracking-widest text-white/50 uppercase">
                    More About Me
                </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                {/* Left Column - Image Container */}
                <Reveal direction="left" width="fit-content">
                    <div className="w-full sm:w-[80%] mx-auto lg:mx-0 lg:w-[400px] flex-shrink-0">
                        <div className="relative aspect-[4/5] w-full p-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                            <div className="w-full h-full bg-[#111] rounded-[20px] overflow-hidden relative">
                                <Image
                                    src="/PARTHA.jpeg"
                                    alt="Partha"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 80vw, 400px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Right Column - Content */}
                <Reveal direction="right">
                    <div className="flex flex-col justify-center h-full pt-2 lg:pt-0">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Hi there! I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Partha</span>
                        </h2>

                        <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed mb-8">
                            <p>
                                I&apos;m Maddela Partha Saradhi, a passionate web developer dedicated to building impactful and user-friendly websites. I specialize in React, Next.js and modern frontend technologies, and I&apos;m constantly exploring AI and machine learning to integrate into web solutions.
                            </p>
                            <p>
                                When I&apos;m not coding, I&apos;m brainstorming new ideas, learning emerging tech, or helping others grow. I believe in consistency, curiosity, and leveling up every day.
                            </p>
                            <p>
                                I wake up each day excited to build something meaningful and work towards becoming a top developer!
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 md:gap-6 mb-10">
                            <Link href="https://linkedin.com" target="_blank" className="text-white/50 hover:text-white transition-colors text-2xl">
                                <FaLinkedinIn />
                            </Link>
                            <Link href="https://github.com" target="_blank" className="text-white/50 hover:text-white transition-colors text-2xl">
                                <FaGithub />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="text-white/50 hover:text-white transition-colors text-2xl">
                                <FaTwitter />
                            </Link>
                            <Link href="mailto:pardhu.maddela103@gmail.com" className="text-white/50 hover:text-white transition-colors text-2xl">
                                <FaEnvelope />
                            </Link>
                        </div>

                        {/* Pills Row */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="px-6 py-2 rounded-full border border-white/20 text-white text-sm font-medium">
                                I Lift
                            </div>
                            <div className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 bg-purple-500/10 text-sm font-medium">
                                I Code
                            </div>
                            <div className="px-6 py-2 rounded-full border border-white/20 text-white text-sm font-medium">
                                I Vibin&apos;
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
