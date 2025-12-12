"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference text-white"
        >
            {/* Logo Area */}
            <div className="flex items-center gap-4">
                <Link href="/" className="text-2xl text-white font-bold tracking-tighter flex items-center">
                    <span className="text-3xl font-bold tracking-tighter text-accent-red rounded-[5px] shadow-lg">B</span>RILL<span className="text-3xl font-bold tracking-tighter text-accent-red rounded-[5px] shadow-lg">O</span>
                </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-12">
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
                    <Link href="#" className="hover:text-accent-red transition-colors">HOME</Link>
                    <Link href="#" className="hover:text-accent-red transition-colors">SERVICES</Link>
                    <Link href="#" className="hover:text-accent-red transition-colors">CASES</Link>
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

                {/* Hamburger (Mobile Only) - Pushed to right edge by flex justify-between */}
                <button className="flex md:hidden text-white hover:text-accent-red transition-colors">
                    <Menu className="w-8 h-8" />
                </button>
            </div>
        </motion.nav>
    );
}
