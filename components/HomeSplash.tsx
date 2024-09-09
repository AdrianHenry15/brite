"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/assets/icons/brite-logo.png";
import AltLogo from "../public/assets/icons/brite-logo-alt.png";
import ContactFormOverlay from "./contact-form-section/ContactFormOverlay";
import SplashPic from "../public/assets/imgs/nick-joe-pic.jpg";
import { NavMenuItems, NavMenuLinks } from "../lib/constants";
import SplashBtn from "./SplashBtn";
import { Md1XMobiledata, MdBreakfastDining } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { CiRuler } from "react-icons/ci";

const HomeSplash = () => {
    return (
        <div className="relative w-full text-white lg:h-screen">
            <div className="absolute hidden right-[250px] top-[20%] lg:flex lg:top-[15%] lg:right-[350px] xl:right-[450px]">
                <ContactFormOverlay />
            </div>
            {/* SHADOW */}
            <div className="z-10 hidden w-full h-screen bg-gradient-to-r from-black lg:flex lg:absolute"></div>
            <div className="w-full h-[300px] flex justify-center items-center md:h-[400px] lg:h-screen">
                <Image
                    loading="eager"
                    className="h-full w-full object-cover object-top"
                    src={SplashPic}
                    alt="brite-pic"
                />
            </div>

            <div className="z-10 w-full p-4 top-[32%] justify-center lg:top-[10%] lg:absolute">
                <div className="flex flex-col relative w-full items-center lg:w-[400px]">
                    {/* ON MEDIUM/LARGE SCREENS */}
                    {/* <Link className="hidden lg:flex" href={"/"}>
                        <Image
                            src={Logo}
                            alt="logo"
                            className="cursor-pointer w-24 lg:w-48 rounded-lg"
                        />
                    </Link> */}
                    {/* ON SMALL SCREENS */}
                    {/* <Link className="flex lg:hidden" href={"/"}>
                        <Image
                            src={AltLogo}
                            alt="alt-logo"
                            className="cursor-pointer w-24 lg:w-48 rounded-lg"
                        />
                    </Link> */}
                    {/* <div className="flex flex-col items-center w-full lg:ml-0 xl:ml-[400px]">
                        <SplashBtn
                            link={NavMenuLinks.EXTERIOR_CLEANING}
                            title={NavMenuItems.EXTERIOR_CLEANING}
                            // icon={<IoWater className="w-14 h-full flex lg:w-20" />}
                        />
                        <SplashBtn
                            link={NavMenuLinks.HOLIDAY_LIGHTING}
                            title={NavMenuItems.HOLIDAY_LIGHTING}
                            // icon={<CiRuler className="w-14 h-full flex lg:w-20" />}
                        />
                        <SplashBtn
                            link={NavMenuLinks.COMMERCIAL_SERVICES}
                            title={NavMenuItems.COMMERCIAL_SERVICES}
                            // icon={<Md1XMobiledata className="w-14 h-full flex lg:w-20" />}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;
