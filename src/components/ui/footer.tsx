import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <Link href="#home" className="text-2xl font-bold tracking-tighter text-white block mb-2">
                            MPS
                        </Link>
                        <p className="text-white/50 text-sm max-w-xs">
                            Maddela Partha Saradhi. Turning ideas into beautiful digital experiences.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:text-red-400 transition-all text-white/70">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="https://github.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:text-red-400 transition-all text-white/70">
                            <Github className="w-4 h-4" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:text-red-400 transition-all text-white/70">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="mailto:pardhu.maddela103@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:text-red-400 transition-all text-white/70">
                            <Mail className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
                    <p>© {currentYear} Maddela Partha Saradhi. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
