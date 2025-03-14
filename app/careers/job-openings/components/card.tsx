"use client";

import React from "react";
import { Button } from "@mui/material";
import { Job } from "@/sanity.types";
import { useRouter } from "next/navigation";

interface IJobOpeningsCardProps {
    job: Job;
}

const JobOpeningsCard = (props: IJobOpeningsCardProps) => {
    const { job } = props;
    const router = useRouter();

    // Format the published date
    const publishedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(job.publishedAt!));

    // Truncate the excerpt for a cleaner look
    const truncatedExcerpt =
        job.excerpt!.length > 100 ? `${job.excerpt!.slice(0, 100)}...` : job.excerpt;
    return (
        <div
            key={job._id}
            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300"
        >
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{job.location}</p>
            <p className="text-gray-500 text-sm mt-1">{publishedDate}</p>
            <p className="text-gray-600 my-4">{truncatedExcerpt}</p>
            <div className="flex items-center">
                <Button
                    onClick={() => router.push(`/careers/job-openings/${job.slug?.current}`)}
                    variant="outlined"
                    size="medium"
                    className="mt-6 bg-white text-blue-500"
                >
                    See Job Opening
                </Button>
                <Button
                    onClick={() =>
                        router.push(`/careers/job-openings/application/${job.slug?.current}`)
                    }
                    variant="contained"
                    size="medium"
                    className="mt-6 mx-1 bg-blue-500"
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
};

export default JobOpeningsCard;
