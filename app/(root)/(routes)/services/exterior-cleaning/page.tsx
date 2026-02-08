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
            "Prevent water damage and preserve your home’s foundation with thorough debris removal and downspout flushing.",
    },
    {
        id: "window-cleaning",
        title: "Window Cleaning",
        description:
            "Crystal-clear window detailing that enhances natural light and restores a flawless exterior appearance.",
    },
    {
        id: "pressure-washing",
        title: "Pressure Washing",
        description:
            "High-powered surface cleaning to remove built-up grime from driveways, walkways, and hardscapes.",
    },
    {
        id: "soft-washing",
        title: "Soft Washing",
        description:
            "Low-pressure, eco-safe cleaning ideal for roofs, siding, and delicate surfaces.",
    },
    {
        id: "stain-removal",
        title: "Stain Removal",
        description:
            "Targeted treatment to eliminate rust, organic stains, and discoloration without surface damage.",
    },
];

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
            <Splash
                img={ExteriorCleaningImg}
                title="Exterior Cleaning"
                description="Elevate your property’s curb appeal with expert exterior cleaning. Our specialized pressure washing, window detailing, and soft washing services ensure a flawless, lasting finish for luxury homes and high-end businesses."
            />
            <BlogPromo />

            {/* Exterior Services */}
            <ServicesComponent
                title="Exterior Cleaning Services"
                services={exteriorCleaningServices}
            />
        </section>
    );
};

export default ExteriorCleaningPage;
