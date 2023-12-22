import React from "react";

import Navbar from "../../components/header";
import Footer from "../../components/footer";

import "../globals.css";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <div className="w-full flex flex-col bg-black">{children}</div>
            <Footer />
        </div>
    );
}
