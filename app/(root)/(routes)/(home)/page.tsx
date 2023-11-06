"use client";

import React from "react";
import Pic1 from "../../../../public/assets/imgs/green-mountains.jpg";
import Image from "next/image";

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center bg-black">
            <div className="flex w-full justify-between relative">
                <Image className="h-fit w-fit flex items-center justify-center" src={Pic1} alt="pic" />
                <span
                    className="
                    absolute
                            bg-gradient-to-br
                            text-transparent 
                            from-blue-600 
                            to-sky-200 
                            jumbotron-text 
                            bg-clip-text 
                            text-9xl 
                            flex-1 
                            flex 
                            flex-col 
                            m-24
                            w-1/2
                            h-screen
                            font-semibold
                            opacity-75
                            text-right
                            "
                >
                    Radiant Possibilities
                </span>
            </div>
        </div>
    );
};

export default Home;
