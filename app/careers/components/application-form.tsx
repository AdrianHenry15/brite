"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";

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

const ApplicationForm = ({ job }: IApplicationFormProps) => {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fail, setFail] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_APPLICATION_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_EMAILJS_KEY as string;

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ApplicationFormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
        },
    });

    const onSubmit: SubmitHandler<ApplicationFormValues> = async (data) => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        setFail(false);

        const templateParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            reply_to: data.email,
            phone: data.phone,
            address: data.address,
            jobOpening: job,
        };

        try {
            const { success } = await sendEmail(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY,
                PRIVATE_KEY,
            );

            if (!success) {
                setFail(true);
                return;
            }

            router.push("/careers/job-openings/application/success");
        } catch {
            setFail(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex w-full flex-col items-center bg-background px-4 py-12 text-foreground md:py-16 lg:py-20">
            {fail && (
                <SuccessModal
                    title="Application Failed"
                    description="Your application submission failed. Please try again."
                    isOpen={fail}
                    closeModal={() => setFail(false)}
                />
            )}

            {isSubmitting && <Loader />}

            <div className="flex w-full max-w-xl flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl shadow-primary/10 sm:p-8">
                <div className="mb-6 flex justify-center">
                    <Image
                        loading="eager"
                        width={90}
                        src={Logo}
                        alt="Brite Exterior Cleaning logo"
                    />
                </div>

                <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-center text-lg font-semibold text-card-foreground underline decoration-primary underline-offset-4">
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
                        validationRules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        }}
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

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-sm transition-colors hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ApplicationForm;
