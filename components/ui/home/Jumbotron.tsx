import React from "react";

import Card from "../cards/Card";

import { GiVacuumCleaner, GiPineTree } from "react-icons/gi";
import { FcLandscape } from "react-icons/fc";

import Roof from "../../../public/assets/imgs/roof.jpg";
import LandscapeLights from "../../../public/assets/imgs/brite-pic-7.jpg";
import xmasLights from "../../../public/assets/imgs/brite-pic-3.jpg";
import GreenMountains from "../../../public/assets/imgs/green-mountains.jpg";
import MobileCard from "../cards/MobileCard";
import Image from "next/image";

const Jumbotron = () => {
    return (
        <div className="relative flex w-full">
            <Image
                className="object-cover object-top w-full h-[80vh] md:h-[80vh] lg:h-[75vh] opacity-75"
                src={GreenMountains}
                alt="Your Image Alt Text"
            />

            {/* Text overlay */}
            <div
                className={`absolute w-full flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-around flex-col items-center lg:flex-row`}
            >
                {/* ON MEDIUM TO LARGE SCREENS */}
                <Card
                    link={""}
                    title={"Exterior Cleaning"}
                    img={Roof}
                    description={
                        "Brite's Exterior Cleaning includes: Window Washing, Pressure Wash Cleaning, Gutter Cleaning, and Roof Cleaning"
                    }
                />
                <Card
                    link={""}
                    title={"Landscape Lighting"}
                    img={LandscapeLights}
                    description={
                        "Brite's Landscape lights enhance aesthetics with strategically placed fixtures and energy-efficient illumination"
                    }
                />
                <Card
                    link={""}
                    title={"Christmas Lighting"}
                    img={xmasLights}
                    description={
                        "Brite's Christmas lights bring festive joy to outdoor spaces with carefully placed and eco-friendly lighting"
                    }
                />
                {/* MOBILE CARDS */}
                <div className="flex flex-col w-full md:hidden">
                    <MobileCard link="/exterior-cleaning" title="Exterior Cleaning">
                        <GiVacuumCleaner className="text-white" size={30} />
                    </MobileCard>
                    {/* MOBILE CARDS */}
                    <MobileCard link="/landscape-lighting" title="Landscape Lighting">
                        <FcLandscape size={30} />
                    </MobileCard>
                    {/* MOBILE CARDS */}
                    <MobileCard link="/christmas-lighting" title="Christmas Lighting">
                        <GiPineTree className="text-white" size={30} />
                    </MobileCard>
                </div>
            </div>
        </div>
        // </div>
        // <div className="flex flex-col w-full items-center justify-center relative bg-cover bg-[url('/assets/imgs/green-mountains.jpg')] h-80 bg-opacity-70 md:h-[80vh] lg:h-[75vh] lg:flex-row">
        //     {/* ON MEDIUM TO LARGE SCREENS */}
        //     <Card
        //         link={""}
        //         title={"Exterior Cleaning"}
        //         img={Roof}
        //         description={
        //             "Brite's Exterior Cleaning includes: Window Washing, Pressure Wash Cleaning, Gutter Cleaning, and Roof Cleaning"
        //         }
        //     />
        //     <Card
        //         link={""}
        //         title={"Landscape Lighting"}
        //         img={LandscapeLights}
        //         description={
        //             "Brite's Landscape lights enhance aesthetics with strategically placed fixtures and energy-efficient illumination"
        //         }
        //     />
        //     <Card
        //         link={""}
        //         title={"Christmas Lighting"}
        //         img={xmasLights}
        //         description={
        //             "Brite's Christmas lights bring festive joy to outdoor spaces with carefully placed and eco-friendly lighting"
        //         }
        //     />
        //     {/* MOBILE CARDS */}
        //     <MobileCard link="/exterior-cleaning" title="Exterior Cleaning">
        //         <GiVacuumCleaner className="text-white" size={30} />
        //     </MobileCard>
        //     {/* MOBILE CARDS */}
        //     <MobileCard link="/landscape-lighting" title="Landscape Lighting">
        //         <FcLandscape size={30} />
        //     </MobileCard>
        //     {/* MOBILE CARDS */}
        //     <MobileCard link="/christmas-lighting" title="Christmas Lighting">
        //         <GiPineTree className="text-white" size={30} />
        //     </MobileCard>
        // </div>
    );
};

export default Jumbotron;
