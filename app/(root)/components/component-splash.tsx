import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/public/assets/icons/brite-logo.png";

interface ISplashProps {
    title: string;
    img: any;
    top?: boolean;
    center?: boolean;
    bottom?: boolean;
    multiple?: boolean;
}

const ComponentSplash = (props: ISplashProps) => {
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
        <div className="w-[100%] self-center text-white h-screen">
            <div className="w-full h-full">
                {/* SHADOW */}
                <div className="w-full bg-gradient-to-r from-black absolute h-screen flex"></div>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        loading="eager"
                        className={`${getObjectPosition()} h-full w-full object-cover`}
                        src={props.img}
                        alt={props.title}
                    />
                </div>
                <div className="flex w-full p-4 top-[50%] absolute md:top-[38%]">
                    <div className="flex flex-col relative w-full justify-center items-center md:w-min">
                        {/* LOGO */}
                        <Link className="justify-start self-start flex" href={"/"}>
                            <Image src={Logo} alt="logo" className="w-24 rounded-lg  md:w-48" />
                        </Link>
                        {/* TITLE */}
                        <h5 className="items-center w-full py-2 justify-start text-3xl whitespace-nowrap flex md:text-7xl">
                            {props.title}
                        </h5>
                        {/* BUTTONS */}
                        <div className="flex self-start items-center w-auto">
                            <Link
                                href={"/contact-us"}
                                className="border bg-gray-300 text-black text-sm border-gray-300 py-2 px-5 my-2 whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href={"/estimate"}
                                className="border text-sm border-gray-300 py-2 px-5 ml-4 whitespace-nowrap text-white bg-black"
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

export default ComponentSplash;
