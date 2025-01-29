"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ApplicationsForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null as File | null,
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, resume: file }));
    };

    const sendEmail = async (applicationData: any) => {
        const emailParams = {
            applicant_name: `${applicationData.firstName} ${applicationData.lastName}`,
            applicant_email: applicationData.email,
            applicant_phone: applicationData.phone,
            job_title: "Job Reference ID", // Replace with actual job title if available
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );
            toast.success("Email notification sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send email notification.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("job", "job-reference-id"); // Replace with actual job ID
        formDataToSend.append("userId", "user-id"); // Replace with actual user ID
        if (formData.resume) formDataToSend.append("resume", formData.resume);

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) throw new Error("Failed to submit application");

            const applicationData = await response.json();

            // Send email notification after successful submission
            await sendEmail(applicationData);

            toast.success("Application submitted successfully!");
            router.push("/careers/job-openings");
        } catch (error) {
            toast.error("Error submitting application");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
                label="First Name"
                name="firstName"
                fullWidth
                variant="outlined"
                required
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                variant="outlined"
                required
                value={formData.lastName}
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
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit Application"}
            </Button>
        </form>
    );
};

export default ApplicationsForm;
