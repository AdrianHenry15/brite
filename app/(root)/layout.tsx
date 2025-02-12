import React from "react";

import Navbar from "./components/header";
import Footer from "./components/footer";

import "../globals.css";
import ContactFormContainer from "./components/forms/contact-form";
import PromotionalBanner from "./components/promo-stuff/promotional-banner";
import { getActivePromotions } from "@/sanity/lib/promotions/getActivePromotions";
import { Metadata } from "next";

// Define metadata for the layout
export const metadata: Metadata = {
    title: "Brite | Professional Exterior Cleaning Services",
    description:
        "Explore our high-quality exterior cleaning services. Get in touch with Brite for all your cleaning needs.",
};

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    const promotions = await getActivePromotions();
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <PromotionalBanner promotions={promotions} />
            <div className="w-full flex flex-col bg-white">{children}</div>
            <ContactFormContainer />
            <Footer />
        </div>
    );
}
