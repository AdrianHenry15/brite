"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import Logo from "../../public/assets/icons/brite-logo.png";
import HandyMan from "../../public/assets/imgs/handyman.webp";

import Button from "../Button";
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessModal from "../modals/SuccessModal";
import { Loader } from "../Loader";
import Dropdown from "../inputs/Dropdown";
import { AltNavMenuItems, AltNavMenuLinks, ServicesList } from "../../lib/constants";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import sendEmail from "../../lib/emailService";
import AuthorizationCheckbox from "./AuthorizationCheckbox";

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

const ContactFormContainer = () => {
    // SWITCH BETWEEN CONTACT AND ESTIMATE FORM | BOTH FORMS DO THE SAME THING FOR NOW
    const pathname = usePathname();

    const [inputClicked, setInputClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [estimateId, setEstimateId] = useState("");
    const [createdAt, setCreatedAt] = useState("");

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

    const onSubmit = (data: FormValues) => {
        // Generate unique estimateId and set current time for createdAt
        setEstimateId(Math.floor(100000 + Math.random() * 900000).toString()); // Generating a random unique ID

        setCreatedAt(
            new Date()
                .toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
                .toString()
        );

        console.log(`Id: ${estimateId}`); // Prints the UUID
        console.log(`Date: ${createdAt}`); // Check the type, it should print 'string'
        // open confirmation modal
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
                    setEstimateFail(false);
                } else {
                    setEstimateSuccess(false);
                    setEstimateFail(true);
                }
                setIsOpen(false);
                setLoading(false);
            }
        );
    };

    return (
        <section
            id="contact-form"
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
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
            {loading ? <Loader /> : null}
            <div className="absolute hidden top-[250px] left-20 2xl:flex">
                <Image loading="eager" src={HandyMan} alt="Brite Logo" />
            </div>
            <h1 className="text-3xl mb-10 font-light animate-bounce">{`${
                pathname === "/contact-us" ? "Contact Us" : "Get Your Free Estimate!"
            }`}</h1>
            {/* FORM CONTAINER */}
            <div className="flex flex-col w-full p-6 rounded-2xl shadow-blue-600 shadow-lg border-2 md:w-[850px]">
                {/* LOGO */}
                <div className="flex justify-center">
                    <Image loading="eager" width={100} src={Logo} alt="Brite Logo" />
                </div>
                {/* FORM */}
                <form className="self-center w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="font-semibold text-lg text-black mb-2 underline">
                        Contact Info
                    </h5>
                    {/* FIRST NAME */}
                    <Input
                        inputName={"firstName"}
                        inputLabel={"First Name"}
                        placeholder={"First Name*"}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: "First Name is required",
                            minLength: {
                                value: 2,
                                message: "First Name must be at least 2 characters long",
                            },
                            maxLength: {
                                value: 100,
                                message: "First Name cannot exceed 100 characters",
                            },
                            pattern: {
                                value: /^[^\s]+(\s+[^\s]+)*$/,
                                message: "First Name cannot contain spaces",
                            },
                        }}
                    />
                    {/* LAST NAME */}
                    <Input
                        inputName={"lastName"}
                        inputLabel={"Last Name"}
                        placeholder={"Last Name*"}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: "Last Name is required",
                            minLength: {
                                value: 2,
                                message: "Last Name must be at least 2 characters long",
                            },
                            maxLength: {
                                value: 100,
                                message: "Last Name cannot exceed 100 characters",
                            },
                            pattern: {
                                value: /^[^\s]+(\s+[^\s]+)*$/,
                                message: "Last Name cannot contain spaces",
                            },
                        }}
                    />
                    {/* PHONE NUMBER */}
                    <Input
                        inputName={"phone"}
                        inputLabel={"Phone Number"}
                        placeholder={"Phone Number*"}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/, // Adjust pattern as per your requirement
                                message: "Enter a valid phone number",
                            },
                        }}
                    />
                    {/* EMAIL */}
                    <Input
                        inputName={"email"}
                        inputLabel={"Email"}
                        placeholder={"Email*"}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email address",
                            },
                            maxLength: {
                                value: 100,
                                message: "Email Address cannot exceed 100 characters",
                            },
                        }}
                    />
                    {/* ADDRESS */}
                    <Input
                        inputName={"address"}
                        inputLabel={"Address"}
                        placeholder={"Address*"}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: "Address is required",
                            minLength: {
                                value: 5,
                                message: "Address must be at least 5 characters long",
                            },
                            maxLength: {
                                value: 100,
                                message: "Address cannot exceed 100 characters",
                            },
                            pattern: {
                                value: /^[^\s]+(\s+[^\s]+)*$/,
                                message: "Address cannot contain spaces",
                            },
                        }}
                    />
                    {/* SERVICE */}
                    <Dropdown
                        inputName={"service"}
                        inputLabel={"Choose Service:"}
                        control={control}
                        errors={errors}
                        options={ServicesList}
                        errorText="Service is required."
                    />
                    {/* COMMENT */}
                    <Textarea
                        inputName={"comment"}
                        inputLabel={"Comment"}
                        placeholder={"Comment"}
                        control={control}
                    />
                    {/* AUTHORIZATION */}
                    <AuthorizationCheckbox inputName={"authorization"} control={control} />
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

export default ContactFormContainer;
