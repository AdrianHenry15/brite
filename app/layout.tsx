// import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Loader } from "./(root)/components/loader";

import "./globals.css";
import { Metadata } from "next";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brite",
    description: "Residential/Commercial Maintenance Services",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // <ClerkProvider>
        <html lang="en">
            <link rel="icon" href="/assets/icons/brite-logo.png" />
            <body className={nunito.className}>
                <Analytics />
                <SpeedInsights />
                <Toaster />
                <Script
                    strategy="beforeInteractive"
                    id="googlemaps"
                    type="text/javascript"
                    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}&libraries=places`}
                />
                <Suspense fallback={<Loader />}>{children}</Suspense>
            </body>
        </html>
        // </ClerkProvider>
    );
}
