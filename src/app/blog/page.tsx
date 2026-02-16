"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

// Mock Data
const posts = [
    {
        slug: "future-of-digital-design",
        title: "The Future of Digital Design in 2026",
        date: "October 12, 2025",
        author: "Sarah Jenkins",
        readTime: "5 min read",
        category: "Design Trends",
        excerpt: "Exploring the trends that will shape the next decade of user interfaces and experiences.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop"
    },
    {
        slug: "minimalism-vs-maximalism",
        title: "Minimalism vs Maximalism: Finding Balance",
        date: "September 28, 2025",
        author: "Marcus Olatunji",
        readTime: "4 min read",
        category: "Design Philosophy",
        excerpt: "Why the best designs often lie somewhere in between the two extremes.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop"
    },
    {
        slug: "branding-in-the-ai-era",
        title: "Branding in the Era of Artificial Intelligence",
        date: "September 15, 2025",
        author: "Elena Rodriguez",
        readTime: "6 min read",
        category: "Branding",
        excerpt: "How AI is changing the way we perceive and interact with brands.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2064&auto=format&fit=crop"
    },
    {
        slug: "typography-matters",
        title: "Why Typography Still Matters in 2026",
        date: "August 20, 2025",
        author: "Sarah Jenkins",
        readTime: "7 min read",
        category: "Typography",
        excerpt: "The timeless principles of type design and how they apply to modern interfaces.",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop"
    },
    {
        slug: "color-psychology-brand-identity",
        title: "Color Psychology in Brand Identity",
        date: "August 5, 2025",
        author: "Marcus Olatunji",
        readTime: "5 min read",
        category: "Branding",
        excerpt: "Understanding the emotional impact of color choices in your brand strategy.",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        slug: "sustainable-design-practices",
        title: "Sustainable Design Practices for Digital Products",
        date: "July 22, 2025",
        author: "Elena Rodriguez",
        readTime: "8 min read",
        category: "Sustainability",
        excerpt: "How to reduce the environmental impact of your digital designs without compromising quality.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <section className="h-[40vh] flex flex-col justify-end px-6 md:px-10 pb-10 relative">
                {/* Decorative Image */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 hidden lg:block bg-black rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
                        alt="Blog and insights"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                >
                    Our <span className="text-accent-red">Insights</span>
                </motion.h1>
            </section>

            {/* Featured Post */}
            <section className="px-6 md:px-10 py-10 bg-white text-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href={`/blog/${posts[0].slug}`} className="group block">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative rounded-3xl">
                                <Image
                                    src={posts[0].image}
                                    alt={posts[0].title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-accent-red text-xs font-bold tracking-widest uppercase mb-4">{posts[0].category}</span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 group-hover:text-accent-red transition-colors">
                                    {posts[0].title}
                                </h2>
                                <p className="text-xl text-neutral-600 mb-6">
                                    {posts[0].excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-neutral-500">
                                    <span>{posts[0].author}</span>
                                    <span>•</span>
                                    <span>{posts[0].date}</span>
                                    <span>•</span>
                                    <span>{posts[0].readTime}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </section>

            {/* Blog Grid */}
            <section className="px-6 md:px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.slice(1).map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative mb-4 rounded-3xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-accent-red text-xs font-bold tracking-widest uppercase">{post.category}</span>
                                <h3 className="text-2xl font-bold tracking-tighter my-3 group-hover:text-accent-red transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-neutral-400 mb-4">{post.excerpt}</p>
                                <div className="flex items-center gap-2 text-xs text-neutral-500">
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
