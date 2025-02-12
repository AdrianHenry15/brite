import { Metadata } from "next";
import React from "react";

import ScrollUpBtn from "../../components/scroll-up-btn";
import FAQContainer from "./components/container";
import FAQItem from "./components/item";
import {
    BriteFAQs,
    ExteriorCleaningFAQs,
    HolidayLightingFAQs,
    PressureWashingFAQs,
    SoftWashingFAQs,
    TrashBinCleaningFAQs,
    WindowCleaningFAQs,
} from "@/lib/FAQItems";
import FAQSidebarNav from "./components/sidebar-nav";
import { FAQNavMenu } from "@/lib/constants";

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
            <div className="flex flex-col w-full mb-10 md:my-10 md:flex-row">
                {/* FAQs Sidebar Nav */}
                <FAQSidebarNav items={FAQNavMenu} />
                <div className="flex flex-col flex-1 w-full relative">
                    {/* FAQs */}
                    {/* BRITE */}
                    <FAQContainer title="Brite" id="brite">
                        {BriteFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                    {/* EXTERIOR CLEANING */}
                    <FAQContainer title="Exterior Cleaning" id="exterior-cleaning">
                        {ExteriorCleaningFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                    {/* HOLIDAY LIGHTING */}
                    <FAQContainer title="Holiday Lighting" id="holiday-lighting">
                        {HolidayLightingFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                    {/* PRESSURE WASHING */}
                    <FAQContainer title="Pressure Washing" id="pressure-washing">
                        {PressureWashingFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                    {/* SOFT WASHING */}
                    <FAQContainer title="Soft Washing" id="soft-washing">
                        {SoftWashingFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                    {/* TRASH BIN CLEANING */}
                    <FAQContainer title="Trash Bin Cleaning" id="trash-bin-cleaning">
                        {TrashBinCleaningFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                    {/* WINDOW CLEANING */}
                    <FAQContainer title="Window Cleaning" id="window-cleaning">
                        {WindowCleaningFAQs.map((item, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            );
                        })}
                    </FAQContainer>
                </div>
            </div>
            <ScrollUpBtn />
        </section>
    );
}
