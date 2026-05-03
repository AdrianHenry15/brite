import { Blog } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/image-url";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardProps {
    blog: Blog;
}

const BlogCard = ({ blog }: IBlogCardProps) => {
    const publishedDate = blog.publishedAt
        ? new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          }).format(new Date(blog.publishedAt))
        : "Recently posted";

    const excerpt = blog.excerpt ?? "";
    const truncatedExcerpt = excerpt.length > 100 ? `${excerpt.slice(0, 100)}...` : excerpt;

    const imageSrc = blog.mainImage?.asset ? imageUrl(blog.mainImage.asset).url() : null;

    return (
        <Link href={`/blog/${blog.slug?.current || ""}`} className="group block h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                {/* Image */}
                {imageSrc && (
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={blog.title || "Blog Image"}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-lg font-semibold tracking-tight text-card-foreground">
                        {blog.title}
                    </h2>

                    <div className="mt-2 text-sm text-muted-foreground">{publishedDate}</div>

                    {truncatedExcerpt && (
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {truncatedExcerpt}
                        </p>
                    )}

                    <div className="mt-auto pt-4">
                        <span className="text-sm font-semibold text-primary transition-colors group-hover:underline">
                            Read More →
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
