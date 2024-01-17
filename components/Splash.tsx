import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/assets/icons/brite-logo.png";

interface ISplashProps {
    title: string;
    img: any;
}

const Splash = (props: ISplashProps) => {
    return (
        <div className="w-[100%] h-[750px] self-center text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[750px] bg-gradient-to-r from-black"></div>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        loading="eager"
                        className="h-full w-full object-cover"
                        src={props.img}
                        alt={props.title}
                    />
                </div>
                <div className="absolute w-full top-[30%] p-4 md:p-8">
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo" className="w-24" />
                    </Link>
                    <h1 className="text-white text-3x1 w-[70%] md:text-5xl">{props.title}</h1>
                    <div className="my-4">
                        <Link
                            href={"/contact-us"}
                            className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={"/estimate"}
                            className="border  text-white border-gray-300 py-2 px-5 ml-4"
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
