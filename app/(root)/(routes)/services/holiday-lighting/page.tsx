import React from "react";
import { Metadata } from "next";

import HolidayLightingImg from "@/public/assets/imgs/christmas-lights.jpg";
import Splash from "@/components/splash";
import CareersPromo from "@/components/promo-stuff/careers-promo";

export const metadata: Metadata = {
    title: "Holiday Lighting Services | Brite Exterior Cleaning",
    description:
        "Professional holiday lighting installation for homes and businesses, including custom displays, setup, maintenance, and removal in Charlotte, NC.",
    alternates: {
        canonical: "/services/holiday-lighting",
    },
    openGraph: {
        title: "Holiday Lighting Services | Brite Exterior Cleaning",
        description:
            "Transform your home or business with professional holiday lighting installation, custom displays, seasonal maintenance, and hassle-free removal.",
        url: "/services/holiday-lighting",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        images: [
            {
                url: "/assets/imgs/christmas-lights.jpg",
                width: 1200,
                height: 630,
                alt: "Holiday lighting installation by Brite Exterior Cleaning",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Holiday Lighting Services | Brite Exterior Cleaning",
        description:
            "Custom holiday lighting installation, maintenance, and removal for homes and businesses in Charlotte, NC.",
        images: ["/assets/imgs/christmas-lights.jpg"],
    },
};

const HolidayLightingPage = () => {
    return (
        <main className="flex w-full flex-col bg-background text-foreground">
            <Splash
                img={HolidayLightingImg}
                title="Holiday Lighting"
                description="Transform your property into a festive showcase with professional holiday lighting services. From custom displays to installation, maintenance, and removal, we create a bright, worry-free holiday experience for homes and businesses."
            />

            <CareersPromo />
        </main>
    );
};

export default HolidayLightingPage;
