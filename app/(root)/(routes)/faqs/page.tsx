import { Metadata } from "next";
import React from "react";

import FAQSidebarNav from "../../../../components/layout/faqs/FAQSidebarNav";
import FAQItem from "../../../../components/layout/faqs/FAQItem";
import { FAQNavLinks, FAQNavMenu } from "../../../../lib/constants";
import FAQContainer from "../../../../components/layout/faqs/FAQContainer";

const DummyText =
    "Duis eget mi nec risus condimentum blandit. Integer non lacinia leo. Phasellus auctor dapibus nibh, vel ultrices odio tincidunt eu. Sed id est purus. Sed in neque a ligula fermentum fermentum. Etiam rhoncus tincidunt lectus, sit amet convallis justo fermentum vel. Sed gravida libero vel eros accumsan, a commodo felis aliquam.";

export const metadata: Metadata = {
    title: "Brite FAQs",
    description: "FAQs",
};

export default function FAQsPage() {
    return (
        <section className="flex flex-col w-full bg-white px-2">
            {/* TITLE */}
            <h5 className="text-[60px] text-white tracking-wider pl-6 bg-blue-600 py-4 md:py-24">
                FAQs
            </h5>
            {/* MAIN PAGE WORKSPACE */}
            <div className="flex flex-col my-24 px-6 w-full md:flex-row">
                {/* FAQs Sidebar Nav */}
                <FAQSidebarNav items={FAQNavMenu} />
                <div className="flex flex-col flex-1 w-full">
                    {/* FAQs */}
                    {/* BRITE */}
                    <FAQContainer title="Brite" id="brite">
                        <FAQItem answer={DummyText} question="What is Brite?" />
                        <FAQItem answer={DummyText} question="What is Brite?" />
                        <FAQItem answer={DummyText} question="What is Brite?" />
                    </FAQContainer>
                    {/* EXTERIOR CLEANING */}
                    <FAQContainer title="Exterior Cleaning" id="exterior-cleaning">
                        <FAQItem answer={DummyText} question="What is Exterior Cleaning?" />
                        <FAQItem answer={DummyText} question="What is Exterior Cleaning?" />
                    </FAQContainer>
                    {/* HOLIDAY LIGHTING */}
                    <FAQContainer title="Holiday Lighting" id="holiday-lighting">
                        <FAQItem answer={DummyText} question="What is Holiday Lighting?" />
                        <FAQItem answer={DummyText} question="What is Holiday Lighting?" />
                        <FAQItem answer={DummyText} question="What is Holiday Lighting?" />
                        <FAQItem answer={DummyText} question="What is Holiday Lighting?" />
                    </FAQContainer>
                    {/* PRESSURE WASHING */}
                    <FAQContainer title="Pressure Washing" id="pressure-washing">
                        <FAQItem answer={DummyText} question="What is Pressure Washing?" />
                    </FAQContainer>
                    {/* SOFT WASHING */}
                    <FAQContainer title="Soft Washing" id="soft-washing">
                        <FAQItem answer={DummyText} question="What is Soft Washing?" />
                        <FAQItem answer={DummyText} question="What is Soft Washing?" />
                        <FAQItem answer={DummyText} question="What is Soft Washing?" />
                    </FAQContainer>
                    {/* TRASH-BIN CLEANING */}
                    <FAQContainer title="Trash-Bin Cleaning" id="trash-bin-cleaning">
                        <FAQItem answer={DummyText} question="What is Trash-Bin Cleaning?" />
                    </FAQContainer>
                    {/* WINDOW CLEANING */}
                    <FAQContainer title="Window Cleaning" id="window-cleaning">
                        <FAQItem answer={DummyText} question="What is Window Cleaning?" />
                        <FAQItem answer={DummyText} question="What is Window Cleaning?" />
                    </FAQContainer>
                </div>
            </div>
        </section>
    );
}
