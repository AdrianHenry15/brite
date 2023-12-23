"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

import Logo from "../public/assets/icons/brite-logo.png";
import HandyMan from "../public/assets/imgs/handyman.webp";

import Button from "./Button";

const ContactForm = () => {
    const InputClass = "border-2 border-gray-400 my-2 p-2 rounded-sm w-full shadow-md";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section className="flex flex-col items-center px-4 py-20 shadow-inner relative">
            <div className="absolute hidden top-[250px] left-60 2xl:flex">
                <Image src={HandyMan} alt="Brite Logo" />
            </div>
            <h1 className="text-3xl mb-10 font-light animate-bounce">Get Your Free Estimate!</h1>
            {/* FORM CONTAINER */}
            <div className="flex flex-col w-[350px] p-6 rounded-2xl shadow-blue-600 shadow-lg border-2 md:w-[650px]">
                {/* LOGO */}
                <div className="flex justify-center">
                    <Image width={100} src={Logo} alt="Brite Logo" />
                </div>
                {/* FORM */}
                <form className="self-center w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {/* FIRST NAME */}
                        <input
                            className={InputClass}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            {...register("firstName", { required: false })}
                        />
                    </div>
                    <div>
                        {/* LAST NAME */}
                        <input
                            className={InputClass}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            {...register("lastName", { required: false })}
                        />
                    </div>
                    <div>
                        {/* PHONE NUMBER */}
                        <input
                            className={InputClass}
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            {...register("phoneNumber", {
                                required: false,
                                pattern: /^[0-9]{10}$/,
                            })}
                        />
                        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                            <p className="errorMsg">Phone Number should be 10 digits.</p>
                        )}
                    </div>
                    <div>
                        <input
                            className={InputClass}
                            type="text"
                            name="email"
                            placeholder="Email *"
                            {...register("email", {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p className="errorMsg">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p className="errorMsg">Email is not valid.</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            className="border-2 border-gray-400 my-2 p-2 w-full h-40"
                            placeholder="Comment"
                            name="comment"
                            {...register("comment", { required: false })}
                        />
                    </div>
                    <div className="my-10 animate-bounce">
                        <Button
                            submit
                            name="Get Your Free Estimate"
                            className="w-full justify-center"
                        ></Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
