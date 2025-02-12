"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const SocialProof = () => {
    const router = useRouter();

    return (
        // TODO: UPGRADE TO BASIC PLAN FOR ELFSIGHT TO TAKE OFF ELFSIGHT BRANDING
        <motion.section
            className="bg-white w-full flex flex-col items-center py-24 px-10 justify-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
            ></Script>
            <div
                className="elfsight-app-5569a9cf-9ef8-40cf-a013-e933e23bdd38"
                data-elfsight-app-lazy
            ></div>

            <Button
                variant="contained"
                color="primary"
                className="mt-10 w-[300px] bg-blue-500"
                onClick={() => router.push("/estimate")} // Redirect to /estimate page on click
            >
                Get Your Free Estimate!
            </Button>
        </motion.section>
    );
};

export default SocialProof;
