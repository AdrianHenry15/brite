import React from "react";

import Navbar from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import "../globals.css";
import ContactFormContainer from "../../components/contact-form-section/ContactFormContainer";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <div className="w-full flex flex-col bg-white">{children}</div>
            <ContactFormContainer />
            <Footer />
        </div>
    );
}
