"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ApplicationsForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, resume: file }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Application Submitted", formData);
        toast.success("Your application has been submitted successfully!");
        router.push("/careers/job-openings");
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
                label="Full Name"
                name="name"
                fullWidth
                variant="outlined"
                required
                value={formData.name}
                onChange={handleInputChange}
            />
            <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
                required
                value={formData.email}
                onChange={handleInputChange}
            />
            <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                fullWidth
                variant="outlined"
                required
                value={formData.phone}
                onChange={handleInputChange}
            />
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume
                </label>
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="block w-full text-gray-700 border border-gray-300 rounded-lg p-2"
                />
            </div>
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
                Submit Application
            </Button>
        </form>
    );
};

export default ApplicationsForm;
