"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        title: "Future Vision"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
        title: "Red Aura"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
        title: "Night Life"
    }
];

export default function BrandSystems() {
    return (
        <section className="w-full bg-[#f4f4f4] text-black py-24 px-6">

            {/* Header */}
            <div className="text-center mb-24 relative">
                <div className="absolute left-10 top-0 text-accent-red hidden md:block animate-spin-slow">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15 9H22L17 14L19 21L12 17L5 21L7 14L2 9H9L12 2Z" />
                    </svg>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]"
                >
                    <div className="text-accent-dark-red">RELOAD DESIGNS MAKE</div>
                    <div className="text-accent-dark-red flex justify-center items-center gap-4">
                        BRAND SYSTEMS
                        <span className="w-20 h-10 md:w-32 md:h-14 rounded-full overflow-hidden relative inline-block border-2 border-accent-red">
                            <Image src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop" fill alt="pill" className="object-cover" />
                        </span>
                        THAT
                    </div>
                    <div className="text-neutral-400">REDEFINE MODERN</div>
                    <div className="text-accent-dark-red">VISUAL CULTURE</div>
                </motion.h2>

                <div className="max-w-md mx-auto mt-10 text-xs text-neutral-600 font-medium leading-relaxed tracking-wide text-center">
                    Reload builds brands that cut through noise, challenge clichés, and actually sell. We combine identity, strategy, and story — all in one.
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* "Our Latest Projects" Label Column */}
                <div className="md:col-span-1 flex flex-col justify-end pb-8">
                    <h3 className="text-[10px] font-bold text-accent-dark-red uppercase leading-tight tracking-widest pl-4 mb-4 border-l border-accent-red/20 underline decoration-accent-red decoration-2 underline-offset-4">
                        OUR <br className="mb-8" /> LATEST <br className="mb-8" /> PROJECTS
                    </h3>
                </div>

                {/* Images */}
                {projects.map((project, idx) => (
                    <div key={project.id} className={`md:col-span-1 group relative rounded-2xl overflow-hidden aspect-[3/4] ${idx === 1 ? 'md:translate-y-12' : ''}`}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />

                        {/* Star Overlay */}
                        <div className="absolute top-4 right-4 text-white opacity-60 group-hover:opacity-100 transition-opacity">
                            ✨
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
