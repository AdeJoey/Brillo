"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="h-[60vh] flex flex-col justify-center px-6 md:px-10 pt-20 relative">
                {/* Decorative Image */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 hidden lg:block bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                >
                    About <span className="text-accent-red">Us</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                    className="mt-8 text-xl md:text-2xl max-w-2xl text-gray-400"
                >
                    We are a creative agency dedicated to crafting bold digital experiences that define brands and drive culture.
                </motion.p>
            </section>

            {/* Content Section */}
            <section className="px-6 md:px-10 py-20 bg-white text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tighter">OUR MISSION</h2>
                        <p className="text-lg leading-relaxed">
                            At Brillo, we believe in the power of design to transform businesses. We don't just make things look good; we make them work. Our approach is rooted in strategy, creativity, and technical excellence.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tighter">OUR VISION</h2>
                        <p className="text-lg leading-relaxed">
                            To be the leading force in digital innovation, pushing boundaries and setting new standards for what is possible on the web. We strive to create work that inspires and endures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="px-6 md:px-10 py-20">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 uppercase">The <span className="text-accent-red">Team</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <div className="group relative">
                        <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative mb-4 rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop"
                                alt="Sarah Jenkins"
                                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter">Sarah Jenkins</h3>
                        <p className="text-accent-red text-sm font-bold tracking-widest uppercase mb-2">Creative Director</p>
                        <div className="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Twitter</a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Instagram</a>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="group relative">
                        <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop"
                                alt="Marcus Aurelius"
                                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter">Marcus Olatunji</h3>
                        <p className="text-accent-red text-sm font-bold tracking-widest uppercase mb-2">Senior Designer</p>
                        <div className="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Behance</a>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="group relative">
                        <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1886&auto=format&fit=crop"
                                alt="Elena Rodriguez"
                                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter">Elena Rodriguez</h3>
                        <p className="text-accent-red text-sm font-bold tracking-widest uppercase mb-2">Art Director</p>
                        <div className="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
                            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Dribbble</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
