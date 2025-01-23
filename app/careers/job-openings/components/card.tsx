import React from "react";
import { JobOpeningsType } from "../../../../lib/types";
import { Button } from "@mui/material";
import Link from "next/link";

interface IJobOpeningsCardProps {
    job: JobOpeningsType;
}

const JobOpeningsCard = (props: IJobOpeningsCardProps) => {
    const { job } = props;
    return (
        <div
            key={job.id}
            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300"
        >
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{job.location}</p>
            <p className="text-gray-600 my-4">{job.description}</p>
            <Link href={`careers/applications/${job.id}`}>
                <Button variant="contained" color="primary" size="medium" className="mt-6">
                    Apply Now
                </Button>
            </Link>
        </div>
    );
};

export default JobOpeningsCard;
