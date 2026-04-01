"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
// Removed Image import to prevent crashes with empty placeholder

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", number: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong. Please try again later.");
            }

            setStatus("success");
            setFormData({ name: "", number: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
        }
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden flex items-center justify-center min-h-screen">
            {/* Background stars/particles placeholder */}
            <div className="absolute inset-0 z-0 bg-transparent opacity-[0.03] mix-blend-overlay" />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-red-500 mr-3 animate-pulse"></span>
                    Available for new opportunities
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
                >
                    Turning thoughts into <br />
                    <span className="italic text-white/60 font-light">beautiful web stories</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 text-xl text-white/80"
                >
                    <span>Hello, I&apos;m</span>
                    <div className="flex items-center rounded-full bg-red-500/20 px-4 py-2 border border-red-500/30">
                        <span className="text-red-400 font-semibold px-2">Maddela Partha Saradhi</span>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 bg-[#111] flex items-center justify-center text-white/50 text-lg font-bold">
                        P
                    </div>
                    <span>A Web Developer</span>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-left bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem]"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 px-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 px-1">Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.number}
                                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/60 px-1">Message</label>
                            <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <p className="text-white/60 text-sm px-1">We will contact you via phone</p>

                        <div className="pt-4 flex flex-col md:flex-row items-center gap-6 justify-between">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="group w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : "Let's Connect"}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="flex items-center gap-3 text-white/60">
                                <Mail className="w-5 h-5" />
                                <span>pardhu.maddela103@gmail.com</span>
                            </div>
                        </div>

                        {status === "success" && (
                            <p className="text-green-400 text-sm text-center pt-4">Your message has been received successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center pt-4">{errorMessage || "Something went wrong. Please try again later."}</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
