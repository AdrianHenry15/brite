import React from "react";
import { getJobBySlug } from "@/sanity/lib/job-openings/getJobOpeningBySlug";
import ApplicationsForm from "../../applications/application-form";

async function JobOpeningBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const jobs = await getJobBySlug(slug);

    if (!jobs) {
        return <p>Loading job details...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for {jobs.title}</h1>
                <p className="text-gray-600 mb-6">
                    Location: <span className="font-semibold">{jobs.location}</span>
                </p>
                <ApplicationsForm />
            </div>
        </div>
    );
}

export default JobOpeningBySlugPage;
