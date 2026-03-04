"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Map current path to active link name
    const active = navLinks.find(link => {
        if (link.href === "/" && pathname !== "/") return false;
        return pathname.startsWith(link.href);
    })?.name || "Home";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col px-6 py-4 transition-all duration-300 backdrop-blur-md bg-black/10 border-b border-white/5">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold tracking-tighter text-white">MPS</span>
                </Link>

                {/* Nav Links List (Desktop) */}
                <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-1.5 text-sm font-medium transition-colors hover:text-white text-white/70"
                        >
                            {active === link.name && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] border border-white/5 hover:border-red-500/50"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden flex flex-col gap-4 pt-6 pb-2"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-lg px-4 py-2 rounded-lg transition-colors ${active === link.name ? 'bg-white/10 text-white font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-2 text-center rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/20"
                    >
                        Book a Call
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
