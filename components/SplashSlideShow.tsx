"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles

import Logo from "../public/assets/icons/brite-logo.png";
import AltLogo from "../public/assets/icons/brite-logo-alt.png";
import { HomePageImages } from "../lib/Images";

const SplashSlideShow = () => {
    return (
        <div className="relative w-full text-white md:h-screen">
            {/* SHADOW */}
            <div className="z-10 hidden w-full h-screen bg-gradient-to-r from-black md:flex md:absolute"></div>
            <Swiper
                centeredSlides={true}
                autoplay={{ delay: 3000 }} // Set autoplay delay to 3 seconds
                slidesPerView={1}
                modules={[Autoplay]}
            >
                {HomePageImages.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="w-full h-[200px] flex justify-center items-center md:h-screen">
                            <Image
                                loading="eager"
                                className="h-full w-full object-cover"
                                src={item.img}
                                alt={item.title}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="z-10 w-full p-4 top-[38%] md:absolute">
                <div className="flex flex-col relative w-min items-center">
                    {/* ON MEDIUM/LARGE SCREENS */}
                    <Link className="hidden md:flex" href={"/"}>
                        <Image
                            src={Logo}
                            alt="logo"
                            className="cursor-pointer w-24 md:w-48 rounded-lg"
                        />
                    </Link>
                    {/* ON SMALL SCREENS */}
                    <Link className="flex md:hidden" href={"/"}>
                        <Image
                            src={AltLogo}
                            alt="alt-logo"
                            className="cursor-pointer w-24 md:w-48 rounded-lg"
                        />
                    </Link>
                    <div className="my-4 flex items-center w-auto">
                        <Link
                            href={"/contact-us"}
                            className="border bg-gray-300 text-black text-sm border-gray-300 py-2 px-5 my-2 whitespace-nowrap"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={"/estimate"}
                            className="border text-sm border-gray-300 py-2 px-5 ml-4 whitespace-nowrap text-black md:text-white"
                        >
                            Get Estimate
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashSlideShow;
