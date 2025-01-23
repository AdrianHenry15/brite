import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const JobOpenings = () => {
    return (
        <section className="py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Window Cleaning Technician", location: "Charlotte, NC", id: 1 },
                    { title: "Pressure Washing Specialist", location: "Charlotte, NC", id: 2 },
                    { title: "Customer Service Representative", location: "Remote", id: 3 },
                ].map((job) => (
                    <div key={job.id} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-gray-600 mt-2">{job.location}</p>
                        <Link href={`/careers/applications/${job.id}`}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                className="mt-4"
                            >
                                Apply Now
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobOpenings;
