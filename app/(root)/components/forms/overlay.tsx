"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";

import AuthorizationCheckbox from "./components/authorization-checkbox";
import sendEmail from "../../../../lib/email-service";
import ConfirmationModal from "../modals/confirmation-modal";
import SuccessModal from "../modals/success-modal";
import { Loader } from "../loader";
import TextareaAlt from "../inputs/textarea-alt";
import { ReferralSources, ServicesList } from "../../../../lib/constants";
import Dropdown from "./components/dropdown";
import Input from "./components/input";

type FormValues = {
    estimateId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    referralSource?: string;
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
    } = useForm();

    const onSubmit = () => {
        setEstimateId(Math.floor(100000 + Math.random() * 900000).toString());
        setCreatedAt(
            new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
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
            referralSource: getValues("referralSource"),
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
            },
        );
    };

    return (
        <section className="flex flex-col z-20 shadow-inner w-full">
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
            <div className="flex px-6 sm:px-12 lg:px-24 flex-col w-full bg-gradient-to-b from-gray-900 to-gray-700 pt-20 pb-6 rounded-2xl shadow-blue-600 shadow-lg border-2">
                <form
                    className="self-center text-sm w-full max-w-lg mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h5 className="font-semibold text-2xl text-white mb-2 text-left underline">
                        Contact Info
                    </h5>
                    <div className="grid gap-4">
                        <Input
                            inputName="firstName"
                            inputLabel="First Name"
                            placeholder="First Name*"
                            control={control}
                            errors={errors}
                            validationRules={{ required: "Required" }}
                        />
                        <Input
                            inputName="lastName"
                            inputLabel="Last Name"
                            placeholder="Last Name*"
                            control={control}
                            errors={errors}
                            validationRules={{ required: "Required" }}
                        />
                        <Input
                            inputName="phone"
                            inputLabel="Phone Number"
                            placeholder="Phone Number*"
                            control={control}
                            errors={errors}
                            validationRules={{ required: "Required" }}
                        />
                        <Input
                            inputName="email"
                            inputLabel="Email"
                            placeholder="Email*"
                            control={control}
                            errors={errors}
                            validationRules={{ required: "Required" }}
                        />
                        <Input
                            inputName="address"
                            inputLabel="Address"
                            placeholder="Address*"
                            control={control}
                            errors={errors}
                            validationRules={{ required: "Required" }}
                        />

                        {customService ? (
                            <Input
                                inputName="customService"
                                inputLabel="Enter Service"
                                placeholder="Enter Service"
                                control={control}
                            />
                        ) : (
                            <Dropdown
                                inputName="service"
                                inputLabel="Choose Service:"
                                control={control}
                                errors={errors}
                                options={ServicesList}
                                textColor="light"
                                onChange={(value) => setCustomService(value === "Other")}
                            />
                        )}

                        {customReferral ? (
                            <Input
                                inputName="customReferral"
                                inputLabel="Enter Referral Source"
                                placeholder="Enter Referral Source"
                                control={control}
                            />
                        ) : (
                            <Dropdown
                                inputName="referralSource"
                                inputLabel="How did you hear about us?"
                                control={control}
                                errors={errors}
                                options={ReferralSources}
                                textColor="light"
                                onChange={(value) => setCustomReferral(value === "Other")}
                            />
                        )}

                        <TextareaAlt
                            inputName="comment"
                            inputLabel="Comment"
                            placeholder="Comment"
                            control={control}
                        />
                        <AuthorizationCheckbox inputName="authorization" control={control} />

                        <div className={`${inputClicked ? "" : "animate-pulse"} my-10`}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="w-full justify-center bg-blue-500"
                            >
                                {pathname === "/contact-us" ? "Contact Us" : "Estimate"}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
