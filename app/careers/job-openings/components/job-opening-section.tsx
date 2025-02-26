import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import JobOpeningsCard from "./card";
import { Job } from "@/sanity.types";

{
    /* 
    {[
        { title: "Window Cleaning Technician", location: "Charlotte, NC", id: 1 },
        { title: "Pressure Washing Specialist", location: "Charlotte, NC", id: 2 },
        { title: "Customer Service Representative", location: "Remote", id: 3 },
    ]. */
}

interface IJobOpeningsProps {
    jobs: Job[];
}

const JobOpeningSection = (props: IJobOpeningsProps) => {
    const { jobs } = props;
    return (
        <section className="py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
            {jobs.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <JobOpeningsCard key={job._id} job={job} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">
                    We currently have no job openings available. Please check back later!
                </p>
            )}
        </section>
    );
};

export default JobOpeningSection;
