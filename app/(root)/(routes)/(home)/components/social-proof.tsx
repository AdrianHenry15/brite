"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";

const SocialProof = () => {
    return (
        <motion.section
            className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-4 pb-10 pt-10 text-foreground sm:px-6 lg:px-10 lg:py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
            />

            <div
                className="w-full max-w-5xl rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-xl shadow-primary/10"
                data-elfsight-app-lazy
            >
                <div className="elfsight-app-5569a9cf-9ef8-40cf-a013-e933e23bdd38" />
            </div>

            <div className="mt-8">
                <Link
                    href="/estimate"
                    className="inline-flex w-full max-w-[300px] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    Get Your Free Estimate!
                </Link>
            </div>
        </motion.section>
    );
};

export default SocialProof;
