import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { Job } from "@/sanity.types";

interface IJobOpeningsCardProps {
    job: Job;
}

const JobOpeningsCard = (props: IJobOpeningsCardProps) => {
    const { job } = props;
    return (
        <div
            key={job._id}
            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300"
        >
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{job.location}</p>
            <p className="text-gray-600 my-4">{job.description}</p>
            <Link href={`careers/applications/${job._id}`}>
                <Button variant="contained" size="medium" className="mt-6 bg-blue-500">
                    Apply Now
                </Button>
            </Link>
        </div>
    );
};

export default JobOpeningsCard;
