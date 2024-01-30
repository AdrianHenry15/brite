"use client";

import React from "react";

import { GiWindow } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import IconBanner from "../../../../components/icon-banner/IconBanner";

import ExCleaning from "../../../../public/assets/imgs/ex-cleaning.png";
import Splash from "../../../../components/Splash";

const ExteriorCleaning = () => {
    return (
        <div className="w-full justify-center items-center self-center">
            {/* <ImgTextOverlay imgClass="object-bottom" src={RoofSplash} name="Exterior Cleaning" /> */}
            <Splash center title="Exterior Cleaning" img={ExCleaning} />
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
        </div>
    );
};

export default ExteriorCleaning;
