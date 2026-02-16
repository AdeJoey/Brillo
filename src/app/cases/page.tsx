"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const cases = [
    {
        title: "Neon Horizon",
        category: "Branding",
        image: "/placeholder-case-1.jpg" // Placeholder
    },
    {
        title: "Urban Pulse",
        category: "Web Design",
        image: "/placeholder-case-2.jpg" // Placeholder
    },
    {
        title: "Echo Valley",
        category: "Development",
        image: "/placeholder-case-3.jpg" // Placeholder
    },
    {
        title: "Solaris",
        category: "Strategy",
        image: "/placeholder-case-4.jpg" // Placeholder
    }
];

export default function CasesPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="h-[40vh] flex flex-col justify-end px-6 md:px-10 pb-10 relative">
                {/* Decorative Image */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 hidden lg:block bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop"
                        alt="Portfolio projects"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                >
                    Selected <span className="text-accent-red">Works</span>
                </motion.h1>
            </section>

            {/* Featured Projects - White Background */}
            <section className="px-6 md:px-10 py-20 bg-white text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {cases.slice(0, 2).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="aspect-video bg-neutral-900 overflow-hidden rounded-3xl">
                                <Image
                                    src={`https://images.unsplash.com/photo-${index === 0 ? '1558655146-d09347e92766' : '1561070791-2526d30994b5'}?q=80&w=2064&auto=format&fit=crop`}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="mt-4 flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-accent-red transition-colors">{project.title}</h3>
                                    <p className="text-sm text-neutral-500 uppercase tracking-widest">{project.category}</p>
                                </div>
                                <div className="text-accent-red opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    VIEW CASE
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* More Projects - Black Background */}
            <section className="px-6 md:px-10 py-20 bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {cases.slice(2).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden rounded-3xl">
                                <Image
                                    src={index === 0
                                        ? "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2074&auto=format&fit=crop"
                                        : "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                                    }
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="mt-4 flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-accent-red transition-colors">{project.title}</h3>
                                    <p className="text-sm text-neutral-400 uppercase tracking-widest">{project.category}</p>
                                </div>
                                <div className="text-accent-red opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    VIEW CASE
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
