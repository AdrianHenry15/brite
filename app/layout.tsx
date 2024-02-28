// import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import { Loader } from "../components/Loader";

import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brite",
    description: "Residential/Commercial Maintenance Services",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // <ClerkProvider>
        <div>
            <link rel="icon" href="/assets/icons/brite-logo.png" />
            <body className={inter.className}>
                <Toaster />
                <Script
                    strategy="beforeInteractive"
                    id="googlemaps"
                    type="text/javascript"
                    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
                />
                <Suspense fallback={<Loader />}>{children}</Suspense>
            </body>
        </div>
        // </ClerkProvider>
    );
}
