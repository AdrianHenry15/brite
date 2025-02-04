import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { Resume } from "@/sanity.types";

type ApplicationFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    job: string;
    resumeFile: Resume | null;
};

const ApplicationForm = ({ job_title }: { job_title: string }) => {
    const { register, handleSubmit } = useForm<ApplicationFormData>();
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setResumeFile(file);
        }
    };

    const onSubmit = async (data: ApplicationFormData) => {
        setLoading(true);

        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("job", job_title);

        if (resumeFile) {
            formData.append("resumeFile", resumeFile); // Add resume file
        }

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Application submitted successfully!");
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || "Failed to submit application");
            }
        } catch (error) {
            toast.error("Failed to submit application");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                {...register("firstName", { required: true })}
            />
            <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                {...register("lastName", { required: true })}
            />
            <TextField
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
                {...register("email", { required: true })}
            />
            <TextField
                label="Phone"
                fullWidth
                variant="outlined"
                {...register("phone", { required: true })}
            />

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            />

            <Button variant="contained" color="primary" type="submit" disabled={loading} fullWidth>
                {loading ? "Submitting..." : "Submit Application"}
            </Button>
        </form>
    );
};

export default ApplicationForm;
