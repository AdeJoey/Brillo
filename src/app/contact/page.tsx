"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="h-[50vh] flex flex-col justify-end px-6 md:px-10 pb-20 relative">
                {/* Decorative Image */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                        alt="Contact and communication"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                >
                    Let's <span className="text-accent-red">Talk</span>
                </motion.h1>
            </section>

            {/* Contact Info - White Background */}
            <section className="px-6 md:px-10 py-20 bg-white text-black">
                <div className="max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl mb-12 max-w-2xl">
                        Have a project in mind? We'd love to hear from you. Fill out the form or reach out directly.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Email</h3>
                            <a href="mailto:hello@brillo.agency" className="text-xl font-bold hover:text-accent-red transition-colors">hello@brillo.agency</a>
                        </div>
                        <div>
                            <h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Phone</h3>
                            <a href="tel:+1234567890" className="text-xl font-bold hover:text-accent-red transition-colors">+1 (234) 567-890</a>
                        </div>
                        <div>
                            <h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Address</h3>
                            <p className="text-xl font-bold">123 Design St, Creative City</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form - Black Background */}
            <section className="px-6 md:px-10 py-20 bg-black">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tighter">Send us a <span className="text-accent-red">Message</span></h2>
                    <form className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="NAME"
                                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:outline-none focus:border-accent-red transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:outline-none focus:border-accent-red transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                rows={4}
                                placeholder="MESSAGE"
                                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:outline-none focus:border-accent-red transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-accent-red hover:text-white transition-all w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
