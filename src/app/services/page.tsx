"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const services = [
    {
        title: "Branding Strategy",
        subtitle: "Clarifying who you are.",
        label: "BRAND CORE",
        description: "We build identities that resonate. From logo design to comprehensive brand guidelines, we craft visual systems that define your brand.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Visual Identity",
        subtitle: "Cut through noise.",
        label: "VISUAL SYSTEM",
        description: "Immersive, user-centric interfaces that captivate and convert. We design experiences that users love.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop"
    },
    {
        title: "Creative Direction",
        subtitle: "Setting the tone.",
        label: "NARRATIVE",
        description: "Robust, scalable code using the latest technologies for seamless performance and maintainability.",
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Art Direction",
        subtitle: "Crafting the visual lens.",
        label: "CREATIVE LOCK",
        description: "Data-driven insights to position your brand for long-term success in a competitive landscape.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="h-[50vh] flex flex-col justify-end px-6 md:px-10 pb-20 relative">
                {/* Decorative Image */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop"
                        alt="Design tools"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                >
                    Our <span className="text-accent-red">Services</span>
                </motion.h1>
            </section>

            {/* Services with Images */}
            <section className="px-6 md:px-10 py-10 bg-white text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Image */}
                            <div className="aspect-[16/10] bg-neutral-900 overflow-hidden relative mb-6 rounded-3xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 border border-white/50 rounded-full px-3 py-1 text-[10px] text-white uppercase tracking-wider backdrop-blur-sm bg-black/20">
                                    {service.label}
                                </div>
                            </div>

                            {/* Content */}
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-2 group-hover:text-accent-red transition-colors">
                                {service.title}
                            </h2>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">{service.subtitle}</p>
                            <p className="text-lg text-neutral-700">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Selected Projects Preview */}
            <section className="px-6 md:px-10 py-20 bg-black mt-0">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Selected <span className="text-accent-red">Works</span></h2>
                    <a href="/cases" className="text-sm font-bold tracking-widest uppercase border-b border-accent-red pb-1 hover:text-accent-red transition-colors">View All Cases</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Neon Horizon", category: "Branding", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop" },
                        { title: "Urban Pulse", category: "Web Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop" }
                    ].map((project, index) => (
                        <div key={index} className="group relative cursor-pointer">
                            <div className="aspect-video bg-neutral-800 border border-neutral-700 overflow-hidden rounded-3xl">
                                <Image
                                    src={project.image}
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
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
