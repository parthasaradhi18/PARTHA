"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Layout, Search, Calendar, MonitorSmartphone, ShoppingCart, RefreshCw, Code } from "lucide-react";

const services = [
    {
        icon: <Briefcase className="w-8 h-8 text-blue-400" />,
        title: "Business Websites",
        description: "Professional digital storefronts to establish your brand online.",
    },
    {
        icon: <Layout className="w-8 h-8 text-indigo-400" />,
        title: "Landing Pages",
        description: "High-converting, focused pages designed to capture leads.",
    },
    {
        icon: <Search className="w-8 h-8 text-emerald-400" />,
        title: "SEO Optimization",
        description: "Engineered for superior visibility and organic search rankings.",
    },
    {
        icon: <Calendar className="w-8 h-8 text-orange-400" />,
        title: "Booking Systems",
        description: "Seamless integration for client appointments and scheduling.",
    },
    {
        icon: <MonitorSmartphone className="w-8 h-8 text-teal-400" />,
        title: "Responsive Websites",
        description: "Flawless user experiences across all devices and screen sizes.",
    },
    {
        icon: <ShoppingCart className="w-8 h-8 text-yellow-400" />,
        title: "E-Commerce Websites",
        description: "Robust online stores with secure checkout and inventory.",
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-pink-400" />,
        title: "Website Redesign",
        description: "Revitalizing outdated sites with modern UI/UX and performance.",
    },
    {
        icon: <Code className="w-8 h-8 text-purple-400" />,
        title: "Website Development",
        description: "Custom, scalable full-stack web applications from scratch.",
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Provide</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#151515] transition-colors"
                    >
                        {/* Subtle glow on hover */}
                        <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 rounded-3xl transition-colors duration-500 pointer-events-none" />

                        <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">{service.description}</p>

                        <div className="mt-auto flex items-center text-sm font-medium text-white/80 group-hover:text-red-400 transition-colors cursor-pointer">
                            Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
