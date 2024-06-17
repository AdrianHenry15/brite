"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import Logo from "../../public/assets/icons/brite-logo.png";

import Button from "../Button";
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessModal from "../modals/SuccessModal";
import { Loader } from "../Loader";
import { AltNavMenuItems, AltNavMenuLinks, ServicesList } from "../../lib/constants";
import TextareaAlt from "../inputs/TextareaAlt";
import InputAlt from "../inputs/InputAlt";
import DropdownAlt from "../inputs/DropdownAlt";
import sendEmail from "../../lib/emailService";

type FormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    frequency?: string;
    comment?: string;
};

const ContactFormOverlay = () => {
    // SWITCH BETWEEN CONTACT AND ESTIMATE FORM | BOTH FORMS DO THE SAME THING FOR NOW
    const pathname = usePathname();

    const [inputClicked, setInputClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [loading, setLoading] = useState(false);

    const InputClass = "border-2 border-gray-400 my-2 p-2 rounded-sm w-full shadow-md";

    // EMAIL JS
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // open confirmation modal
        setIsOpen(true);
    };

    const confirmEstimate = () => {
        setLoading(true);

        const templateParams: FormValues = {
            firstName: getValues("firstName"),
            lastName: getValues("lastName"),
            phone: getValues("phone"),
            email: getValues("email"),
            address: getValues("address"),
            service: getValues("service"),
            frequency: getValues("frequency"),
            comment: getValues("comment"),
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

    // //EMAIL JS
    // const templateParams: FormValues = {
    //     firstName: getValues("firstName"),
    //     lastName: getValues("lastName"),
    //     phone: getValues("phone"),
    //     email: getValues("email"),
    //     address: getValues("address"),
    //     service: getValues("service"),
    //     frequency: getValues("frequency"),
    //     comment: getValues("comment"),
    // };

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
                    description="Your Estimate Request has been successfully submitted. We’ve
                sent you an email with all of the details of your Estimate
                Request."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
            {estimateFail && (
                <SuccessModal
                    title="Estimate Request failed"
                    description="Your Estimate Request has failed submitted. Please contact administrator."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateFail(false)}
                />
            )}
            {loading ? <Loader /> : null}
            {/* FORM CONTAINER */}
            <div className="flex flex-col w-[400px] bg-zinc-900/80 py-6 rounded-2xl shadow-blue-600 shadow-lg border-2">
                {/* LOGO */}
                <div className="flex justify-center">
                    <Image className="w-20" src={Logo} alt="Brite Logo" />
                </div>
                {/* FORM */}
                <form
                    className="self-center text-sm w-full md:w-2/3 z-50"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h5 className="font-semibold text-lg text-white mb-2 underline">
                        Contact Info
                    </h5>
                    <div className="flex items-center justify-between">
                        {/* FIRST NAME */}
                        <span className="flex mr-2">
                            <InputAlt
                                inputName={"firstName"}
                                inputLabel={"First Name"}
                                placeholder={"First Name*"}
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
                        {/* LAST NAME */}
                        <InputAlt
                            inputName={"lastName"}
                            inputLabel={"Last Name"}
                            placeholder={"Last Name*"}
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
                    </div>
                    <div className="flex items-center justify-between">
                        {/* PHONE NUMBER */}
                        <span className="flex mr-2">
                            <InputAlt
                                inputName={"phone"}
                                inputLabel={"Phone Number"}
                                placeholder={"Phone Number*"}
                                control={control}
                                errors={errors}
                                validationRules={{
                                    required: "Invalid",
                                    pattern: {
                                        value: /^[0-9]{10}$/, // Adjust pattern as per your requirement
                                        message: "Invalid",
                                    },
                                }}
                            />
                        </span>
                        {/* EMAIL */}
                        <InputAlt
                            inputName={"email"}
                            inputLabel={"Email"}
                            placeholder={"Email*"}
                            control={control}
                            errors={errors}
                            validationRules={{
                                required: "Invalid",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "invalid Email",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Cannot exceed 100 characters",
                                },
                            }}
                        />
                    </div>
                    {/* ADDRESS */}
                    <InputAlt
                        inputName={"address"}
                        inputLabel={"Address"}
                        placeholder={"Address*"}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: "Invalid",
                            minLength: {
                                value: 5,
                                message: "Must be at least 5 characters long",
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
                    {/* SERVICE */}
                    <DropdownAlt
                        inputName={"service"}
                        inputLabel={"Choose Service:"}
                        control={control}
                        // errors={errors}
                        options={ServicesList}
                        // errorText=""
                    />
                    {/* FREQUENCY */}
                    {/* {watch("service") === "Exterior Cleaning" ? (
                        <Dropdown
                            inputName={"frequency"}
                            inputLabel={"Choose Frequency:"}
                            control={control}
                            errors={errors}
                            options={FrequencyList}
                            errorText="Frequency is required."
                        />
                    ) : null} */}
                    {/* COMMENT */}
                    <TextareaAlt
                        inputName={"comment"}
                        inputLabel={"Comment"}
                        placeholder={"Comment"}
                        control={control}
                    />
                    <div className={`${inputClicked ? "" : "animate-pulse"} my-10`}>
                        <Button
                            submit
                            name={`${
                                pathname === AltNavMenuLinks.CONTACT_US
                                    ? AltNavMenuItems.CONTACT_US
                                    : AltNavMenuItems.ESTIMATE
                            }`}
                            className="w-full justify-center"
                        ></Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
