"use client";

import React from "react";

import { GiWindow } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import RoofSplash from "../../../../public/assets/imgs/roof-splash.jpg";
import TrashBinCleaning from "../../../../public/assets/imgs/window-washing.jpg";
import WindowWashing from "../../../../public/assets/imgs/window-washing.jpg";
import PressureWashing from "../../../../public/assets/imgs/pressure-washing.jpg";
import Splash from "../../../../components/Splash";

const ExteriorCleaning = () => {
    return (
        <div className="w-full justify-center items-center self-center">
            {/* <ImgTextOverlay imgClass="object-bottom" src={RoofSplash} name="Exterior Cleaning" /> */}
            <Splash center title="Exterior Cleaning" img={RoofSplash} />
            {/* ICON BANNER */}
            <IconBanner
                link1="/estimate"
                icon1={<GiWindow size={50} />}
                title1={"Window Washing"}
                description1={
                    "Illuminate your space with Brite windows. Our expert window washing services bring a clear and sparkling finish to your home or business."
                }
                link2="/estimate"
                icon2={<FaTrash size={50} />}
                title2={"Trash Bin Cleaning"}
                description2={
                    "Never touch a dirty trash can again with routine curbside trash bin cleaning from Brite. Keep your trash cans clean, sanitized and deodorized all year long."
                }
                link3="/estimate"
                icon3={<MdOutlineRoofing size={50} />}
                title3={"Pressure Washing & Soft Washing"}
                description3={
                    "From your roof down, Brite’s expert technicians will use the right methods to bring any surface at your home or business back to life."
                }
            />
            {/* EXTERIOR CLEANING SERVICES */}
            <h5
                // add 'fade-in' class to fade in on scroll
                className="text-black text-center text-4xl underline"
            >
                Our Exterior Cleaning Services
            </h5>
            {/* ROWS */}
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={TrashBinCleaning}
                    link={"/estimate"}
                    title={"Curbside Trash Bin Cleaning"}
                    description={
                        "Our technicians use a combination of degreasers, detergents and hot high-pressure water to ensure you don’t have to deal with dirty, smelly trash bins. "
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={WindowWashing}
                    link={"/estimate"}
                    title={"Window Washing"}
                    description={
                        "Our expert window cleaners will use traditional methods combined with a pure water-fed brush to ensure the every component of your window is left shining Brite. "
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={PressureWashing}
                    link={"/estimate"}
                    title={"Pressure Washing & Soft Washing"}
                    description={
                        "Brite’s variety of professional cleaning equipment allows our expert cleaners to clean any surface the safe way!"
                    }
                />
            </div>
        </div>
    );
};

export default ExteriorCleaning;
