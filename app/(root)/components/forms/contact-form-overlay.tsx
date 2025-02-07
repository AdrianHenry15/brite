"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

import Logo from "../../../../public/assets/icons/brite-logo.png";

import AuthorizationCheckbox from "./components/authorization-checkbox";
import sendEmail from "../../../../lib/email-service";
import ConfirmationModal from "../../../../components/modals/ConfirmationModal";
import SuccessModal from "../../../../components/modals/SuccessModal";
import { Loader } from "../../../../components/Loader";
import InputAlt from "../../../../components/inputs/InputAlt";
import DropdownAlt from "../../../../components/inputs/DropdownAlt";
import TextareaAlt from "../../../../components/inputs/TextareaAlt";
import { ServicesList } from "../../../../lib/constants";
import Button from "../../../../components/Button";
import Dropdown from "./components/dropdown";

type FormValues = {
    estimateId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    createdAt: string;
    frequency?: string;
    comment?: string;
};

const ContactFormOverlay = () => {
    const pathname = usePathname();
    const [inputClicked, setInputClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [estimateId, setEstimateId] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_KEY as string;
    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: FormValues) => {
        if (!recaptchaToken) {
            alert("Please complete the reCAPTCHA verification.");
            return;
        }

        setEstimateId(Math.floor(100000 + Math.random() * 900000).toString());
        setCreatedAt(
            new Date()
                .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
                .toString()
        );
        setIsOpen(true);
        setInputClicked(true);
    };

    const confirmEstimate = () => {
        setLoading(true);
        const templateParams: FormValues = {
            estimateId: estimateId,
            firstName: getValues("firstName"),
            lastName: getValues("lastName"),
            phone: getValues("phone"),
            email: getValues("email"),
            address: getValues("address"),
            service: getValues("service"),
            frequency: getValues("frequency"),
            comment: getValues("comment"),
            createdAt: createdAt,
        };

        sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY, PRIVATE_KEY).then(
            ({ success }) => {
                if (success) {
                    setEstimateSuccess(true);
                } else {
                    setEstimateFail(true);
                }
                setIsOpen(false);
                setLoading(false);
            }
        );
    };

    return (
        <section className="flex flex-col z-20 items-center shadow-inner absolute w-full">
            {isOpen && (
                <ConfirmationModal
                    confirmEstimate={confirmEstimate}
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                />
            )}
            {estimateSuccess && (
                <SuccessModal
                    title="Estimate Request successful"
                    description="Your Estimate Request has been successfully submitted. We’ve sent you an email with all of the details of your Estimate Request."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
            {estimateFail && (
                <SuccessModal
                    title="Estimate Request failed"
                    description="Your Estimate Request has failed to submit. Please contact administrator."
                    isOpen={estimateFail}
                    closeModal={() => setEstimateFail(false)}
                />
            )}
            {loading && <Loader />}
            <div className="flex flex-col w-[400px] bg-zinc-900/80 py-6 rounded-2xl shadow-blue-600 shadow-lg border-2">
                <div className="flex justify-center">
                    <Image className="w-20" src={Logo} alt="Brite Logo" />
                </div>
                <form
                    className="self-center text-sm w-full md:w-2/3 z-50"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h5 className="font-semibold text-lg text-white mb-2 underline">
                        Contact Info
                    </h5>
                    <div className="flex items-center justify-between">
                        <span className="flex mr-2">
                            <InputAlt
                                inputName="firstName"
                                inputLabel="First Name"
                                placeholder="First Name*"
                                control={control}
                                errors={errors}
                                validationRules={{
                                    required: "Invalid",
                                    minLength: {
                                        value: 2,
                                        message: "Must be at least 2 characters long",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Cannot exceed 100 characters",
                                    },
                                    pattern: {
                                        value: /^[^\s]+(\s+[^\s]+)*$/,
                                        message: "Cannot contain spaces",
                                    },
                                }}
                            />
                        </span>
                        <InputAlt
                            inputName="lastName"
                            inputLabel="Last Name"
                            placeholder="Last Name*"
                            control={control}
                            errors={errors}
                            validationRules={{
                                required: "Invalid",
                                minLength: {
                                    value: 2,
                                    message: "Must be at least 2 characters long",
                                },
                                maxLength: { value: 100, message: "Cannot exceed 100 characters" },
                                pattern: {
                                    value: /^[^\s]+(\s+[^\s]+)*$/,
                                    message: "Cannot contain spaces",
                                },
                            }}
                        />
                    </div>
                    <Dropdown
                        inputName="service"
                        inputLabel="Choose Service:"
                        control={control}
                        errors={errors}
                        options={ServicesList}
                    />
                    <TextareaAlt
                        inputName="comment"
                        inputLabel="Comment"
                        placeholder="Comment"
                        control={control}
                    />
                    <AuthorizationCheckbox inputName="authorization" control={control} />
                    <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setRecaptchaToken} />
                    <div className={`${inputClicked ? "" : "animate-pulse"} my-10`}>
                        <Button
                            submit
                            name={pathname === "/contact-us" ? "Contact Us" : "Estimate"}
                            className="w-full justify-center"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
