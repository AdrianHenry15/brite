"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePathname } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

import Logo from "../../../../public/assets/icons/brite-logo.png";
import HandyMan from "../../../../public/assets/imgs/handyman.webp";

import AuthorizationCheckbox from "./components/authorization-checkbox";
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessModal from "../modals/SuccessModal";
import { Loader } from "../loader";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import { ServicesList, ReferralSources } from "../../../../lib/constants";
import Dropdown from "./components/dropdown";
import sendEmail from "@/lib/email-service";

type FormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    comment: string;
    referralSource: string;
};

const ContactFormOverlay = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Submit button state

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_EMAILJS_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
        register,
    } = useForm<FormValues>();

    useEffect(() => {
        setIsSubmitDisabled(!captchaValue); // Enable submit button only when CAPTCHA is completed
    }, [captchaValue]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        if (!captchaValue) {
            alert("Please complete the CAPTCHA verification.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/verify-recaptcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: captchaValue }),
            });

            const result = await response.json();

            if (result.success) {
                setIsOpen(true); // Show confirmation modal
            } else {
                alert("reCAPTCHA verification failed. Please try again.");
            }
        } catch (error) {
            console.error("Error verifying reCAPTCHA:", error);
            alert("An error occurred while verifying reCAPTCHA.");
        }

        setLoading(false);
    };

    const confirmEstimate = () => {
        setLoading(true);

        const templateParams = {
            firstName: getValues("firstName"),
            lastName: getValues("lastName"),
            phone: getValues("phone"),
            email: getValues("email"),
            address: getValues("address"),
            service: getValues("service"),
            comment: getValues("comment"),
            referralSource: getValues("referralSource"),
        };

        sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY, PRIVATE_KEY)
            .then(({ success }) => {
                setEstimateSuccess(success);
                setEstimateFail(!success);
                setIsOpen(false); // Close confirmation modal
            })
            .catch(() => setEstimateFail(true))
            .finally(() => setLoading(false));
    };

    return (
        <section
            id="contact-form-overlay"
            className="flex flex-col items-center px-4 py-20 shadow-inner relative w-full"
        >
            {isOpen && (
                <ConfirmationModal
                    confirmEstimate={confirmEstimate}
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                />
            )}
            {estimateSuccess && (
                <SuccessModal
                    title="Estimate Request Successful"
                    description="Your Estimate Request has been successfully submitted."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
            {estimateFail && (
                <SuccessModal
                    title="Estimate Request Failed"
                    description="Your Estimate Request submission failed. Please try again."
                    isOpen={estimateFail}
                    closeModal={() => setEstimateFail(false)}
                />
            )}
            {loading && <Loader />}
            <div className="absolute hidden top-[250px] left-20 2xl:flex">
                <Image loading="eager" src={HandyMan} alt="Handyman" />
            </div>
            <h1 className="text-3xl mb-10 font-light animate-bounce">
                {pathname === "/contact-us" ? "Contact Us" : "Get Your Free Estimate!"}
            </h1>
            <div className="flex flex-col w-full p-6 rounded-2xl shadow-blue-600 shadow-lg border-2 md:w-[850px]">
                <div className="flex justify-center">
                    <Image loading="eager" width={100} src={Logo} alt="Brite Logo" />
                </div>
                <form className="self-center w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="font-semibold text-lg text-black mb-2 underline">
                        Contact Info
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
                        validationRules={{ required: "Email is required" }}
                    />
                    <Dropdown
                        errors={errors}
                        inputName="service"
                        inputLabel="Choose Service:"
                        control={control}
                        options={ServicesList}
                        textColor="dark"
                    />
                    <Dropdown
                        inputName="referralSource"
                        inputLabel="How Did You Hear About Us?"
                        control={control}
                        errors={errors}
                        options={ReferralSources}
                        textColor="dark"
                    />
                    <Textarea
                        inputName="comment"
                        inputLabel="Comment"
                        placeholder="Comment"
                        control={control}
                    />
                    <AuthorizationCheckbox inputName="authorization" control={control} />
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                        onChange={(value) => setCaptchaValue(value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="bg-blue-500"
                        disabled={isSubmitDisabled} // Fix logic
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
