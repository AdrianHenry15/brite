"use client";

import React from "react";
import { Job } from "@/sanity.types";
import { useRouter } from "next/navigation";

interface IJobOpeningsCardProps {
    job: Job;
}

const JobOpeningsCard = ({ job }: IJobOpeningsCardProps) => {
    const router = useRouter();

    const publishedDate = job.publishedAt
        ? new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          }).format(new Date(job.publishedAt))
        : "Recently posted";

    const excerpt = job.excerpt ?? "";
    const truncatedExcerpt = excerpt.length > 100 ? `${excerpt.slice(0, 100)}...` : excerpt;

    const jobSlug = job.slug?.current;

    return (
        <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
                    {job.title}
                </h3>

                <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
                    <p>{job.location}</p>
                    <p>{publishedDate}</p>
                </div>

                {truncatedExcerpt && (
                    <p className="my-4 text-sm leading-6 text-muted-foreground">
                        {truncatedExcerpt}
                    </p>
                )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                    type="button"
                    disabled={!jobSlug}
                    onClick={() => router.push(`/careers/job-openings/${jobSlug}`)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                >
                    See Job Opening
                </button>

                <button
                    type="button"
                    disabled={!jobSlug}
                    onClick={() => router.push(`/careers/job-openings/application/${jobSlug}`)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Apply Now
                </button>
            </div>
        </article>
    );
};

export default JobOpeningsCard;
