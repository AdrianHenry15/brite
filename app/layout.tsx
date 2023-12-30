// import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Loader } from "../components/Loader";

import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Brite",
    description: "Residential/Commercial Maintenance Services",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // <ClerkProvider>
        <html lang="en">
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
        </html>
        // </ClerkProvider>
    );
}
