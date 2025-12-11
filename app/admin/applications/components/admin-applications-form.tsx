"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Job {
    _id: string;
    title: string;
}

interface Application {
    _id?: string;
    jobId?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    publishedAt?: string;
}

export default function AdminApplicationsForm({ initialData }: { initialData?: Application }) {
    const router = useRouter();

    const [jobs, setJobs] = useState<Job[]>([]);
    const [form, setForm] = useState<Application>({
        jobId: initialData?.jobId || "",
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        email: initialData?.email || "",
        phone: initialData?.phone || "",
        publishedAt: initialData?.publishedAt || "",
    });

    const isEditing = Boolean(initialData?._id);

    // Fetch all job listings for dropdown
    useEffect(() => {
        async function loadJobs() {
            const res = await fetch("/api/jobs");
            const data = await res.json();
            setJobs(data || []);
        }
        loadJobs();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const endpoint = isEditing
                ? `/api/applications/${initialData?._id}`
                : `/api/applications`;

            const method = isEditing ? "PATCH" : "POST";

            const res = await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error("Failed to save application");
            }

            router.push("/admin/applications");
            router.refresh();
        } catch (err) {
            console.error(err);
        }
    }

    async function handleDelete() {
        if (!initialData?._id) return;
        if (!confirm("Are you sure you want to delete this application?")) return;

        try {
            const res = await fetch(`/api/applications/${initialData._id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete application");
            }

            router.push("/admin/applications");
            router.refresh();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">
                {isEditing ? "Edit Application" : "Create Application"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Job Select */}
                <div>
                    <label className="block mb-2 font-medium">Job Opening</label>
                    <select
                        name="jobId"
                        value={form.jobId}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select a Job</option>
                        {jobs.map((job) => (
                            <option key={job._id} value={job._id}>
                                {job.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* First Name */}
                <div>
                    <label className="block mb-2 font-medium">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block mb-2 font-medium">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-2 font-medium">Phone</label>
                    <input
                        name="phone"
                        type="text"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Published At */}
                <div>
                    <label className="block mb-2 font-medium">Published At</label>
                    <input
                        name="publishedAt"
                        type="datetime-local"
                        value={form.publishedAt || ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {isEditing ? "Update" : "Create"}
                    </button>

                    {isEditing && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
