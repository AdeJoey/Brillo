import Navbar from "@/components/Navbar";

// This is a server component by default
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />

            <article className="pt-32 px-6 md:px-10 max-w-4xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase text-accent-red">
                        {slug.replace(/-/g, " ")}
                    </h1>
                    <p className="text-neutral-400 font-mono uppercase tracking-widest">
                        Published on October 12, 2025
                    </p>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-2xl leading-relaxed text-neutral-200 mb-8">
                        This is a placeholder for the blog post content. In a real application, you would fetch the content based on the slug <strong>{slug}</strong> from a CMS or markdown files.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>The Evolution of Interfaces</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <blockquote>
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </blockquote>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </article>
        </main>
    );
}
