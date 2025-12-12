"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function VisualStatements() {
    return (
        <section className="w-full bg-white text-black py-24 px-6 select-none">

            {/* Big Headline */}
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]"
                >
                    <div className="text-accent-dark-red">WE TURN IDEAS</div>
                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-accent-dark-red">
                        INTO <span className="inline-block px-4 bg-accent-red text-white -skew-x-12 transform hover:skew-x-0 transition-transform duration-500 cursor-pointer">VISUAL</span> STATEMENTS
                    </div>
                    <div className="text-neutral-400 mt-2 md:mt-0">FROM VISION TO DELIVERY —</div>
                    <div className="text-accent-dark-red">IMPACT THAT LASTS</div>
                </motion.h2>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Man Profile */}
                <div className="group relative cursor-pointer">
                    <div className="aspect-square rounded-3xl overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
                            alt="Visual 1"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-6 flex items-start gap-4">
                        <div className="text-accent-red font-bold text-4xl">*</div>
                        <p className="text-sm font-medium leading-relaxed max-w-[250px] text-neutral-600">
                            We design visual worlds that resonate. From brand core to final detail — we build presence that lasts.
                        </p>
                    </div>
                </div>

                {/* Card 2: Center Gradient Block */}
                <div className="group relative md:translate-y-12 transition-transform duration-500 ease-out hover:-translate-y-2">
                    <div className="aspect-square bg-gradient-to-tr from-[#57090f] to-[#ee3900] rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl shadow-red-900/20">
                        {/* Abstract Noise/Texture */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>

                        <div className="relative z-10 opacity-90 flex items-center">
                            <span className="text-xl font-bold tracking-tighter text-accent-red rounded-[4px] shadow-sm">B</span><span className="text-white font-bold text-sm tracking-widest">RILL</span><span className="text-xl font-bold tracking-tighter text-accent-red rounded-[4px] shadow-sm">O</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-normal leading-tight">
                                Explore the <br />
                                world's <span className="border border-white/30 rounded-full px-2 italic">leading</span> <br />
                                designers
                            </h3>
                            <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-red hover:scale-125 transition-transform duration-300">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3: Woman Silhouette */}
                <div className="group relative pt-0 md:pt-24 cursor-pointer">
                    <div className="aspect-square rounded-3xl overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                            alt="Visual 3"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="mt-8">
                        <button className="w-full py-4 rounded-full border border-neutral-300 flex items-center justify-between px-8 group-hover:bg-black group-hover:text-white transition-all uppercase text-xs font-bold tracking-widest">
                            <span>EXPLORE NOW</span>
                            <ArrowUpRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
