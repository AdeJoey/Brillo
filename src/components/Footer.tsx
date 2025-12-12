"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-[#f4f4f4] text-accent-dark-red py-10 px-6 rounded-t-3xl border-t border-neutral-200 mt-10">

            {/* Grid Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold mb-4 text-xs tracking-widest">SOCIALS</h4>
                    <ul className="space-y-2 text-sm font-medium opacity-80">
                        <li><a href="#" className="hover:text-accent-red transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-accent-red transition-colors">Twitter/X</a></li>
                        <li><a href="#" className="hover:text-accent-red transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-accent-red transition-colors">Behance</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-xs tracking-widest">SITEMAP</h4>
                    <ul className="space-y-2 text-sm font-medium opacity-80">
                        <li><a href="#" className="hover:text-accent-red transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-accent-red transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-accent-red transition-colors">Cases</a></li>
                        <li><a href="#" className="hover:text-accent-red transition-colors">Agency</a></li>
                    </ul>
                </div>

                <div className="col-span-2 md:col-span-2 text-right flex flex-col justify-between items-end h-full min-h-[100px]">
                    <div className="flex items-center group cursor-default">
                        <span className="text-4xl md:text-6xl font-bold tracking-tighter text-accent-red leading-none group-hover:rotate-12 transition-transform duration-300">B</span>
                        <span className="text-3xl md:text-5xl font-bold tracking-tighter text-accent-dark-red leading-none">RILL</span>
                        <span className="text-4xl md:text-6xl font-bold tracking-tighter text-accent-red leading-none group-hover:-rotate-12 transition-transform duration-300">O</span>
                    </div>
                    <div className="text-[10px] uppercase opacity-40 mt-4 tracking-widest">
                        © 2025 Brillo Agency. All rights reserved.
                    </div>
                </div>
            </div>

        </footer>
    );
}
