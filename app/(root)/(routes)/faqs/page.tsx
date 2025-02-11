import { Metadata } from "next";
import React from "react";

import ScrollUpBtn from "../../components/scroll-up-btn";
import FAQs from "../../components/faqs";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Brite Exterior Cleaning Services",
    description:
        "Have questions about exterior cleaning services? Find answers to the most common questions about Brite's cleaning services, pricing, and process.",
    openGraph: {
        title: "Frequently Asked Questions | Brite Exterior Cleaning Services",
        description:
            "Find answers to the most common questions about Brite's exterior cleaning services, pricing, and process.",
        url: "https://briteclt.com/faqs",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frequently Asked Questions | Brite Exterior Cleaning Services",
        description:
            "Find answers to the most common questions about Brite's exterior cleaning services, pricing, and process.",
    },
};

export default function FAQsPage() {
    return (
        <section className="flex flex-col w-full bg-white relative">
            {/* TITLE */}
            <h5 className="text-[60px] text-white tracking-wider pl-6 bg-blue-600 py-4 md:py-24">
                FAQs
            </h5>
            {/* MAIN PAGE WORKSPACE */}
            <FAQs />
            <ScrollUpBtn />
        </section>
    );
}
