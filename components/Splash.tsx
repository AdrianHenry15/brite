import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/assets/icons/brite-logo.png";
import { AltNavMenuLinks } from "../lib/constants";

interface ISplashProps {
    title: string;
    img: any;
    top?: boolean;
    center?: boolean;
    bottom?: boolean;
    multiple?: boolean;
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
        <div className="w-[100%] self-center text-white md:h-screen">
            <div className="w-full h-full">
                {/* SHADOW */}
                <div className="w-full bg-gradient-to-r from-black absolute h-screen hidden md:flex"></div>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        loading="eager"
                        className={`${getObjectPosition()} h-full w-full object-cover`}
                        src={props.img}
                        alt={props.title}
                    />
                </div>
                <div className="flex w-full p-4 top-[38%] md:absolute">
                    <div className="flex flex-col relative w-full justify-center items-center md:w-min">
                        <Link className="flex justify-start self-center md:self-start" href={"/"}>
                            <Image src={Logo} alt="logo" className="w-24 rounded-lg  md:w-48" />
                        </Link>
                        <div className="my-4 flex items-center w-auto">
                            <Link
                                href={AltNavMenuLinks.CONTACT_US}
                                className="border bg-gray-300 text-black text-sm border-gray-300 py-2 px-5 my-2 whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href={AltNavMenuLinks.ESTIMATE}
                                className="border text-black text-sm border-gray-300 py-2 px-5 ml-4 whitespace-nowrap md:text-white md:bg-black"
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
