import React from "react";

import Navbar from "./components/header";
import Footer from "./components/footer";

import "../globals.css";
import ContactFormContainer from "./components/forms/contact-form-container";

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
