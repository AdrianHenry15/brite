import React from "react";

import Navbar from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import "../globals.css";

export default async function CareersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <div className="w-full flex flex-col bg-white">{children}</div>
            <Footer />
        </div>
    );
}
