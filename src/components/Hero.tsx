"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Target } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen max-h-screen overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-10 py-6 md:pb-8 md:pt-24 pt-24">

                {/* Top/Middle Area - Centered on mobile */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start flex-grow w-full gap-8 md:gap-0">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-3 items-center md:items-start text-center md:text-left mt-0 md:mt-20"
                    >
                        <h1 className="text-3xl md:text-4xl font-normal leading-[1.1] md:leading-[0.9] tracking-tight text-white mix-blend-difference max-w-[200px] md:max-w-none">
                            SOURCE <span className="md:hidden"> </span><br className="hidden md:block" />
                            OF BOLD <span className="md:hidden"> </span><br className="hidden md:block" />
                            IDEAS/
                        </h1>

                        <p className="text-white/70 text-[10px] md:text-xs max-w-[200px] leading-relaxed font-medium md:max-w-[150px] mt-2 md:mt-0">
                            Where brands are reborn <br className="md:hidden" /> and boundaries are erased.
                        </p>
                    </motion.div>

                    {/* Right Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col items-center md:items-end text-center md:text-right mt-0 md:mt-0 mb-0 md:mb-0"
                    >
                        <h2 className="text-3xl md:text-[4rem] lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] md:leading-[0.85] mb-2 text-white mix-blend-difference">
                            CREATIVE <span className="md:hidden"> </span><br className="hidden md:block" />
                            BRANDING <span className="md:hidden"> </span><br className="hidden md:block" />
                            AGENCY
                        </h2>

                        <div className="flex flex-col items-center md:items-end gap-6 md:max-w-[300px] mt-4 md:mt-0">
                            <p className="text-white/80 text-xs leading-relaxed hidden md:block text-right">
                                We craft bold identities that stand out. <br />
                                From strategy to visual DNA — we help <br />
                                brands redefine, not just refresh
                            </p>
                            {/* Circle Arrow */}
                            <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                <ArrowUpRight size={20} strokeWidth={1.5} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Area - Cards & Nav */}
                <div className="hidden md:flex flex-col md:flex-row items-end justify-between gap-4 w-full">

                    <div className="flex items-end gap-5 h-[140px]">
                        {/* Card 1: 85% */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-[#f2f2f2] text-black p-5 rounded-2xl w-[170px] h-full flex flex-col justify-between shadow-lg"
                        >
                            <div className="flex items-start gap-3">
                                <div className="bg-black text-white p-1 rounded-[4px]"><Plus size={10} /></div>
                                <span className="text-[10px] font-bold leading-tight w-20">Brands that lead forward</span>
                            </div>
                            <div>
                                <div className="text-5xl tracking-tighter mb-0 text-[#62050f] font-bold">85%</div>
                                <div className="text-[10px] font-bold text-neutral-500 tracking-wide">Win beyond the market</div>
                            </div>
                        </motion.div>

                        {/* Card 2: Brillo */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-5 rounded-2xl w-[170px] h-full flex flex-col justify-between text-white relative overflow-hidden group shadow-lg"
                        >
                            {/* Red inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#57090f] to-transparent mix-blend-overlay opacity-80" />

                            <div className="relative z-10 flex justify-between items-start w-full">
                                <span className="text-lg font-medium leading-none tracking-tight">Brillo <br /> your brand</span>
                                <Target size={18} className="text-white/80" />
                            </div>
                            <div className="relative z-10 text-[10px] text-white/60 leading-relaxed font-normal">
                                We craft bold brands with strategies built to grow and lead globally.
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Right Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase mb-1"
                    >
                        <div className="flex items-center gap-4 lg:gap-8 border border-white/20 rounded-full px-5 py-3 backdrop-blur-md bg-white/5">
                            <button className="hover:text-accent-red flex items-center gap-2 transition-colors">
                                <span className="bg-white text-black rounded-full p-0.5"><Plus size={8} /></span>
                                <span>BRANDING</span>
                            </button>
                            <span className="text-white/20">|</span>
                            <button className="hover:text-accent-red transition-colors">DIGITAL CAMPAIGNS</button>
                            <span className="text-white/20">|</span>
                            <button className="hover:text-accent-red transition-colors">CONTENT</button>
                            <span className="text-white/20">|</span>
                            <button className="hover:text-accent-red transition-colors">CREATIVE STRATEGY</button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
