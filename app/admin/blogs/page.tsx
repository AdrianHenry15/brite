import BlogCard from "@/app/(root)/(routes)/blog/components/blog-card";
import { Blog } from "@/sanity.types";
import { getAllBlogs } from "@/sanity/lib/blogs/getAllBlogs";

const AdminBlogsPage = async () => {
    const blogs = await getAllBlogs();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center pt-6 md:pt-0">
                All Blogs
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog: Blog) => (
                    <BlogCard blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default AdminBlogsPage;
