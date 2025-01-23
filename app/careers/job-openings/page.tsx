import { Button } from "@mui/material";
import React from "react";
import JobOpeningsCard from "./components/card";
import { Jobs } from "../../../lib/jobs";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const JobOpenings = () => {
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Jobs.map((job) => (
                    <JobOpeningsCard key={job.id} job={job} />
                ))}
            </div>

            {/* Call-to-Action */}
            <div className="mt-16 text-center">
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
            </div>
        </div>
    );
};

export default JobOpenings;
