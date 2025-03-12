import React from "react";
import Navbar from "../../../components/header";
import Footer from "../../../components/footer";
import { Metadata } from "next";

// Define metadata for the layout
export const metadata: Metadata = {
    title: "User Profile | Brite",
    description: "View and update your profile information on Brite.",
};

export default function AuthUserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <div className="w-full flex flex-col bg-white">{children}</div>
            <Footer />
        </div>
    );
}
