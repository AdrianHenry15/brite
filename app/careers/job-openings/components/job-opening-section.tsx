import Link from "next/link";
import React from "react";
import JobOpeningsCard from "./card";
import { Job } from "@/sanity.types";

interface IJobOpeningsProps {
    jobs: Job[];
}

const JobOpeningSection = ({ jobs }: IJobOpeningsProps) => {
    return (
        <section className="w-full bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        Current Openings
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Explore available roles and join the Brite Exterior Cleaning team.
                    </p>
                </header>

                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <JobOpeningsCard key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-10 text-center">
                        <p className="text-sm text-muted-foreground">
                            We currently have no job openings available. Please check back later!
                        </p>
                    </div>
                )}

                {/* Optional CTA if no jobs */}
                {jobs.length === 0 && (
                    <div className="mt-6 flex justify-center">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:scale-[1.03] hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Contact Us Instead
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobOpeningSection;
