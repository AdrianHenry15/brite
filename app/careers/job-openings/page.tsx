import React from "react";
import JobOpeningsCard from "./components/card";
import { getAllJobOpenings } from "@/sanity/lib/job-openings/getAllJobOpenings";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Current Job Openings | Brite Exterior Cleaning Services",
    description:
        "Browse the latest job openings at Brite Exterior Cleaning. Join our team and work in exterior cleaning, pressure washing, holiday lighting installation, and more in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Current Job Openings | Brite Exterior Cleaning Services",
        description:
            "Looking for a new job? Explore the latest career opportunities at Brite Exterior Cleaning in Charlotte, NC, including positions in pressure washing, gutter cleaning, and holiday lighting installation.",
        url: "https://briteclt.com/careers/job-openings",
    },
    twitter: {
        card: "summary_large_image",
        title: "Current Job Openings | Brite Exterior Cleaning Services",
        description:
            "Find your next job with Brite Exterior Cleaning. We're hiring for various positions, including exterior cleaning, pressure washing, and holiday lighting installation in Charlotte, NC.",
    },
};

const JobOpeningsPage = async () => {
    const jobs = await getAllJobOpenings();

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h1>
                <p className="text-lg text-gray-600">
                    Explore exciting career opportunities at Brite and help us brighten Charlotte,
                    NC!
                </p>
            </div>

            {/* Job Listings */}
            {Array.isArray(jobs) && jobs.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <JobOpeningsCard key={job._id} job={job} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 pb-48">
                    We currently have no job openings available. Please check back later!
                </p>
            )}

            {/* Call-to-Action */}
            {/* <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Don't see a role that fits you?
                </h2>
                <p className="text-gray-600 mt-2 px-10">
                    We're always looking for talented individuals. Send us your resume and tell us
                    how you can make a difference at Brite.
                </p>
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className="mt-6 border-blue-500 text-blue-500 hover:bg-blue-50"
                >
                    Submit Your Resume
                </Button>
            </div> */}
        </div>
    );
};

export default JobOpeningsPage;
