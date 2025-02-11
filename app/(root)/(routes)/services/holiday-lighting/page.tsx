import React from "react";
import { Metadata } from "next";

import { GiRabbit } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { CiRuler } from "react-icons/ci";

import ChristmasLightingSplash from "@/public/assets/imgs/christmas-lights.jpg";
import IconBanner from "@/app/(root)/components/icon-banner";
import ComponentSplash from "@/app/(root)/components/component-splash";
import ProductRow from "@/app/(root)/components/products/product-row";

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
            <ComponentSplash title={"Holiday Lighting"} img={ChristmasLightingSplash} />
            <IconBanner
                icon1={<CiRuler size={50} />}
                title1={"Design"}
                description1={
                    "Work with one of our lighting experts to give your home a look you’ll love for the holidays"
                }
                icon2={<FaWrench size={50} />}
                title2={"Installation, Removal, & Storage"}
                description2={
                    "Never worry about your holiday decor again. We keep your display stored safely  and ready for installation and removal on your schedule."
                }
                icon3={<GiRabbit size={50} />}
                title3={"Fast Service"}
                description3={
                    "Nobody can control mother nature, but we can control how fast we solve the problems she may cause. We solve any service calls within 36 hours of notification."
                }
            />
            <ProductRow
                category="Holiday Lighting"
                title="Lighting Up Your Holidays with Sparkle and Cheer!"
                className="pb-24"
            />
        </section>
    );
};

export default HolidayLightingPage;
