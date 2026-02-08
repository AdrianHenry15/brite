import React from "react";
import { Metadata } from "next";
import CommercialServicesImg from "@/public/assets/imgs/action-3.jpg";
import FAQPromo from "@/components/promo-stuff/faqs-promo";
import Splash from "@/components/splash";
import ServicesComponent from "@/components/services/services-component";

const commercialServices = [
    {
        id: "commercial-gutter-cleaning",
        title: "Gutter Cleaning",
        description:
            "Prevent costly water damage and drainage failures with scheduled commercial gutter cleaning. We remove debris, clear downspouts, and ensure proper water flow for large-scale buildings and facilities.",
    },
    {
        id: "commercial-window-cleaning",
        title: "Window Cleaning",
        description:
            "Professional window cleaning for storefronts, office buildings, and commercial properties. Improve visibility, natural light, and maintain a polished, professional appearance.",
    },
    {
        id: "sidewalk-cleaning",
        title: "Sidewalk Cleaning",
        description:
            "High-traffic sidewalks accumulate grime, gum, and stains. Our commercial sidewalk cleaning restores safety, improves curb appeal, and reduces slip hazards.",
    },
    {
        id: "dumpster-pad-cleaning",
        title: "Dumpster Pad Cleaning",
        description:
            "Eliminate odors, grease buildup, and bacteria with routine dumpster pad cleaning. Essential for health compliance and maintaining a sanitary commercial environment.",
    },
    {
        id: "building-washing",
        title: "Building Washing",
        description:
            "Complete exterior building washing using pressure and soft washing methods to remove dirt, mold, and pollutants while protecting surfaces and finishes.",
    },
    {
        id: "roof-washing",
        title: "Roof Washing",
        description:
            "Low-pressure roof washing designed for commercial roofs. Removes organic growth and extends roof lifespan without compromising structural integrity.",
    },
    {
        id: "christmas-lighting",
        title: "Commercial Christmas Lighting",
        description:
            "Professional holiday lighting installation, maintenance, and removal for commercial properties. Create a festive, inviting atmosphere without operational downtime.",
    },
];

export const metadata: Metadata = {
    title: "Commercial Services | Brite Exterior Cleaning Services",
    description:
        "Explore Brite Exterior Cleaning's commercial exterior cleaning services, including pressure washing, window cleaning, and more for businesses in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Commercial Services | Brite Exterior Cleaning Services",
        description:
            "Discover the comprehensive exterior cleaning services for businesses by Brite Exterior Cleaning, including pressure washing, window cleaning, and other commercial services.",
        url: "https://briteclt.com/services/commercial-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Commercial Services | Brite Exterior Cleaning Services",
        description:
            "Brite Exterior Cleaning offers professional commercial exterior cleaning services, including pressure washing and window cleaning for businesses in Charlotte, NC.",
    },
};

const CommercialServicesPage = () => {
    return (
        <section className="w-full justify-center items-center self-center">
            <Splash
                img={CommercialServicesImg}
                title="Commercial Services"
                description="Boost your business’s professional appearance with our tailored commercial cleaning solutions. From pressure washing to detailed window cleaning and soft washing, we ensure your commercial property maintains a pristine, impressive look for clients and visitors alike."
            />

            <FAQPromo />
            <ServicesComponent title="Commercial Services" services={commercialServices} />
        </section>
    );
};

export default CommercialServicesPage;
