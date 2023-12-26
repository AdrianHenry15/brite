"use client";

import Image from "next/image";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";

import Logo from "../public/assets/icons/brite-logo.png";
import HandyMan from "../public/assets/imgs/handyman.webp";

import Button from "./Button";
import ConfirmationModal from "./modals/ConfirmationModal";
import SuccessModal from "./modals/SuccessModal";

const ContactFormContainer = () => {
    // SWITCH BETWEEN CONTACT AND ESTIMATE FORM | BOTH FORMS DO THE SAME THING FOR NOW
    const pathname = usePathname();

    const [inputClicked, setInputClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);

    const InputClass = "border-2 border-gray-400 my-2 p-2 rounded-sm w-full shadow-md";

    // EMAIL JS
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsOpen(true);
        console.log(data);
    };

    const confirmEstimate = () => {
        // EMAIL JS
        emailjs
            .send(SERVICE_ID as string, TEMPLATE_ID as string, templateParams, PUBLIC_KEY as string)
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
        // close modal
        setIsOpen(false);
        // open success modal
        setEstimateSuccess(true);
    };

    //EMAIL JS
    const templateParams = {
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
        phone: getValues("phone"),
        email: getValues("email"),
        comment: getValues("comment"),
    };

    return (
        <section className="flex flex-col items-center px-4 py-20 shadow-inner relative w-full">
            {isOpen && (
                <ConfirmationModal
                    confirmEstimate={confirmEstimate}
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                />
            )}
            {estimateSuccess && (
                <SuccessModal
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
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
                    <div>
                        {/* FIRST NAME */}
                        <input
                            className={InputClass}
                            onClick={() => setInputClicked(true)}
                            type="text"
                            placeholder="First Name"
                            {...register("firstName", { required: false })}
                        />
                    </div>
                    <div>
                        {/* LAST NAME */}
                        <input
                            className={InputClass}
                            onClick={() => setInputClicked(true)}
                            type="text"
                            placeholder="Last Name"
                            {...register("lastName", { required: false })}
                        />
                    </div>
                    <div>
                        {/* PHONE NUMBER */}
                        <input
                            className={InputClass}
                            onClick={() => setInputClicked(true)}
                            type="tel"
                            placeholder="Phone Number"
                            {...register("phoneNumber", {
                                required: false,
                                pattern: /^[0-9]{10}$/,
                            })}
                        />
                        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                            <p className="text-sm text-red-600 ml-4">
                                Phone Number should be 10 digits.
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            className={InputClass}
                            onClick={() => setInputClicked(true)}
                            type="text"
                            placeholder="Email *"
                            {...register("email", {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p className="text-sm text-red-600 ml-4">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p className="text-sm text-red-600 ml-4">Email is not valid.</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            className="border-2 border-gray-400 my-2 p-2 w-full h-40"
                            placeholder="Comment"
                            {...register("comment", { required: false })}
                            onClick={() => setInputClicked(true)}
                        />
                    </div>
                    <div className={`${inputClicked ? "" : "animate-pulse"} my-10`}>
                        <Button
                            onClick={() => {}}
                            submit
                            name={`${
                                pathname === "/contact-us" ? "Contact Us" : "Get Your Free Estimate"
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
