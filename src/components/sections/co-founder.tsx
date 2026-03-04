"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export function CoFounderSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-[2.5rem] p-10 md:p-16"
            >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-400 mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-red-500 mr-3 animate-pulse"></span>
                            Leadership & Vision
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Co-Founder <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                                SCANDIGITAL
                            </span>
                        </h2>

                        <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-xl">
                            Driving digital transformation and growth strategies. At SCANDIGITAL, we partner with brands to elevate their digital presence through cutting-edge marketing, SEO, and custom web development.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Visit Agency
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                                <TrendingUp className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Growth</h3>
                            <p className="text-sm text-white/50">Scaling client revenue and online visibility.</p>
                        </div>

                        <div className="bg-black/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm translate-y-8">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Strategy</h3>
                            <p className="text-sm text-white/50">Data-driven marketing campaigns.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
