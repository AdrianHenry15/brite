"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";

import Logo from "../../public/assets/icons/brite-logo.png";
import HandyMan from "../../public/assets/imgs/handyman.webp";

import Button from "../Button";
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessModal from "../modals/SuccessModal";
import { Loader } from "../Loader";
import toast from "react-hot-toast";
import Dropdown from "../inputs/Dropdown";
import { AltNavMenuItems, AltNavMenuLinks, NavMenuItems, ServicesList } from "../../lib/constants";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
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

const ContactFormContainer = () => {
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
        register,
        handleSubmit,
        getValues,
        control,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // open confirmation modal
        setIsOpen(true);
        console.log(data);
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

    // const confirmEstimate = () => {
    //     // EMAIL JS
    //     emailjs
    //         .send(SERVICE_ID as string, TEMPLATE_ID as string, templateParams, PUBLIC_KEY as string)
    //         .then(
    //             function (response) {
    //                 toast.success("Your estimate has been submitted successfully!");
    //                 setEstimateSuccess(true);
    //                 setEstimateFail(false);
    //                 console.log("SUCCESS!", response.status, response.text);
    //             },
    //             function (error) {
    //                 toast.error("There was an error submitting your estimate. Please try again.");
    //                 setEstimateSuccess(false);
    //                 setEstimateFail(true);
    //                 console.log("FAILED...", error);
    //             }
    //         );
    //     // close modal
    //     setIsOpen(false);
    //     setTimeout(() => {
    //         // open success modal
    //         setLoading(false);
    //     }, 1000);

    //     setLoading(true);
    // };

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
            <div className="absolute hidden top-[250px] left-60 2xl:flex">
                <Image loading="eager" src={HandyMan} alt="Brite Logo" />
            </div>
            <h1 className="text-3xl mb-10 font-light animate-bounce">{`${
                pathname === "/contact-us" ? "Contact Us" : "Get Your Free Estimate!"
            }`}</h1>
            {/* FORM CONTAINER */}
            <div className="flex flex-col w-[350px] p-6 rounded-2xl shadow-blue-600 shadow-lg border-2 md:w-[650px]">
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
                        errorPatternText="First Name is required."
                    />
                    {/* LAST NAME */}
                    <Input
                        inputName={"lastName"}
                        inputLabel={"Last Name"}
                        placeholder={"Last Name*"}
                        control={control}
                        errorPatternText="Last Name is required."
                    />
                    {/* PHONE NUMBER */}
                    <Input
                        inputName={"phoneNumber"}
                        inputLabel={"Phone Number"}
                        placeholder={"Phone Number*"}
                        control={control}
                        errors={errors}
                        errorPatternText={"Phone Number is not valid."}
                        errorRequiredText={"Phone Number is Required"}
                    />
                    {/* EMAIL */}
                    <Input
                        inputName={"email"}
                        inputLabel={"Email"}
                        placeholder={"Email*"}
                        control={control}
                        errors={errors}
                        errorRequiredText={"Email is Required."}
                        errorPatternText={"Email is not valid."}
                    />
                    {/* ADDRESS */}
                    <Input
                        inputName={"address"}
                        inputLabel={"Address"}
                        placeholder={"Address*"}
                        control={control}
                        errors={errors}
                        errorRequiredText={"Address is Required."}
                        errorPatternText={"Address is not valid."}
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
                    <Textarea
                        inputName={"comment"}
                        inputLabel={"Comment"}
                        placeholder={"Comment"}
                        control={control}
                    />
                    <div className={`${inputClicked ? "" : "animate-pulse"} my-10`}>
                        <Button
                            onClick={() => {}}
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
