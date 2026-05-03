"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FAQPromo = () => {
    return (
        <section className="relative w-full py-12 px-6 bg-gradient-to-b from-blue-900 to-blue-500 text-white text-center">
            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* Title with Gradient Text */}
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                    Got Questions? We’ve Got Answers.
                </h2>

                {/* Description */}
                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    Get the clarity you need! Explore answers to commonly asked questions about our
                    services, pricing, and process.
                    <span className="text-white font-semibold">
                        {" "}
                        Your peace of mind is our priority.
                    </span>
                </p>

                {/* Call to Action Button */}
                <motion.div
                    className="mt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/faq"
                        className="px-10 py-4 text-lg font-semibold text-white border-2 border-white bg-transparent rounded-full shadow-md hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                        Visit FAQs
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FAQPromo;
