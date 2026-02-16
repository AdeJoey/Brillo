"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference text-white"
            >
                {/* Logo Area */}
                <div className="flex items-center gap-4 z-50">
                    <Link href="/" className="text-2xl text-white font-bold tracking-tighter flex items-center">
                        <span className="text-3xl font-bold tracking-tighter text-accent-red rounded-[5px] shadow-lg">B</span>RILL<span className="text-3xl font-bold tracking-tighter text-accent-red rounded-[5px] shadow-lg">O</span>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-12">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
                        <Link href="/" className="hover:text-accent-red transition-colors">HOME</Link>
                        <Link href="/about" className="hover:text-accent-red transition-colors">ABOUT</Link>
                        <Link href="/services" className="hover:text-accent-red transition-colors">SERVICES</Link>
                        <Link href="/cases" className="hover:text-accent-red transition-colors">CASES</Link>
                        <Link href="/blog" className="hover:text-accent-red transition-colors">BLOG</Link>
                        <Link href="/contact" className="hover:text-accent-red transition-colors">CONTACT</Link>
                    </div>

                    {/* Socials (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <Instagram size={16} />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <Facebook size={16} />
                        </Link>
                    </div>

                    {/* Hamburger (Mobile Only) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden text-white hover:text-accent-red transition-colors z-50 relative"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-2xl font-bold tracking-widest uppercase text-white">
                            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent-red transition-colors">HOME</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-accent-red transition-colors">ABOUT</Link>
                            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-accent-red transition-colors">SERVICES</Link>
                            <Link href="/cases" onClick={() => setIsOpen(false)} className="hover:text-accent-red transition-colors">CASES</Link>
                            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-accent-red transition-colors">BLOG</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-accent-red transition-colors">CONTACT</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
