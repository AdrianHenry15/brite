"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";

type ApplicationFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    job: string;
};

const ApplicationForm = ({ job_title }: { job_title: string }) => {
    const { register, handleSubmit, control } = useForm<ApplicationFormData>();
    const [loading, setLoading] = useState(false);

    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
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

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Application submitted successfully!");

                // Send email to client and applicant
                await fetch("/api/send-emails", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        applicantName: `${data.firstName} ${data.lastName}`,
                        applicantEmail: data.email,
                        applicantPhoneNumber: data.phone,
                        job: job_title,
                    }),
                });
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
            <>
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
            </>
        </form>
    );
};

export default ApplicationForm;
