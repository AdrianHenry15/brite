// import { ClerkProvider } from '@clerk/nextjs'
import React from "react";
import { Inter } from "next/font/google";

// import { ModalProvider } from "@/providers/modal-provider";
// import { ToastProvider } from "../providers/toast-provider";
// import { ThemeProvider } from "@/providers/theme-provider";

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
                {/* <ToastProvider /> */}
                {/* <ModalProvider /> */}
                {children}
            </body>
        </html>
        // </ClerkProvider>
    );
}
