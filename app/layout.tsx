import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Loader } from "../components/Loader";

import "./globals.css";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import DisableDraftMode from "../components/disable-draft-mode";
import { VisualEditing } from "next-sanity";
import { SanityLive } from "../sanity/lib/live";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brite",
    description: "Residential/Commercial Maintenance Services",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider dynamic>
            <html lang="en">
                <link rel="icon" href="/assets/icons/brite-logo.png" />
                <body className={inter.className}>
                    {/* {(await draftMode()).isEnabled && (
                        <>
                            <DisableDraftMode />
                            <VisualEditing />
                        </>
                    )} */}
                    <Analytics />
                    <SpeedInsights />
                    <Toaster />
                    <Script
                        strategy="beforeInteractive"
                        id="googlemaps"
                        type="text/javascript"
                        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
                    />
                    <Suspense fallback={<Loader />}>{children}</Suspense>
                    {/* Higher order component for live settings when product is published */}
                    <SanityLive />
                </body>
            </html>
        </ClerkProvider>
    );
}
