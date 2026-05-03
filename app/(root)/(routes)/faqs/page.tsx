import { Metadata } from "next";
import React from "react";

import ScrollUpBtn from "../../../../components/scroll-up-btn";
import FAQContainer from "./components/container";
import FAQItem from "./components/item";
import FAQSidebarNav from "./components/faq-nav";
import {
    BriteFAQs,
    ExteriorCleaningFAQs,
    HolidayLightingFAQs,
    PressureWashingFAQs,
    SoftWashingFAQs,
    TrashBinCleaningFAQs,
    WindowCleaningFAQs,
} from "@/lib/FAQItems";
import { FAQNavMenu } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Brite Exterior Cleaning",
    description:
        "Find answers to common questions about Brite Exterior Cleaning services, pricing, estimates, pressure washing, soft washing, window cleaning, holiday lighting, and more.",

    alternates: {
        canonical: "/faqs",
    },

    openGraph: {
        title: "Frequently Asked Questions | Brite Exterior Cleaning",
        description:
            "Answers to common questions about Brite Exterior Cleaning services, pricing, estimates, and service process.",
        url: "/faqs",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Frequently Asked Questions | Brite Exterior Cleaning",
        description:
            "Get answers about Brite Exterior Cleaning services, pricing, estimates, and exterior cleaning processes.",
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        "Brite Exterior Cleaning FAQ",
        "exterior cleaning questions",
        "pressure washing FAQ",
        "soft washing FAQ",
        "window cleaning FAQ",
        "holiday lighting FAQ",
        "Charlotte exterior cleaning questions",
    ],
};

export default function FAQsPage() {
    return (
        <main className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
            <header className="w-full bg-gradient-to-r from-primary/95 via-primary to-primary/80 px-4 py-16 text-primary-foreground sm:px-6 md:py-24 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
                        Help Center
                    </p>

                    <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">FAQs</h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg">
                        Find answers to common questions about our services, estimates, scheduling,
                        and exterior cleaning process.
                    </p>
                </div>
            </header>

            <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
                <FAQSidebarNav items={FAQNavMenu} />

                <div className="flex w-full flex-1 flex-col">
                    <FAQContainer title="Brite" id="brite">
                        {BriteFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>

                    <FAQContainer title="Exterior Cleaning" id="exterior-cleaning">
                        {ExteriorCleaningFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>

                    <FAQContainer title="Holiday Lighting" id="holiday-lighting">
                        {HolidayLightingFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>

                    <FAQContainer title="Pressure Washing" id="pressure-washing">
                        {PressureWashingFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>

                    <FAQContainer title="Soft Washing" id="soft-washing">
                        {SoftWashingFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>

                    <FAQContainer title="Trash Bin Cleaning" id="trash-bin-cleaning">
                        {TrashBinCleaningFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>

                    <FAQContainer title="Window Cleaning" id="window-cleaning">
                        {WindowCleaningFAQs.map((item) => (
                            <FAQItem
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </FAQContainer>
                </div>
            </section>

            <ScrollUpBtn />
        </main>
    );
}
