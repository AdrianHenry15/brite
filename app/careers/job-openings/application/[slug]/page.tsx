import React from "react";
import { getJobBySlug } from "@/sanity/lib/job-openings/getJobOpeningBySlug";
import ApplicationsForm from "../../../components/application-form";

async function JobOpeningBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
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
                <ApplicationsForm job={jobs.title as string} />
            </div>
        </div>
    );
}

export default JobOpeningBySlugPage;
