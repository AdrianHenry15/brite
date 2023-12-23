"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactUs() {
    const InputClass = "border-2 border-gray-400 my-2 p-2 w-full";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div></div>
        // <div className="flex flex-col w-full px-4 lg:w-1/2">
        //     <h5 className="font-semibold text-4xl py-10">Contact Us</h5>
        //     {/* FORM */}
        //     <form className="self-center w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
        //         <div>
        //             {/* FIRST NAME */}
        //             <input
        //                 className={InputClass}
        //                 type="text"
        //                 name="firstName"
        //                 placeholder="First Name"
        //                 {...register("firstName", { required: false })}
        //             />
        //         </div>
        //         <div>
        //             {/* LAST NAME */}
        //             <input
        //                 className={InputClass}
        //                 type="text"
        //                 name="lastName"
        //                 placeholder="Last Name"
        //                 {...register("lastName", { required: false })}
        //             />
        //         </div>
        //         <div>
        //             {/* PHONE NUMBER */}
        //             <input
        //                 className={InputClass}
        //                 type="tel"
        //                 name="phoneNumber"
        //                 placeholder="Phone Number"
        //                 {...register("phoneNumber", {
        //                     required: false,
        //                     pattern: /^[0-9]{10}$/,
        //                 })}
        //             />
        //             {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
        //                 <p className="errorMsg">Phone Number should be 10 digits.</p>
        //             )}
        //         </div>
        //         <div>
        //             <input
        //                 className={InputClass}
        //                 type="text"
        //                 name="email"
        //                 placeholder="Email *"
        //                 {...register("email", {
        //                     required: true,
        //                     pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        //                 })}
        //             />
        //             {errors.email && errors.email.type === "required" && (
        //                 <p className="errorMsg">Email is required.</p>
        //             )}
        //             {errors.email && errors.email.type === "pattern" && (
        //                 <p className="errorMsg">Email is not valid.</p>
        //             )}
        //         </div>
        //         <div>
        //             <textarea
        //                 className="border-2 border-gray-400 my-2 p-2 w-full h-40"
        //                 placeholder="Comment"
        //                 name="comment"
        //                 {...register("comment", { required: false })}
        //             />
        //         </div>
        //         <div className="mt-4 mb-24">
        //             <button className="bg-blue-600 p-4 rounded-lg text-white" type="submit">
        //                 Contact Us
        //             </button>
        //         </div>
        //     </form>
        // </div>
    );
}
