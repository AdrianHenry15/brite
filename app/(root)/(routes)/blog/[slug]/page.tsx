import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import BackButton from "@/components/back-button";
import UserDefaultImage from "@/public/assets/icons/user (1).png";
import { getBlogBySlug } from "@/sanity/lib/blogs/getBlogBySlug";
import { imageUrl } from "@/sanity/lib/image-url";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Post Not Found | Brite Exterior Cleaning",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${blog.title} | Brite Exterior Cleaning`;
    const description =
        blog.excerpt ??
        "Read exterior cleaning tips, maintenance advice, and company updates from Brite Exterior Cleaning.";

    const image = blog.mainImage?.asset ? imageUrl(blog.mainImage.asset).url() : undefined;

    return {
        title,
        description,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/blog/${slug}`,
            siteName: "Brite Exterior Cleaning",
            type: "article",
            locale: "en_US",
            publishedTime: blog.publishedAt ?? undefined,
            authors: blog.author?.name ? [blog.author.name] : undefined,
            images: image
                ? [
                      {
                          url: image,
                          width: 1200,
                          height: 630,
                          alt: blog.title ?? "Brite Exterior Cleaning blog post",
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: image ? "summary_large_image" : "summary",
            title,
            description,
            images: image ? [image] : undefined,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function BlogPageBySlug({ params }: PageProps) {
    const { slug } = await params;

    if (!slug) return notFound();

    const blog = await getBlogBySlug(slug);

    if (!blog) return notFound();

    const portableTextComponents: PortableTextComponents = {
        types: {
            image: ({ value }) => (
                <Image
                    src={imageUrl(value.asset).url()}
                    alt={blog.title || "Blog image"}
                    width={800}
                    height={500}
                    className="my-6 w-full rounded-2xl object-cover"
                />
            ),
        },
        block: {
            h1: ({ children }) => (
                <h1 className="my-6 text-3xl font-bold tracking-tight text-foreground">
                    {children}
                </h1>
            ),
            h2: ({ children }) => (
                <h2 className="my-5 text-2xl font-semibold tracking-tight text-foreground">
                    {children}
                </h2>
            ),
            h3: ({ children }) => (
                <h3 className="my-4 text-xl font-semibold tracking-tight text-foreground">
                    {children}
                </h3>
            ),
            normal: ({ children }) => (
                <p className="my-4 leading-7 text-muted-foreground">{children}</p>
            ),
            blockquote: ({ children }) => (
                <blockquote className="my-6 border-l-4 border-primary bg-muted/40 py-3 pl-4 italic text-muted-foreground">
                    {children}
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }) => (
                <ul className="my-4 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>
            ),
            number: ({ children }) => (
                <ol className="my-4 list-decimal space-y-2 pl-6 text-muted-foreground">
                    {children}
                </ol>
            ),
        },
        marks: {
            strong: ({ children }) => (
                <strong className="font-bold text-foreground">{children}</strong>
            ),
            em: ({ children }) => <em className="italic">{children}</em>,
            link: ({ value, children }) => (
                <a
                    href={value?.href}
                    className="font-medium text-primary underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ),
        },
    };

    const authorImageUrl = blog.author?.image
        ? imageUrl(blog.author.image).url()
        : UserDefaultImage;

    const authorName = blog.author?.name || "Brite Exterior Cleaning";

    const publishedDate = blog.publishedAt
        ? new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          }).format(new Date(blog.publishedAt))
        : "Recently posted";

    return (
        <main className="min-h-screen w-full bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <article className="mx-auto w-full max-w-3xl">
                <BackButton title="Back to Blog" link="/blog" />

                <header className="mt-8 border-b border-border pb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Brite Blog
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {blog.title}
                    </h1>

                    <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                        <Image
                            src={authorImageUrl}
                            alt={authorName}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full border border-border object-cover"
                        />

                        <p>
                            By <span className="font-semibold text-foreground">{authorName}</span> •{" "}
                            {publishedDate}
                        </p>
                    </div>
                </header>

                {blog.mainImage?.asset && (
                    <Image
                        src={imageUrl(blog.mainImage.asset).url()}
                        alt={blog.title || "Blog image"}
                        width={800}
                        height={400}
                        priority
                        className="my-8 w-full rounded-2xl object-cover shadow-sm"
                    />
                )}

                <div className="pb-10">
                    <PortableText value={blog.body || []} components={portableTextComponents} />
                </div>

                <div className="border-t border-border pt-8">
                    <BackButton title="Back to Blog" link="/blog" />
                </div>
            </article>
        </main>
    );
}
