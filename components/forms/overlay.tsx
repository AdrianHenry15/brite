"use client";

import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { usePathname } from "next/navigation";

import AuthorizationCheckbox from "./components/authorization-checkbox";
import sendEmail from "../../lib/email-service";
import ConfirmationModal from "../modals/confirmation-modal";
import SuccessModal from "../modals/success-modal";
import { Loader } from "../loader";
import TextareaAlt from "../inputs/textarea-alt";
import { ReferralSources, ServicesList } from "../../lib/constants";
import Dropdown from "./components/dropdown";
import Input from "./components/input";

type FormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    customService?: string;
    referralSource?: string;
    customReferral?: string;
    frequency?: string;
    comment?: string;
    authorization: boolean;
};

const ContactFormOverlay = () => {
    const pathname = usePathname();

    const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [loading, setLoading] = useState(false);

    const [customService, setCustomService] = useState(false);
    const [customReferral, setCustomReferral] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_EMAILJS_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            service: "",
            customService: "",
            referralSource: "",
            customReferral: "",
            frequency: "",
            comment: "",
            authorization: true,
        },
    });

    const onSubmit: SubmitHandler<FormValues> = () => {
        setHasSubmittedAttempt(true);
        setIsConfirmOpen(true);
    };

    const confirmEstimate = async () => {
        if (loading) return;

        setLoading(true);

        const values = getValues();

        const templateParams = {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            address: values.address,
            service: customService ? (values.customService ?? "") : (values.service ?? ""),
            referralSource: customReferral
                ? (values.customReferral ?? "")
                : (values.referralSource ?? ""),
            frequency: values.frequency ?? "",
            comment: values.comment ?? "",
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

            if (success) {
                reset();
                setCustomService(false);
                setCustomReferral(false);
            }
        } catch {
            setEstimateFail(true);
            setIsConfirmOpen(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="z-20 flex w-full flex-col">
            {isConfirmOpen && (
                <ConfirmationModal
                    confirmEstimate={confirmEstimate}
                    isOpen={isConfirmOpen}
                    closeModal={() => setIsConfirmOpen(false)}
                    loading={loading}
                />
            )}

            {estimateSuccess && (
                <SuccessModal
                    title="Estimate Request Successful"
                    description="Your estimate request has been successfully submitted. Our team will contact you about your project."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}

            {estimateFail && (
                <SuccessModal
                    title="Estimate Request Failed"
                    description="Your estimate request failed to submit. Please try again or contact us directly."
                    isOpen={estimateFail}
                    closeModal={() => setEstimateFail(false)}
                />
            )}

            {loading && <Loader />}

            <div className="flex w-full flex-col rounded-2xl border border-border bg-card px-6 pb-6 pt-10 text-card-foreground shadow-xl shadow-primary/10 sm:px-10 lg:px-14">
                <form className="mx-auto w-full max-w-lg text-sm" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="mb-5 text-left text-2xl font-semibold text-foreground underline decoration-primary underline-offset-4">
                        Contact Info
                    </h5>

                    <div className="grid gap-4">
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

                        {customService ? (
                            <Input
                                inputName="customService"
                                inputLabel="Enter Service"
                                placeholder="Enter service"
                                control={control}
                                errors={errors}
                                validationRules={{ required: "Service is required" }}
                            />
                        ) : (
                            <Dropdown<FormValues>
                                inputName="service"
                                inputLabel="Choose Service:"
                                control={control}
                                errors={errors}
                                options={ServicesList}
                                onChange={(value) => setCustomService(value === "Other")}
                            />
                        )}

                        {customReferral ? (
                            <Input
                                inputName="customReferral"
                                inputLabel="Enter Referral Source"
                                placeholder="Enter referral source"
                                control={control}
                                errors={errors}
                            />
                        ) : (
                            <Dropdown<FormValues>
                                inputName="referralSource"
                                inputLabel="How did you hear about us?"
                                control={control}
                                errors={errors}
                                options={ReferralSources}
                                onChange={(value) => setCustomReferral(value === "Other")}
                            />
                        )}

                        <TextareaAlt
                            inputName="comment"
                            inputLabel="Comment"
                            placeholder="Comment"
                            control={control}
                        />

                        <AuthorizationCheckbox<FormValues>
                            inputName="authorization"
                            control={control}
                            validationRules={{
                                validate: (value) => value === true || "Authorization is required",
                            }}
                        />

                        <div className={`${hasSubmittedAttempt ? "" : "animate-pulse"} mt-6`}>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-sm transition-colors hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {pathname === "/contact-us" ? "Contact Us" : "Estimate"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
