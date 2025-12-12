"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
} as const;

export default function SocialProof() {
    const router = useRouter();

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background gradient + soft glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
            <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

            <motion.div
                className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.h2
                    variants={itemVariants}
                    className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                >
                    Trusted by a variety of homeowners
                </motion.h2>

                <motion.p variants={itemVariants} className="mb-12 max-w-2xl text-lg text-gray-600">
                    Real reviews from real customers. See why Brite is the go-to choice for exterior
                    cleaning done right.
                </motion.p>

                {/* Elfsight Script */}
                <Script
                    src="https://static.elfsight.com/platform/platform.js"
                    data-use-service-core
                    defer
                />

                {/* Social Proof Card */}
                <motion.div
                    variants={itemVariants}
                    className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
                >
                    <div
                        className="elfsight-app-5569a9cf-9ef8-40cf-a013-e933e23bdd38"
                        data-elfsight-app-lazy
                    />
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="mt-12">
                    <Button
                        variant="contained"
                        color="primary"
                        className="w-[280px] rounded-xl bg-blue-600 py-3 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:bg-blue-700"
                        onClick={() => router.push("/estimate")}
                    >
                        Get Your Free Estimate
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
