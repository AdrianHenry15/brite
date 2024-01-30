import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/assets/icons/brite-logo.png";

interface ISplashProps {
    title: string;
    img: any;
    top?: boolean;
    center?: boolean;
    bottom?: boolean;
}

const Splash = (props: ISplashProps) => {
    const getObjectPosition = () => {
        if (props.top) {
            return "object-top";
        } else if (props.center) {
            return "object-center";
        } else if (props.bottom) {
            return "object-bottom";
        } else {
            return "object-center";
        }
    };
    return (
        <div className="w-[100%] h-screen self-center text-white">
            <div className="w-full h-full">
                {/* SHADOW */}
                <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        loading="eager"
                        className={`${getObjectPosition()} h-full w-full object-cover`}
                        src={props.img}
                        alt={props.title}
                    />
                </div>
                <div className="absolute w-full p-4 top-[38%]">
                    <div className="flex flex-col relative w-min items-center">
                        <Link className="flex" href={"/"}>
                            <Image src={Logo} alt="logo" className="w-48" />
                        </Link>
                        {/* <h1 className="text-white w-full text-3xl text-center lg:text-5xl lg:w-[700px] whitespace-nowrap">
                            {props.title}
                        </h1> */}
                        <div className="my-4 flex items-center w-auto">
                            <Link
                                href={"/contact-us"}
                                className="border bg-gray-300 text-black text-sm border-gray-300 py-2 px-5 my-2 whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href={"/estimate"}
                                className="border  text-white text-sm border-gray-300 py-2 px-5 ml-4 whitespace-nowrap"
                            >
                                Get Estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splash;
