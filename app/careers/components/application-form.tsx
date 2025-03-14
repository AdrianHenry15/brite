"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Logo from "@/public/assets/icons/brite-logo.png";
import sendEmail from "@/lib/email-service";
import SuccessModal from "@/components/modals/success-modal";
import { Loader } from "@/components/loader";
import Input from "@/components/forms/components/input";

type ApplicationFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
};

interface IApplicationFormProps {
    job: string;
}

const ApplicationForm = (props: IApplicationFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_APPLICATION_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_EMAILJS_KEY as string;

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ApplicationFormValues>();

    const onSubmit: SubmitHandler<ApplicationFormValues> = async (data) => {
        setIsSubmitting(true);

        const templateParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            jobOpening: props.job,
        };

        sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY, PRIVATE_KEY)
            .then(({ success }) => {
                setSuccess(success);
                setFail(!success);
            })
            .catch(() => setFail(true))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <section className="flex flex-col items-center px-4 py-12 md:py-16 lg:py-20 w-full">
            {/* Success & Failure Modals */}
            {success && (
                <SuccessModal
                    title="Application Submitted"
                    description="Your application has been successfully submitted."
                    isOpen={success}
                    closeModal={() => setSuccess(false)}
                />
            )}
            {fail && (
                <SuccessModal
                    title="Application Failed"
                    description="Your application submission failed. Please try again."
                    isOpen={fail}
                    closeModal={() => setFail(false)}
                />
            )}

            {/* Loading Indicator */}
            {isSubmitting && <Loader />}

            {/* Form Container */}
            <div className="flex flex-col w-full max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-lg rounded-xl p-6 sm:p-8">
                {/* Logo Section */}
                <div className="flex justify-center mb-4">
                    <Image loading="eager" width={90} src={Logo} alt="Company Logo" />
                </div>

                {/* Form */}
                <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-lg font-semibold text-center text-gray-800 underline">
                        Personal Information
                    </h5>

                    <Input
                        inputName="firstName"
                        inputLabel="First Name"
                        placeholder="First Name*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "First Name is required" }}
                    />
                    <Input
                        inputName="lastName"
                        inputLabel="Last Name"
                        placeholder="Last Name*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "Last Name is required" }}
                    />
                    <Input
                        inputName="email"
                        inputLabel="Email"
                        placeholder="Email*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "Email is required" }}
                    />
                    <Input
                        inputName="phone"
                        inputLabel="Phone Number"
                        placeholder="Phone Number*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "Phone number is required" }}
                    />
                    <Input
                        inputName="address"
                        inputLabel="Address"
                        placeholder="Address*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "Address is required" }}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="bg-blue-500 hover:bg-blue-600 transition duration-200"
                        fullWidth
                        sx={{ mt: 2, py: 1.5, fontSize: "1rem" }}
                    >
                        Submit Application
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ApplicationForm;
