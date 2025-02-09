import { Blog } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/image-url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlogCardProps {
    blog: Blog;
}

const BlogCard = (props: IBlogCardProps) => {
    const { blog } = props;
    return (
        <Link key={blog._id} href={`/blog/${blog.slug}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
                <Image
                    src={blog.mainImage?.asset ? imageUrl(blog.mainImage.asset).url() : ""}
                    alt={blog.title as string}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{blog.publishedAt}</p>
                    <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                    <p className="text-blue-500 mt-2 font-semibold">Read More →</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
