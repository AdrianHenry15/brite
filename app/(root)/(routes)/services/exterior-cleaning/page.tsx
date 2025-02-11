import React from "react";
import { Metadata } from "next";

import { GiWindow } from "react-icons/gi";
import { IoWater, IoWaterOutline } from "react-icons/io5";

import PressureWashing from "@/public/assets/imgs/ex-cleaning.png";
import IconBanner from "@/app/(root)/components/icon-banner";
import ComponentSplash from "@/app/(root)/components/component-splash";
import ProductRow from "@/app/(root)/components/products/product-row";

export const metadata: Metadata = {
    title: "Exterior Cleaning Services | Brite Exterior Cleaning Services",
    description:
        "Brite Exterior Cleaning offers professional exterior cleaning services, including pressure washing, gutter cleaning, and more for homes and businesses in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Exterior Cleaning Services | Brite Exterior Cleaning Services",
        description:
            "Get top-notch exterior cleaning services from Brite Exterior Cleaning, specializing in pressure washing, gutter cleaning, and more for residential and commercial properties in Charlotte, NC.",
        url: "https://briteclt.com/services/exterior-cleaning",
    },
    twitter: {
        card: "summary_large_image",
        title: "Exterior Cleaning Services | Brite Exterior Cleaning Services",
        description:
            "Brite Exterior Cleaning provides expert exterior cleaning services, including pressure washing and gutter cleaning, for homes and businesses in Charlotte, NC.",
    },
};

const ExteriorCleaningPage = () => {
    return (
        <section className="w-full justify-center items-center self-center">
            <ComponentSplash center title={"Exterior Cleaning"} img={PressureWashing} />
            {/* ICON BANNER */}
            <IconBanner
                icon1={<GiWindow size={50} />}
                title1={"Window Cleaning"}
                description1={
                    "Illuminate your space with Brite windows. Our expert window washing services bring a clear and sparkling finish to your home or business."
                }
                icon2={<IoWater size={50} />}
                title2={"Pressure Washing"}
                description2={
                    "Say goodbye to stubborn dirt, grime, and mildew as we restore the beauty of your siding, driveway, patio, and more."
                }
                icon3={<IoWaterOutline size={50} />}
                title3={"Soft Washing"}
                description3={
                    "From your roof down, Brite’s expert technicians will use the right methods to bring any surface at your home or business back to life."
                }
            />
            <ProductRow
                category="Exterior Cleaning"
                title="Revitalize Your Home's Curb Appeal – Spotless Exteriors, Every Time!"
                className="pb-24"
            />
        </section>
    );
};

export default ExteriorCleaningPage;
