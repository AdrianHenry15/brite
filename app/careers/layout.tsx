import React from "react";

import "../globals.css";
import Navbar from "../(root)/components/header";
import Footer from "../(root)/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Brite Exterior Cleaning Services",
    description:
        "Join the Brite Exterior Cleaning team! Explore career opportunities in exterior cleaning services, including pressure washing and holiday lighting installation, in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Careers | Brite Exterior Cleaning Services",
        description:
            "Looking for a rewarding career? Brite Exterior Cleaning is hiring! Explore our job opportunities in exterior cleaning services in Charlotte, NC.",
        url: "https://briteclt.com/careers",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers | Brite Exterior Cleaning Services",
        description:
            "Start your career with Brite Exterior Cleaning! We're hiring for positions in exterior cleaning, pressure washing, and holiday lighting installation in Charlotte, NC.",
    },
};

export default async function CareersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Navbar />
            <div className="w-full flex flex-col bg-white">{children}</div>
            <Footer />
        </div>
    );
}
