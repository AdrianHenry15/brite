import React from "react";
import { Metadata } from "next";
import PromoSection from "@/app/(root)/components/icon-banner";
import ExteriorCleaningImg from "@/public/assets/imgs/ec-1.jpg";
import BlogPromo from "@/app/(root)/components/promo-stuff/blog-promo";
import FAQPromo from "@/app/(root)/components/promo-stuff/faqs-promo";

export const metadata: Metadata = {
    title: "Luxury Exterior Cleaning Services | Brite Estate Care",
    description:
        "Brite Estate Care offers elite exterior cleaning services tailored for luxury homes and high-end businesses. Experience pristine perfection with our premium pressure washing, window detailing, and soft washing services.",
    openGraph: {
        title: "Luxury Exterior Cleaning Services | Brite Estate Care",
        description:
            "Maintain the elegance of your estate with Brite Estate Care. Our specialized exterior cleaning services ensure your property remains in pristine condition, enhancing its value and curb appeal.",
        url: "https://briteclt.com/services/exterior-cleaning",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luxury Exterior Cleaning Services | Brite Estate Care",
        description:
            "Brite Estate Care delivers unparalleled exterior cleaning solutions for luxury homes and high-end businesses. Elevate your estate’s sophistication with our meticulous detailing services.",
    },
};

const ExteriorCleaningPage = () => {
    return (
        <section className="w-full flex flex-col items-center">
            <PromoSection
                img={ExteriorCleaningImg}
                title="Exterior Cleaning"
                description="Elevate your property’s curb appeal with expert exterior cleaning. Our specialized pressure washing, window detailing, and soft washing services ensure a flawless, lasting finish for luxury homes and high-end businesses."
            />
            <BlogPromo />
        </section>
    );
};

export default ExteriorCleaningPage;
