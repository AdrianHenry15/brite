// import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";

import { Loader } from "../components/Loader";

import "./globals.css";

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
                <Suspense fallback={<Loader />}>{children}</Suspense>
            </body>
        </html>
        // </ClerkProvider>
    );
}
