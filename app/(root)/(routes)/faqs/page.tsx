import { Metadata } from "next";
import React from "react";

import ScrollUpBtn from "../../components/scroll-up-btn";
import FAQs from "../../components/faqs";

export const metadata: Metadata = {
    title: "Brite FAQs",
    description: "FAQs",
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
