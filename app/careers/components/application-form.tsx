"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { Resume } from "@/sanity.types";

type ApplicationFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    job: string;
    resumeFile: Resume | File | null;
};

const ApplicationForm = ({ job_title }: { job_title: string }) => {
    const { register, handleSubmit, setValue, control } = useForm<ApplicationFormData>();
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0] || null;
        if (file) {
            setResumeFile(file);
            setValue("resumeFile", file);
        }
    };

    const formatPhoneNumber = (value: string) => {
        // Remove all non-numeric characters
        const cleaned = value.replace(/\D/g, "");

        // Format the phone number as (XXX) XXX-XXXX
        if (cleaned.length <= 3) {
            return `(${cleaned}`;
        } else if (cleaned.length <= 6) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
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

            {/* Phone Number Input with Formatting */}
            <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Phone"
                        fullWidth
                        variant="outlined"
                        value={field.value}
                        onChange={(e) => {
                            const formattedPhone = formatPhoneNumber(e.target.value);
                            field.onChange(formattedPhone);
                        }}
                        placeholder="(321) 444-4444"
                    />
                )}
            />

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="block w-full text-sm p-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            />

            <Button
                className="bg-blue-500"
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                fullWidth
            >
                {loading ? "Submitting..." : "Submit Application"}
            </Button>
        </form>
    );
};

export default ApplicationForm;
