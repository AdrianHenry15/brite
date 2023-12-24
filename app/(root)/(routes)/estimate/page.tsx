"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function Estimate() {
    const InputClass = "border-2 border-gray-400 my-2 p-2 w-full";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return <div></div>;
}
