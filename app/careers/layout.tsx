import React from "react";

import "../globals.css";
import Navbar from "../(root)/components/header";
import Footer from "../(root)/components/footer";

export default async function CareersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <div className="w-full flex flex-col bg-white">{children}</div>
            <Footer />
        </div>
    );
}
