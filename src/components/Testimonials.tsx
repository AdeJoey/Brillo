"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "David Chen",
        role: "CEO",
        company: "TechFlow Inc.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        quote: "Brillo transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations."
    },
    {
        name: "Amara Williams",
        role: "Marketing Director",
        company: "Nexus Digital",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        quote: "Working with Brillo was a game-changer. They delivered a website that not only looks stunning but converts like crazy."
    },
    {
        name: "Carlos Rodriguez",
        role: "Founder",
        company: "Studio Collective",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        quote: "The team's strategic approach to our rebranding helped us stand out in a crowded market. Truly exceptional work."
    }
];

export default function Testimonials() {
    return (
        <section className="w-full bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none"
                    >
                        What Our <br />
                        <span className="text-accent-red">Clients Say</span>
                    </motion.h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-neutral-900 p-8 border border-neutral-800 hover:border-accent-red transition-colors"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#ee3900" className="text-accent-red" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-neutral-500">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
