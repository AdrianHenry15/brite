import React from "react";
import { Metadata } from "next";

import { GiWindow } from "react-icons/gi";
import { IoWater, IoWaterOutline } from "react-icons/io5";

import IconBanner from "../../../../components/icon-banner/IconBanner";

import PressureWashing from "../../../../public/assets/imgs/ex-cleaning.png";
import ComponentSplash from "../../../../components/ComponentSplash";
import { NavMenuItems } from "../../../../lib/constants";

export const metadata: Metadata = {
    title: "Brite's Exterior Cleaning",
    description: "Exterior Cleaning At Brite",
};

const ExteriorCleaningPage = () => {
    return (
        <section className="w-full justify-center items-center self-center">
            <ComponentSplash center title={NavMenuItems.EXTERIOR_CLEANING} img={PressureWashing} />
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
        </section>
    );
};

export default ExteriorCleaningPage;
