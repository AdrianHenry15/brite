import React, { Suspense } from "react";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";

import { Loader } from "../components/loader";
import DisableDraftMode from "../components/disable-draft-mode";
import GoogleTagManagerScript from "@/lib/google-tag-manager/script";
import GoogleTagManagerNoScript from "@/lib/google-tag-manager/no-script";
import { SanityLive } from "../sanity/lib/live";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://briteclt.com"),
    icons: {
        icon: "/assets/icons/brite-logo.png",
    },
    title: "Brite Exterior Cleaning Services",
    description:
        "Professional residential and commercial exterior cleaning services in Charlotte, NC. Trust Brite for your maintenance and cleaning needs.",
    openGraph: {
        title: "Brite Exterior Cleaning Services",
        description:
            "Residential and commercial exterior cleaning services provided by Brite in Charlotte, NC.",
        url: "https://briteclt.com",
        siteName: "Brite Exterior Cleaning",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning Services",
        description:
            "Explore Brite's residential and commercial exterior cleaning services in Charlotte, NC.",
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`;
    const isDraftMode = (await draftMode()).isEnabled;

    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <GoogleTagManagerScript />
                </head>

                <body
                    className={`${nunito.className} font-sans bg-background text-foreground antialiased`}
                >
                    <ThemeProvider>
                        <GoogleTagManagerNoScript />

                        {isDraftMode && (
                            <>
                                <DisableDraftMode />
                                <VisualEditing />
                            </>
                        )}

                        <Analytics />
                        <SpeedInsights />
                        <Toaster />

                        <Script strategy="beforeInteractive" id="googlemaps" src={googleMapsUrl} />

                        <ClerkLoading>
                            <Loader />
                        </ClerkLoading>

                        {children}

                        <SanityLive />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
