"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";

import Logo from "../public/assets/icons/brite-logo.png";
import HandyMan from "../public/assets/imgs/handyman.webp";

import Button from "./Button";
import ConfirmationModal from "./modals/ConfirmationModal";
import SuccessModal from "./modals/SuccessModal";
import { Loader } from "./Loader";
import toast from "react-hot-toast";
import Dropdown from "./inputs/Dropdown";
import { FrequencyList, ServicesList } from "../lib/constants";

const ContactFormContainer = () => {
    // SWITCH BETWEEN CONTACT AND ESTIMATE FORM | BOTH FORMS DO THE SAME THING FOR NOW
    const pathname = usePathname();

    const [inputClicked, setInputClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const InputClass = "border-2 border-gray-400 my-2 p-2 rounded-sm w-full shadow-md";

    // EMAIL JS
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY as string;

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
        // EMAIL JS
        emailjs
            .send(SERVICE_ID as string, TEMPLATE_ID as string, templateParams, PUBLIC_KEY as string)
            .then(
                function (response) {
                    toast.success("Your estimate has been submitted successfully!");
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    toast.error("There was an error submitting your estimate. Please try again.");
                    console.log("FAILED...", error);
                }
            );
        // close modal
        setIsOpen(false);
        setTimeout(() => {
            // open success modal
            setEstimateSuccess(true);
            setLoading(false);
        }, 1000);

        setLoading(true);
    };

    //EMAIL JS
    const templateParams = {
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
        phone: getValues("phone"),
        email: getValues("email"),
        address: getValues("address"),
        service: getValues("service"),
        frequency: getValues("frequency"),
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
                    {/* EMAIL */}
                    <div>
                        <input
                            className={InputClass}
                            onClick={() => setInputClicked(true)}
                            type="text"
                            placeholder="Email*"
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
                    {/* ADDRESS */}
                    <div>
                        <input
                            className={InputClass}
                            onClick={() => setInputClicked(true)}
                            type="text"
                            placeholder="Address*"
                            {...register("address", {
                                required: true,
                            })}
                        />
                        {/* <Search
                            updateAddressValue={handleUpdateAddressValue}
                            onSelect={handleAutocompleteSelect}
                        /> */}
                        {errors.address && errors.address.type === "required" && (
                            <p className="text-sm text-red-600 ml-4">Address is required.</p>
                        )}
                        {errors.address && errors.address.type === "pattern" && (
                            <p className="text-sm text-red-600 ml-4">Address is not valid.</p>
                        )}
                    </div>
                    {/* SERVICE */}
                    {/* <div className="py-2 w-full">
                        <label className="font-semibold text-lg mb-2 underline">
                            Choose Service:
                        </label>
                        <Controller
                            name="service"
                            control={control}
                            defaultValue={services[0].name}
                            render={({ field }) => (
                                <select
                                    className={`${InputClass} py-4`}
                                    {...field}
                                    onClick={() => setInputClicked(true)}
                                >
                                    {services.map((service) => (
                                        <option
                                            key={service.name}
                                            value={service.name}
                                            onClick={() => setInputClicked(true)}
                                        >
                                            {service.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.service && errors.service.type === "required" && (
                            <p className="text-sm text-red-600 ml-4">Service is required.</p>
                        )}
                    </div> */}
                    <Dropdown
                        inputName={"service"}
                        inputLabel={"Choose Service:"}
                        control={control}
                        errors={errors}
                        options={ServicesList}
                    />
                    {/* FREQUENCY */}
                    {watch("service") === "Exterior Cleaning" ? (
                        <Dropdown
                            inputName={"frequency"}
                            inputLabel={"Choose Frequency:"}
                            control={control}
                            errors={errors}
                            options={FrequencyList}
                        />
                    ) : null}
                    {/* COMMENT */}
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
