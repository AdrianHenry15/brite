import React from "react";

import Navbar from "../../components/ui/header";
import Footer from "../../components/ui/Footer";

import "../globals.css";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full mb-10">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
