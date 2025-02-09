import { getAllBlogs } from "@/sanity/lib/blogs/getAllBlogs";
import BlogCard from "./components/blog-card";

export default async function BlogPage() {
    const blogs = await getAllBlogs();

    if (blogs.length < 1) {
        return <div className="py-48 flex items-center justify-center">No blogs posted.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <BlogCard blog={blog} />
                ))}
            </div>
        </div>
    );
}
