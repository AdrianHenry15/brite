"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Newsletter() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<{ email: string }>();
    const [message, setMessage] = useState("");

    const onSubmit = async (data: { email: string }) => {
        try {
            // Simulate an API request
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage("You have successfully subscribed to our newsletter!");
            reset();
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 p-6">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 text-center mt-2">
                    Get the latest updates right in your inbox!
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
                    >
                        Subscribe
                    </button>
                </form>

                {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            </div>
        </div>
    );
}
