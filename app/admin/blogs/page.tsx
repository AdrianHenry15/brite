import BlogCard from "@/app/(root)/(routes)/blog/components/blog-card";
import { getAllBlogs } from "@/sanity/lib/actions/blogs";

export default async function Page() {
    const blogs = await getAllBlogs();

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
            </div>

            <div className="mx-auto p-6 h-full lg:h-screen w-full">
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                    {blogs.map((blog: any) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}
