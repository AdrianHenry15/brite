"use client";

import React, { useEffect, useRef } from "react";

import { GiVacuumCleaner, GiWindow } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";

import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";
import MobileImgText from "../../../../components/layout/sections/MobileImgText";

import RoofSplash from "../../../../public/assets/imgs/roof-splash.jpg";
import Gutter from "../../../../public/assets/imgs/gutter.jpg";
import WindowWashing from "../../../../public/assets/imgs/window-washing.jpg";
import PressureWashing from "../../../../public/assets/imgs/pressure-washing.jpg";
import Roof from "../../../../public/assets/imgs/roof.jpg";

const ExteriorCleaning = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Adjust the threshold as needed (percentage of element visibility)
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textRef.current?.classList.add("show");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);
    return (
        <div className="w-full justify-center items-center self-center">
            <ImgTextOverlay imgClass="object-bottom" src={RoofSplash} name="Exterior Cleaning" />
            <IconBanner
                link1="/estimate"
                icon1={<GiVacuumCleaner size={50} />}
                title1={"Pressure Washing"}
                description1={
                    "Enhance your property's appearance with our thorough pressure washing services. We effectively remove dirt, grime, and stains, revitalizing surfaces for a refreshed and inviting look"
                }
                link2="/estimate"
                icon2={<GiWindow size={50} />}
                title2={"Window Washing"}
                description2={
                    "Illuminate your space with Brite windows, our expert window washing services bring a clear and sparkling sine to brighten up your home or business"
                }
                link3="/estimate"
                icon3={<MdOutlineRoofing size={50} />}
                title3={"Roof Cleaning"}
                description3={
                    "A spotless roof is the crowning glory of a Brite property, reach new heights of cleanliness with Brite's roof cleaning service"
                }
            />
            {/* EXTERIOR CLEANING SERVICES */}
            <h5 ref={textRef} className="fade-in text-black text-center text-2xl underline">
                Our Exterior Cleaning Services
            </h5>
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={WindowWashing}
                    link={"/estimate"}
                    title={"Window Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={PressureWashing}
                    link={"/estimate"}
                    title={"Pressure Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Gutter Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={Roof}
                    link={"/estimate"}
                    title={"Roof Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                {/* MOBILE */}
                <MobileImgText
                    textLeft={true}
                    src={WindowWashing}
                    link={"/estimate"}
                    title={"Window Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={false}
                    src={PressureWashing}
                    link={"/estimate"}
                    title={"Pressure Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={true}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Gutter Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={true}
                    src={Roof}
                    link={"/estimate"}
                    title={"Roof Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
            </div>
        </div>
    );
};

export default ExteriorCleaning;
