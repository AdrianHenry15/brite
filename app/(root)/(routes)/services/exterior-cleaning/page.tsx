import React from "react";
import { Metadata } from "next";
import Splash from "@/components/splash";
import ExteriorCleaningImg from "@/public/assets/imgs/ec-1.jpg";
import BlogPromo from "@/components/promo-stuff/blog-promo";
import ServicesComponent from "@/components/services/services-component";

const exteriorCleaningServices = [
    {
        id: "gutter-cleaning",
        title: "Gutter Cleaning",
        description:
            "Prevent water damage and preserve your home’s foundation with thorough debris removal, downspout flushing, and exterior drainage care.",
    },
    {
        id: "window-cleaning",
        title: "Window Cleaning",
        description:
            "Crystal-clear window detailing that enhances natural light, improves curb appeal, and restores a polished exterior appearance.",
    },
    {
        id: "pressure-washing",
        title: "Pressure Washing",
        description:
            "Professional pressure washing for driveways, walkways, patios, hardscapes, and exterior surfaces with built-up dirt or grime.",
    },
    {
        id: "soft-washing",
        title: "Soft Washing",
        description:
            "Low-pressure exterior washing for roofs, siding, stucco, and delicate surfaces that need a safer, controlled cleaning method.",
    },
    {
        id: "stain-removal",
        title: "Stain Removal",
        description:
            "Targeted exterior stain treatment for rust, organic buildup, mildew, algae, and discoloration without unnecessary surface damage.",
    },
];

export const metadata: Metadata = {
    title: "Exterior Cleaning Services | Brite Exterior Cleaning",
    description:
        "Professional exterior cleaning services for homes and businesses, including pressure washing, soft washing, gutter cleaning, window cleaning, and stain removal.",
    alternates: {
        canonical: "/services/exterior-cleaning",
    },
    openGraph: {
        title: "Exterior Cleaning Services | Brite Exterior Cleaning",
        description:
            "Restore your property’s curb appeal with professional pressure washing, soft washing, window cleaning, gutter cleaning, and exterior stain removal.",
        url: "/services/exterior-cleaning",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        images: [
            {
                url: "/assets/imgs/ec-1.jpg",
                width: 1200,
                height: 630,
                alt: "Professional exterior cleaning service by Brite Exterior Cleaning",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Exterior Cleaning Services | Brite Exterior Cleaning",
        description:
            "Pressure washing, soft washing, gutter cleaning, window cleaning, and stain removal for cleaner, brighter properties.",
        images: ["/assets/imgs/ec-1.jpg"],
    },
};

const ExteriorCleaningPage = () => {
    return (
        <main className="flex w-full flex-col items-center bg-background text-foreground">
            <Splash
                img={ExteriorCleaningImg}
                title="Exterior Cleaning"
                description="Elevate your property’s curb appeal with expert exterior cleaning. Our specialized pressure washing, window detailing, gutter cleaning, and soft washing services deliver a clean, lasting finish for homes and businesses."
            />

            <BlogPromo />

            <ServicesComponent
                title="Exterior Cleaning Services"
                services={exteriorCleaningServices}
            />
        </main>
    );
};

export default ExteriorCleaningPage;
