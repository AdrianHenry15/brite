import React from "react";
import { Metadata } from "next";
import CommercialServicesImg from "@/public/assets/imgs/action-3.jpg";
import FAQPromo from "@/app/(root)/components/promo-stuff/faqs-promo";
import PromoSection from "@/app/(root)/components/icon-banner";

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
            <PromoSection
                img={CommercialServicesImg}
                title="Commercial Services"
                description="Boost your business’s professional appearance with our tailored commercial cleaning solutions. From pressure washing to detailed window cleaning and soft washing, we ensure your commercial property maintains a pristine, impressive look for clients and visitors alike."
            />

            <FAQPromo />
        </section>
    );
};

export default CommercialServicesPage;
