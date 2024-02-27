"use client";

import React from "react";

import { GiWindow } from "react-icons/gi";

import IconBanner from "../../../../components/icon-banner/IconBanner";

import PressureWashing from "../../../../public/assets/imgs/ex-cleaning.png";
import Splash from "../../../../components/Splash";
import { AltNavMenuLinks, NavMenuItems } from "../../../../lib/constants";
import { IoWater, IoWaterOutline } from "react-icons/io5";

const ExteriorCleaningPage = () => {
    return (
        <div className="w-full justify-center items-center self-center">
            <Splash center title={NavMenuItems.EXTERIOR_CLEANING} img={PressureWashing} />
            {/* ICON BANNER */}
            <IconBanner
                link1={AltNavMenuLinks.ESTIMATE}
                icon1={<GiWindow size={50} />}
                title1={"Window Cleaning"}
                description1={
                    "Illuminate your space with Brite windows. Our expert window washing services bring a clear and sparkling finish to your home or business."
                }
                link2={AltNavMenuLinks.ESTIMATE}
                icon2={<IoWater size={50} />}
                title2={"Pressure Washing"}
                description2={
                    "Say goodbye to stubborn dirt, grime, and mildew as we restore the beauty of your siding, driveway, patio, and more."
                }
                link3={AltNavMenuLinks.ESTIMATE}
                icon3={<IoWaterOutline size={50} />}
                title3={"Soft Washing"}
                description3={
                    "From your roof down, Brite’s expert technicians will use the right methods to bring any surface at your home or business back to life."
                }
            />
        </div>
    );
};

export default ExteriorCleaningPage;
