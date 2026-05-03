import type { Metadata } from "next";

import Navbar from "@/components/header";
import Footer from "@/components/footer";
import ContactFormContainer from "@/components/forms/contact-form";
import PromotionalBanner from "@/components/promo-stuff/promotional-banner";
import ButtonRow from "./(routes)/(home)/components/button-row";

export const metadata: Metadata = {
    metadataBase: new URL("https://briteclt.com"),

    title: {
        default: "Brite Exterior Cleaning | Professional Cleaning Services",
        template: "%s | Brite Exterior Cleaning",
    },

    description:
        "Professional exterior cleaning services including pressure washing, roof cleaning, and driveway restoration. Serving residential and commercial clients.",

    keywords: [
        "exterior cleaning",
        "pressure washing",
        "soft washing",
        "roof cleaning",
        "trash bin cleaning",
        "house washing",
        "Charlotte exterior cleaning",
        "North Carolina exterior cleaning",
    ],

    openGraph: {
        title: "Brite Exterior Cleaning",
        description: "High-quality exterior cleaning services for homes and businesses.",
        url: "https://briteclt.com",
        siteName: "Brite Exterior Cleaning",
        images: [
            {
                url: "/assets/imgs/brite-pic-1.jpg", // you should add this
                width: 1200,
                height: 630,
                alt: "Brite Exterior Cleaning Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning",
        description: "Professional pressure washing and exterior cleaning services.",
        images: ["/assets/imgs/brite-pic-1.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/assets/icons/brite-logo.png",
    },
};

export default function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh w-full flex-col bg-background text-foreground">
            <ButtonRow />

            <Navbar />

            <PromotionalBanner />

            <main className="flex w-full flex-1 flex-col bg-background">{children}</main>

            <ContactFormContainer />

            <Footer />
        </div>
    );
}
