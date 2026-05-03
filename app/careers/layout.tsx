import React from "react";
import { Metadata } from "next";

import "../globals.css";
import Navbar from "../../components/header";
import Footer from "../../components/footer";

export const metadata: Metadata = {
    title: "Careers | Brite Exterior Cleaning",
    description:
        "Explore career opportunities with Brite Exterior Cleaning in Charlotte, NC, including exterior cleaning, pressure washing, soft washing, and holiday lighting roles.",

    alternates: {
        canonical: "/careers",
    },

    openGraph: {
        title: "Careers | Brite Exterior Cleaning",
        description:
            "Join Brite Exterior Cleaning and build a career in professional exterior cleaning, pressure washing, soft washing, and holiday lighting services.",
        url: "/careers",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Careers | Brite Exterior Cleaning",
        description:
            "Brite Exterior Cleaning is hiring in Charlotte, NC. Explore opportunities in exterior cleaning, pressure washing, and holiday lighting.",
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        "Brite Exterior Cleaning careers",
        "exterior cleaning jobs Charlotte NC",
        "pressure washing jobs Charlotte NC",
        "soft washing careers",
        "holiday lighting jobs",
        "cleaning service jobs Charlotte",
    ],
};

export default async function CareersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
            <Navbar />

            <div className="flex w-full flex-1 flex-col bg-background text-foreground">
                {children}
            </div>

            <Footer />
        </div>
    );
}
