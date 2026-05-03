import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import BackButton from "@/components/back-button";
import { imageUrl } from "@/sanity/lib/image-url";
import { getJobBySlug } from "@/sanity/lib/job-openings/getJobOpeningBySlug";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    if (!slug) {
        return {
            title: "Job Opening Not Found | Brite Exterior Cleaning",
            robots: { index: false, follow: false },
        };
    }

    const job = await getJobBySlug(slug);

    if (!job) {
        return {
            title: "Job Opening Not Found | Brite Exterior Cleaning",
            description: "The requested job opening could not be found.",
            robots: { index: false, follow: false },
        };
    }

    const title = `${job.title} | Brite Exterior Cleaning Careers`;
    const description =
        job.excerpt ??
        `View details and apply for the ${job.title} role at Brite Exterior Cleaning.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/careers/job-openings/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/careers/job-openings/${slug}`,
            siteName: "Brite Exterior Cleaning",
            type: "article",
            locale: "en_US",
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function JobOpeningsPageBySlug({ params }: PageProps) {
    const { slug } = await params;

    if (!slug) return notFound();

    const job = await getJobBySlug(slug);

    if (!job) return notFound();

    const portableTextComponents: PortableTextComponents = {
        types: {
            image: ({ value }) => (
                <Image
                    src={imageUrl(value.asset).url()}
                    alt={`${job.title} image`}
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

    const publishedDate = job.publishedAt
        ? new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          }).format(new Date(job.publishedAt))
        : "Recently posted";

    return (
        <main className="min-h-screen w-full bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <article className="mx-auto w-full max-w-3xl">
                <BackButton title="Back to Careers" link="/careers" />

                <header className="mt-8 border-b border-border pb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Job Opening
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {job.title}
                    </h1>

                    <div className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
                        {job.location && <span>{job.location}</span>}
                        {job.location && <span className="hidden sm:inline">•</span>}
                        <span>{publishedDate}</span>
                    </div>
                </header>

                <div className="pb-10 pt-8">
                    <PortableText value={job.body || []} components={portableTextComponents} />
                </div>

                <div className="my-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row">
                    <Link
                        href={`/careers/job-openings/application/${job.slug?.current}`}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Apply Now
                    </Link>

                    <Link
                        href="/careers"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Back to Careers
                    </Link>
                </div>
            </article>
        </main>
    );
}
