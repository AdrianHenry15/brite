import React, { Suspense } from "react";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkLoading, ClerkProvider } from "@clerk/nextjs";

import { Loader } from "../components/loader";

import "./globals.css";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import DisableDraftMode from "../components/disable-draft-mode";
import GoogleTagManagerScript from "@/lib/google-tag-manager/script";
import GoogleTagManagerNoScript from "@/lib/google-tag-manager/no-script";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brite Exterior Cleaning Services",
    description:
        "Professional residential and commercial exterior cleaning services in Charlotte, NC. Trust Brite for your maintenance and cleaning needs.",
    openGraph: {
        title: "Brite Exterior Cleaning Services",
        description:
            "Residential and commercial exterior cleaning services provided by Brite in Charlotte, NC. Discover our maintenance services for a spotless home or business.",
        url: "https://briteclt.com", // Make sure this is the homepage URL
        siteName: "Brite Exterior Cleaning",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning Services",
        description:
            "Explore Brite's residential and commercial exterior cleaning services in Charlotte, NC. Get your property looking its best with our professional services.",
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`;

    return (
        <ClerkProvider dynamic>
            <html lang="en">
                {/* GTM Head Script For Marketing */}
                <head>
                    <GoogleTagManagerScript />
                </head>
                <link rel="icon" href="/assets/icons/brite-logo.png" />
                <body className={nunito.className}>
                    {/* GTM Noscript For Marketing */}
                    <GoogleTagManagerNoScript />
                    {(await draftMode()).isEnabled && (
                        <>
                            <DisableDraftMode />
                            <VisualEditing />
                        </>
                    )}
                    <Analytics />
                    <SpeedInsights />
                    <Toaster />
                    <Script
                        strategy="beforeInteractive"
                        id="googlemaps"
                        type="text/javascript"
                        src={googleMapsUrl}
                    />
                    <Suspense fallback={<Loader />}>
                        <ClerkLoading>
                            <Loader />
                        </ClerkLoading>
                        {children}
                    </Suspense>
                </body>
            </html>
        </ClerkProvider>
    );
}
