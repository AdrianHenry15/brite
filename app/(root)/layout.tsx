import React from "react";

import Navbar from "./components/header";
import Footer from "./components/footer";

import "../globals.css";
import ContactFormContainer from "./components/forms/contact-form-container";
import PromotionalBanner from "./components/promotional-banner";
import { getActivePromotions } from "@/sanity/lib/promotions/getActivePromotions";

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
