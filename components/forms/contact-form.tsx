"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { usePathname } from "next/navigation";

import Logo from "@/public/assets/icons/brite-logo.png";
import HandyMan from "@/public/assets/imgs/handyman.webp";

import AuthorizationCheckbox from "./components/authorization-checkbox";
import ConfirmationModal from "../modals/confirmation-modal";
import SuccessModal from "../modals/success-modal";
import { Loader } from "../loader";
import { ServicesList, ReferralSources } from "../../lib/constants";
import Dropdown from "./components/dropdown";
import sendEmail from "@/lib/email-service";
import Input from "./components/input";
import Textarea from "../inputs/Textarea";

type FormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    comment: string;
    referralSource: string;
    authorization: boolean;
};

const ContactFormOverlay = () => {
    const pathname = usePathname();

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [isSubmittingEstimate, setIsSubmittingEstimate] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_EMAILJS_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            service: "",
            comment: "",
            referralSource: "",
            authorization: false,
        },
    });

    const onSubmit: SubmitHandler<FormValues> = () => {
        setIsConfirmOpen(true);
    };

    const confirmEstimate = async () => {
        if (isSubmittingEstimate) return;

        setIsSubmittingEstimate(true);

        const values = getValues();

        const templateParams = {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            address: values.address,
            service: values.service,
            comment: values.comment,
            referralSource: values.referralSource,
        };

        try {
            const { success } = await sendEmail(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY,
                PRIVATE_KEY,
            );

            setEstimateSuccess(success);
            setEstimateFail(!success);
            setIsConfirmOpen(false);

            if (success) reset();
        } catch {
            setEstimateFail(true);
        } finally {
            setIsSubmittingEstimate(false);
        }
    };

    return (
        <section
            id="contact-form-overlay"
            className="relative flex w-full flex-col items-center bg-background px-4 py-20 text-foreground"
        >
            {isConfirmOpen && (
                <ConfirmationModal
                    confirmEstimate={confirmEstimate}
                    isOpen={isConfirmOpen}
                    closeModal={() => setIsConfirmOpen(false)}
                />
            )}

            {estimateSuccess && (
                <SuccessModal
                    title="Estimate Request Successful"
                    description="Your estimate request has been successfully submitted."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}

            {estimateFail && (
                <SuccessModal
                    title="Estimate Request Failed"
                    description="Your estimate request failed. Please try again."
                    isOpen={estimateFail}
                    closeModal={() => setEstimateFail(false)}
                />
            )}

            {isSubmittingEstimate && <Loader />}

            <div className="absolute left-20 top-[250px] hidden 2xl:flex">
                <Image loading="eager" src={HandyMan} alt="Brite exterior cleaning specialist" />
            </div>

            <h1 className="mb-10 text-center text-3xl font-light text-foreground">
                {pathname === "/contact-us" ? "Contact Us" : "Get Your Free Estimate!"}
            </h1>

            <div className="flex w-full flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl shadow-primary/10 md:w-[850px]">
                <div className="flex justify-center">
                    <Image
                        loading="eager"
                        width={100}
                        src={Logo}
                        alt="Brite Exterior Cleaning logo"
                    />
                </div>

                <form className="w-full self-center md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="mb-4 text-lg font-semibold text-foreground underline decoration-primary underline-offset-4">
                        Contact Info
                    </h5>

                    <Input
                        inputName="firstName"
                        inputLabel="First Name"
                        placeholder="First Name*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "First name is required" }}
                    />

                    <Input
                        inputName="lastName"
                        inputLabel="Last Name"
                        placeholder="Last Name*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "Last name is required" }}
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
                        inputName="address"
                        inputLabel="Address"
                        placeholder="Address*"
                        control={control}
                        errors={errors}
                        validationRules={{ required: "Address is required" }}
                    />

                    <Dropdown<FormValues>
                        errors={errors}
                        inputName="service"
                        inputLabel="Choose Service:"
                        control={control}
                        options={ServicesList}
                    />

                    <Dropdown<FormValues>
                        inputName="referralSource"
                        inputLabel="How Did You Hear About Us?"
                        control={control}
                        errors={errors}
                        options={ReferralSources}
                    />

                    <Textarea
                        inputName="comment"
                        inputLabel="Comment"
                        placeholder="Comment"
                        control={control}
                    />

                    <AuthorizationCheckbox inputName="authorization" control={control} />

                    <button
                        type="submit"
                        disabled={isSubmittingEstimate}
                        className="mt-4 w-full rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-sm transition-colors hover:bg-brite-blue disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmittingEstimate ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
