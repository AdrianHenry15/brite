"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles

import Logo from "../public/assets/icons/brite-logo.png";
import { HomePageImages } from "../lib/Images";

const SplashSlideShow = () => {
    return (
        <div className="relative w-full h-screen text-white">
            {/* SHADOW */}
            <div className="z-10 absolute w-full h-screen bg-gradient-to-r from-black"></div>
            <Swiper
                centeredSlides={true}
                autoplay={{ delay: 3000 }} // Set autoplay delay to 3 seconds
                slidesPerView={1}
                modules={[Autoplay]}
            >
                {HomePageImages.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="w-full h-screen flex justify-center items-center">
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

            <div className="z-10 absolute w-full p-4 top-[38%]">
                <div className="flex flex-col relative w-min items-center">
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo" className="w-48 cursor-pointer" />
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
                            className="border text-white text-sm border-gray-300 py-2 px-5 ml-4 whitespace-nowrap"
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
