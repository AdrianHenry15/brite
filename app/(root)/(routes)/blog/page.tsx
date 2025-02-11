import { getAllBlogs } from "@/sanity/lib/blogs/getAllBlogs";
import BlogCard from "./components/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brite Exterior Cleaning Blog | Tips, News, and Updates",
    description:
        "Stay informed with the latest tips, news, and updates from Brite Exterior Cleaning. Learn how to keep your property looking pristine with expert advice.",
    openGraph: {
        title: "Brite Exterior Cleaning Blog",
        description:
            "Stay informed with the latest tips, news, and updates from Brite Exterior Cleaning.",
        url: "https://briteclt.com/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning Blog",
        description:
            "Stay informed with the latest tips, news, and updates from Brite Exterior Cleaning.",
    },
};

export default async function BlogPage() {
    const blogs = await getAllBlogs();

    if (blogs.length < 1) {
        return <div className="py-48 flex items-center justify-center">No blogs posted.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog: any) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
