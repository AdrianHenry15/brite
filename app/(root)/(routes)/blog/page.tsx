import { Metadata } from "next";

import { getAllBlogs } from "@/sanity/lib/blogs/getAllBlogs";
import BlogCard from "./components/blog-card";

export const metadata: Metadata = {
    title: "Exterior Cleaning Blog | Brite Exterior Cleaning",
    description:
        "Read exterior cleaning tips, seasonal maintenance advice, pressure washing insights, soft washing guidance, and company updates from Brite Exterior Cleaning.",

    alternates: {
        canonical: "/blog",
    },

    openGraph: {
        title: "Exterior Cleaning Blog | Brite Exterior Cleaning",
        description:
            "Expert exterior cleaning tips, maintenance advice, and updates from Brite Exterior Cleaning.",
        url: "/blog",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Exterior Cleaning Blog | Brite Exterior Cleaning",
        description:
            "Read exterior cleaning tips, seasonal maintenance advice, and company updates from Brite Exterior Cleaning.",
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        "exterior cleaning blog",
        "pressure washing tips",
        "soft washing tips",
        "window cleaning advice",
        "gutter cleaning maintenance",
        "Charlotte exterior cleaning",
        "Brite Exterior Cleaning blog",
    ],
};

export default async function BlogPage() {
    const blogs = await getAllBlogs();

    if (!blogs || blogs.length < 1) {
        return (
            <main className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-24 text-foreground">
                <p className="rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center text-sm text-muted-foreground">
                    No blogs posted.
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen w-full bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <section className="mx-auto flex w-full max-w-6xl flex-col">
                <header className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Brite Blog
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Latest Blog Posts
                    </h1>

                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        Tips, updates, and expert insights for keeping your property clean,
                        protected, and looking its best.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog: any) => (
                        <BlogCard key={blog._id ?? blog.slug?.current} blog={blog} />
                    ))}
                </div>
            </section>
        </main>
    );
}
