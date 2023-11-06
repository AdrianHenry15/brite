"use client";

import React from "react";
import Pic1 from "../../../../public/assets/imgs/green-mountains.jpg";
import Image from "next/image";

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center bg-black">
            <div className="flex w-full justify- relative">
                <Image className="h-fit w-fit flex items-center justify-center" src={Pic1} alt="pic" />
            </div>
        </div>
    );
};

export default Home;
