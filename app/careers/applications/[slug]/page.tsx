import React from "react";
import { Jobs } from "../../../../lib/jobs";
import ApplicationsForm from "../components/form";

async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const job = Jobs.find((job) => job.id === parseInt(slug as string));

    if (!job) {
        return <p>Loading job details...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for {job.title}</h1>
                <p className="text-gray-600 mb-6">
                    Location: <span className="font-semibold">{job.location}</span>
                </p>
                <ApplicationsForm />
            </div>
        </div>
    );
}

export default ApplicationPage;
