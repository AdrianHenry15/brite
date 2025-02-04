"use client";

import Image from "next/image";

import React from "react";

import ContactFormOverlay from "./contact-form-section/ContactFormOverlay";
import SplashPic from "../public/assets/imgs/nick-joe-pic.jpg";
import Logo from "../public/assets/icons/brite-logo.png";
import Link from "next/link";

const HomeSplash = () => {
    return (
        <div className="relative w-full text-white h-screen">
            <div className="absolute hidden right-[250px] top-[20%] lg:flex lg:top-[15%] lg:right-[350px] xl:right-[450px]">
                <ContactFormOverlay />
            </div>
            {/* SHADOW */}
            <div className="z-10 w-full h-screen bg-gradient-to-r from-black flex absolute"></div>
            <div className="w-full flex justify-center items-center h-screen relative">
                <Image
                    loading="eager"
                    className="h-full w-full object-cover object-top"
                    src={SplashPic}
                    alt="brite-pic"
                />
                <div className="absolute flex items-start w-full justify-start flex-col pl-4">
                    <Image src={Logo} alt="brite-logo" className="object-cover z-10 w-32" />
                    <h5 className="text-3xl text-white z-10 my-4">Brite Exterior Services</h5>
                    <div className="w-full z-10 flex items-center whitespace-nowrap">
                        <Link
                            href="/contact-us"
                            className="w-[200px] transition-transform ease-in-out hover:scale-105 duration-300 flex mx-1 items-center justify-center text-sm bg-white text-black z-10 rounded-lg py-2"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/estimate"
                            className="w-[200px] transition-transform ease-in-out hover:scale-105 duration-300 mx-1 flex items-center justify-center text-sm bg-blue-500 text-white z-10 rounded-lg py-2"
                        >
                            Get Your Estimate
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;
