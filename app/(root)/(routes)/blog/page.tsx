"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useBlogStore } from "@/store/blog-store";

interface BlogFormData {
    title: string;
    content: string;
}

export default function BlogPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BlogFormData>();
    const { blogPosts, addBlogPost } = useBlogStore();
    const [message, setMessage] = useState<string>("");

    const onSubmit = (data: BlogFormData) => {
        addBlogPost(data.title, data.content);
        setMessage("Blog post published successfully!");
        reset();
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 p-6">
            <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Create a Blog Post</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="mb-4">
                        <input
                            {...register("title", { required: "Title is required" })}
                            type="text"
                            placeholder="Blog Title"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <textarea
                            {...register("content", { required: "Content is required" })}
                            placeholder="Write your blog content..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={5}
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Publish
                    </button>
                </form>

                {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            </div>

            {/* Blog Posts List */}
            {blogPosts.length > 0 && (
                <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800">Published Blogs</h3>
                    <ul className="mt-4 space-y-6">
                        {blogPosts.map((post) => (
                            <li
                                key={post.id}
                                className="p-4 border rounded-lg bg-gray-50 shadow-sm"
                            >
                                <h4 className="text-xl font-semibold text-gray-800">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <p className="text-gray-700 mt-2">{post.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
