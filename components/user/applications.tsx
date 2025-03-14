"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ApplicationType } from "@/lib/types";

const UserApplications = () => {
    const [applications, setApplications] = useState<ApplicationType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch("/api/applications");
                if (!response.ok) throw new Error("Failed to fetch applications");

                const data = await response.json();
                setApplications(Array.isArray(data) ? data : []);
            } catch (err) {
                setError("Error loading applications");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) return <p>Loading applications...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Applications</h2>
            {applications.length === 0 ? (
                <p>No applications found.</p>
            ) : (
                <ul className="space-y-4">
                    {applications.map((app) => (
                        <li key={app._id} className="p-4 border rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{app.job.title}</h3>
                            <p>
                                {app.firstName} {app.lastName}
                            </p>
                            <p>{app.email}</p>
                            {app.resumeFile && (
                                <Link
                                    href={app.resumeFile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    View Resume
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserApplications;
