"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FAQPromo = () => {
    return (
        <section className="relative w-full py-12 px-6 bg-gradient-to-b from-primary/90 to-primary text-primary-foreground text-center">
            {/* Overlay for contrast consistency */}
            <div className="absolute inset-0 bg-background/10" />

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-4xl"
            >
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary-foreground via-primary-foreground/80 to-primary-foreground/60 bg-clip-text text-transparent">
                    Got Questions? We’ve Got Answers.
                </h2>

                {/* Description */}
                <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
                    Get the clarity you need! Explore answers to commonly asked questions about our
                    services, pricing, and process.
                    <span className="text-primary-foreground font-semibold">
                        {" "}
                        Your peace of mind is our priority.
                    </span>
                </p>

                {/* CTA */}
                <motion.div
                    className="mt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/faq"
                        className="inline-flex items-center justify-center rounded-full border border-primary-foreground/60 px-10 py-4 text-lg font-semibold text-primary-foreground bg-transparent shadow-sm transition-all duration-300 hover:bg-primary-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Visit FAQs
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FAQPromo;
