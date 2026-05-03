"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CareersPromo = () => {
    return (
        <section className="relative w-full py-12 text-center text-primary-foreground bg-gradient-to-b from-primary/90 to-primary">
            {/* Contrast overlay */}
            <div className="absolute inset-0 bg-background/10" />

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-4xl px-6"
            >
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-foreground via-primary-foreground/80 to-primary-foreground/60 bg-clip-text text-transparent">
                    Join Our Team
                </h2>

                {/* Description */}
                <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
                    We're always looking for talented individuals to join our growing team. Bring
                    your passion, skills, and drive to help us deliver exceptional service to our
                    clients.
                </p>

                {/* CTA */}
                <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/careers"
                        className="inline-flex items-center justify-center rounded-full border border-primary-foreground/60 px-8 py-4 text-lg font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Explore Careers
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CareersPromo;
