import React from "react";
import { Metadata } from "next";

import HolidayLightingImg from "@/public/assets/imgs/christmas-lights.jpg";
import PromoSection from "@/app/(root)/components/icon-banner";
import CareersPromo from "@/app/(root)/components/promo-stuff/careers-promo";

export const metadata: Metadata = {
    title: "Holiday Lighting Services | Brite Exterior Cleaning Services",
    description:
        "Brighten up your holidays with Brite Exterior Cleaning's professional holiday lighting installation services. Serving homes and businesses in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Holiday Lighting Services | Brite Exterior Cleaning Services",
        description:
            "Transform your home or business this holiday season with Brite Exterior Cleaning's expert holiday lighting installation services. Serving Charlotte, NC and nearby areas.",
        url: "https://briteclt.com/services/holiday-lighting",
    },
    twitter: {
        card: "summary_large_image",
        title: "Holiday Lighting Services | Brite Exterior Cleaning Services",
        description:
            "Let Brite Exterior Cleaning handle your holiday lighting installation, creating a beautiful display for your home or business in Charlotte, NC.",
    },
};

const HolidayLightingPage = () => {
    return (
        <section>
            <PromoSection
                img={HolidayLightingImg}
                title="Holiday Lighting"
                description="Transform your property into a festive wonderland with our professional holiday lighting services. From custom displays to hassle-free installation and maintenance, we create a dazzling, worry-free holiday experience that will light up your season."
            />

            <CareersPromo />
        </section>
    );
};

export default HolidayLightingPage;
