"use client";

import React from "react";
import Pic1 from "../../../../public/assets/imgs/brite-pic-6.jpg";
import Pic2 from "../../../../public/assets/imgs/brite-pic-9.jpg";
import ImgContainer from "../../../../components/ImgContainer";
import Image from "next/image";
import EstimateModal from "../../../../components/EstimateModal";

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center bg-black">
            <div className="flex w-full justify-center">
                <Image className="h-screen lg:w-1/3 md:w-2/3 flex items-center justify-center" src={Pic1} alt="pic" />
            </div>
        </div>
    );
};

export default Home;
