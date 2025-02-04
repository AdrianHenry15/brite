"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface IApplicationsFormProps {
    job_title: string;
}

// Define Zod schema for manual validation
const applicationSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

type ApplicationFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

const ApplicationsForm = ({ job_title }: IApplicationsFormProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<ApplicationFormData>>({});

    // react-hook-form setup
    const { register, handleSubmit, getValues } = useForm<ApplicationFormData>();

    const onSubmit = async () => {
        setLoading(true);
        setErrors({}); // Clear previous errors

        // Validate form manually using Zod
        const formValues = getValues();
        const validationResult = applicationSchema.safeParse(formValues);

        if (!validationResult.success) {
            const formattedErrors: Partial<ApplicationFormData> = {};
            validationResult.error.errors.forEach((err) => {
                const field = err.path[0] as keyof ApplicationFormData;
                formattedErrors[field] = err.message;
            });

            setErrors(formattedErrors);
            setLoading(false);
            return;
        }

        // Prepare FormData for submission
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formValues.firstName);
        formDataToSend.append("lastName", formValues.lastName);
        formDataToSend.append("email", formValues.email);
        formDataToSend.append("phone", formValues.phone);
        formDataToSend.append("job", job_title);

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) throw new Error("Failed to submit application");

            toast.success("Application submitted successfully!");
            router.push("/careers/job-openings/success");
        } catch (error) {
            toast.error("Error submitting application");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                {...register("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName}
            />
            <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                {...register("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName}
            />
            <TextField
                label="Email Address"
                fullWidth
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                label="Phone Number"
                fullWidth
                variant="outlined"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone}
            />

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
