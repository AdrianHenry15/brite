import React from "react";
import { getJobBySlug } from "@/sanity/lib/job-openings/getJobOpeningBySlug";
import ApplicationsForm from "../../components/application-form";

import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const jobDetails = await getJobBySlug(params.slug); // Fetch job details by slug

    return {
        title: `${jobDetails?.title} | Brite Exterior Cleaning Services`,
        description: `${jobDetails?.title} position at Brite Exterior Cleaning. Learn more about the responsibilities, qualifications, and how to apply for this role in Charlotte, NC.`,
        openGraph: {
            title: `${jobDetails?.title} | Brite Exterior Cleaning Services`,
            description: `Explore the ${jobDetails?.title} position. Discover the role's responsibilities, requirements, and how to apply for this exciting opportunity in Charlotte, NC.`,
            url: `https://briteclt.com/careers/job-openings/${params.slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: `${jobDetails?.title} | Brite Exterior Cleaning Services`,
            description: `Apply for the ${jobDetails?.title} position at Brite Exterior Cleaning. Find out more about the job responsibilities and how to apply in Charlotte, NC.`,
        },
    };
}

async function JobOpeningBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const jobs = await getJobBySlug(slug);

    if (!jobs) {
        return <p className="text-center text-gray-500 py-16 px-8">Error fetching job listing</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for {jobs.title}</h1>
                <p className="text-gray-600 mb-6">
                    Location: <span className="font-semibold">{jobs.location}</span>
                </p>
                <ApplicationsForm job_title={jobs.title as string} />
            </div>
        </div>
    );
}

export default JobOpeningBySlugPage;
