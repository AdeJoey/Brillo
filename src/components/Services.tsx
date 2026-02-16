"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Branding Strategy",
        subtitle: "Clarifying who you are.",
        label: "BRAND CORE",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Visual Identity",
        subtitle: "Cut through noise.",
        label: "VISUAL SYSTEM",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop"
    },
    {
        title: "Creative Direction",
        subtitle: "Setting the tone.",
        label: "NARRATIVE",
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Art Direction",
        subtitle: "Crafting the visual lens.",
        label: "CREATIVE LOCK",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop"
    }
];

export default function Services() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Initial entrance animation
        anime({
            targets: cardsRef.current,
            translateY: [100, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
            duration: 1200
        });
    }, []);

    const handleMouseEnter = (index: number) => {
        anime({
            targets: cardsRef.current[index],
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            duration: 400,
            easing: 'easeOutQuad'
        });
        // Dim others
        anime({
            targets: cardsRef.current.filter((_, i) => i !== index),
            opacity: 0.5,
            scale: 0.95,
            duration: 400,
            easing: 'easeOutQuad'
        });
    };

    const handleMouseLeave = () => {
        // Reset all
        anime({
            targets: cardsRef.current,
            scale: 1,
            opacity: 1,
            boxShadow: '0 0 0 rgba(0,0,0,0)',
            duration: 400,
            easing: 'easeOutQuad'
        });
    };

    return (
        <section className="w-full bg-[#f4f4f4] text-accent-dark-red py-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">

            {/* Headlines */}
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                    Everything Your <br />
                    Brand Needs To Grow
                </h2>
            </div>

            {/* Advanced Animated Grid (No Scroll) */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-7xl mx-auto h-[600px] md:h-[500px]" onMouseLeave={handleMouseLeave}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={el => { cardsRef.current[index] = el }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className="relative w-full md:w-1/4 h-full bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer shadow-lg group"
                    >
                        <Link href="/services" className="block w-full h-full">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            <div className="absolute top-6 left-6 border border-white/30 rounded-full px-4 py-1 text-[10px] text-white uppercase tracking-wider backdrop-blur-sm">
                                {service.label}
                            </div>

                            <div className="absolute bottom-8 left-6 text-white w-full pr-6">
                                <h3 className="text-3xl font-medium leading-none mb-2 md:text-2xl lg:text-3xl break-words">{service.title}</h3>
                                <div className="flex justify-between items-end mt-4 border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white/60 text-xs">{service.subtitle}</p>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
}
