import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug } from "@/sanity/lib/blogs/getBlogBySlug";
import { imageUrl } from "@/sanity/lib/image-url";
import { PortableText } from "@portabletext/react";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    if (!params?.slug) {
        return notFound();
    }

    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        return notFound();
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 text-sm">
                {new Date(blog.publishedAt ? blog.publishedAt : "").toLocaleDateString()}
            </p>
            {blog.mainImage?.asset && (
                <Image
                    src={imageUrl(blog.mainImage.asset).url()}
                    alt={blog.title ? blog.title : ""}
                    width={800}
                    height={400}
                    className="w-full my-6 rounded-lg"
                />
            )}
            <div className="prose prose-lg max-w-none text-gray-700">
                <PortableText
                    value={blog.body!}
                    components={{
                        types: {
                            image: ({ value }) => (
                                <Image
                                    src={imageUrl(value.asset).url()}
                                    alt="Blog Image"
                                    width={800}
                                    height={500}
                                    className="w-full rounded-lg my-4"
                                />
                            ),
                        },
                    }}
                />
            </div>
        </div>
    );
}
