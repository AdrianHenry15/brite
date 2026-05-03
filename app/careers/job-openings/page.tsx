import React from "react";
import { Metadata } from "next";

import JobOpeningsCard from "./components/card";
import { getAllJobOpenings } from "@/sanity/lib/job-openings/getAllJobOpenings";

export const metadata: Metadata = {
    title: "Current Job Openings | Brite Exterior Cleaning",
    description:
        "Browse current job openings at Brite Exterior Cleaning in Charlotte, NC, including exterior cleaning, pressure washing, soft washing, and holiday lighting roles.",

    alternates: {
        canonical: "/careers/job-openings",
    },

    openGraph: {
        title: "Current Job Openings | Brite Exterior Cleaning",
        description:
            "Explore open roles with Brite Exterior Cleaning and join a team serving homes and businesses across Charlotte, NC.",
        url: "/careers/job-openings",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Current Job Openings | Brite Exterior Cleaning",
        description: "Find current job openings with Brite Exterior Cleaning in Charlotte, NC.",
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        "Brite Exterior Cleaning jobs",
        "current job openings Charlotte NC",
        "exterior cleaning jobs",
        "pressure washing jobs Charlotte NC",
        "soft washing jobs",
        "holiday lighting jobs Charlotte NC",
    ],
};

const JobOpeningsPage = async () => {
    const jobs = await getAllJobOpenings();

    return (
        <main className="min-h-screen w-full bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <section className="mx-auto flex w-full max-w-6xl flex-col">
                <header className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Careers
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Join Our Team
                    </h1>

                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        Explore career opportunities at Brite and help us brighten Charlotte, NC.
                    </p>
                </header>

                {Array.isArray(jobs) && jobs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <JobOpeningsCard key={job._id ?? job.slug?.current} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-12 text-center">
                        <p className="text-sm text-muted-foreground">
                            We currently have no job openings available. Please check back later!
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
};

export default JobOpeningsPage;
