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
        <div className="w-[100%] h-[750px] self-center text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[750px] bg-gradient-to-r from-black"></div>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        loading="eager"
                        className={`${getObjectPosition()} h-full w-full object-cover`}
                        src={props.img}
                        alt={props.title}
                    />
                </div>
                <div className="absolute w-full p-4 top-[36%]">
                    <Link className="flex w-max" href={"/"}>
                        <Image src={Logo} alt="logo" className="w-20 " />
                    </Link>
                    <h1 className="text-white w-full text-3xl sm:w-[60%] lg:text-5xl lg:w-[700px]">
                        {props.title}
                    </h1>
                    <div className="my-4 ">
                        <Link
                            href={"/contact-us"}
                            className="border bg-gray-300 text-black text-sm border-gray-300 py-2 px-5 my-2"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={"/estimate"}
                            className="border  text-white text-sm border-gray-300 py-2 px-5 ml-4"
                        >
                            Get Estimate
                        </Link>
                    </div>
                    {/* <p className="text-gray-400 text-sm">{project?.last_updated}</p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                        {truncateString(project.description!, 150)}
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Splash;
