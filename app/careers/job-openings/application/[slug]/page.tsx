import React from "react";
import { Metadata } from "next";

import { getJobBySlug } from "@/sanity/lib/job-openings/getJobOpeningBySlug";
import ApplicationsForm from "../../../components/application-form";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const job = await getJobBySlug(slug);

    if (!job) {
        return {
            title: "Job Application Not Found | Brite Exterior Cleaning",
            description: "The job application page could not be found.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: `Apply for ${job.title} | Brite Exterior Cleaning`,
        description: `Apply for the ${job.title} role at Brite Exterior Cleaning in ${job.location ?? "Charlotte, NC"}.`,
        alternates: {
            canonical: `/careers/job-openings/application/${slug}`,
        },
        openGraph: {
            title: `Apply for ${job.title} | Brite Exterior Cleaning`,
            description: `Submit your application for the ${job.title} role with Brite Exterior Cleaning.`,
            url: `/careers/job-openings/application/${slug}`,
            siteName: "Brite Exterior Cleaning",
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary",
            title: `Apply for ${job.title} | Brite Exterior Cleaning`,
            description: `Apply for the ${job.title} role with Brite Exterior Cleaning.`,
        },
        robots: {
            index: false,
            follow: false,
        },
    };
}

async function ApplicationBySlugPage({ params }: PageProps) {
    const { slug } = await params;
    const job = await getJobBySlug(slug);

    if (!job) {
        return (
            <main className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
                <div className="w-full max-w-xl rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-10 text-center">
                    <p className="text-sm text-muted-foreground">Error fetching job listing.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen w-full bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl shadow-primary/10 sm:p-8">
                <header className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Job Application
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                        Apply for {job.title}
                    </h1>

                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                        Location:{" "}
                        <span className="font-semibold text-card-foreground">{job.location}</span>
                    </p>
                </header>

                <ApplicationsForm job={job.title as string} />
            </section>
        </main>
    );
}

export default ApplicationBySlugPage;
