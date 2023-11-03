"use client";

import React from "react";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Images } from "@/lib/Images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Portfolio = () => {
    return (
        <div className="bg-gray-100">
            <span className="text-4xl font-semibold py-6">Our Work</span>
            {/* <span className="pb-10 text-xs text-gray-400">
                Our focus remains on customer experience. We know the frustrations with outdoor lighting systems that are not designed to
                last. With a commercial-grade line of products, we are able to ensure durable construction, robust circuitry, and protection
                from the elements that last a lifetime, guaranteed. This allows us to install with confidence, knowing we can focus on a
                design that is unique and our homeowners can be proud of.
            </span> */}
            <span className="pb-10 text-sm text-gray-400 flex">Outdoor lighting is frustrating. We can fix that.</span>
            {/* PICTURES  */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                className="flex justify-center lg:w-1/2 md:w-1/2 w-full lg:h-[500px] md:h-[500px] h-[450px] border-2 border-black shadow-md"
            >
                {Images.map((src, index) => {
                    return (
                        <SwiperSlide key={index} className="flex items-center justify-center w-min h-auto">
                            <Image src={src} alt="pic" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Portfolio;
