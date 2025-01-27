import { Job } from "@/sanity.types";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface IJobOpeningsCard {
    job: Job;
}

const JobOpeningsCard = (props: IJobOpeningsCard) => {
    const { job } = props;
    return (
        <div key={job._id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600 my-2">{job.location}</p>
            <Link href={`/careers/applications/${job._id}`}>
                <Button variant="outlined" color="primary" size="small" className="mt-4">
                    Apply Now
                </Button>
            </Link>
        </div>
    );
};

export default JobOpeningsCard;
