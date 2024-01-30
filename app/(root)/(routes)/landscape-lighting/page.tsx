"use client";

import React from "react";

import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaPencilAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";

import IconBanner from "../../../../components/icon-banner/IconBanner";

import LandLights from "../../../../public/assets/imgs/main-land-lighting.png";
import Splash from "../../../../components/Splash";

const LandscapeLighting = () => {
    return (
        <div>
            <Splash title="Landscape Lighting" img={LandLights} />
            <IconBanner
                icon1={<FaPencilAlt size={50} />}
                title1={"Design"}
                description1={
                    "Brite’s low-voltage lighting team will curate a design to professionally illuminate your landscapes and hardscapes. Our designs prioritize beauty and safety."
                }
                icon2={<HiOutlineLightBulb size={50} />}
                title2={"Install"}
                description2={
                    "Brite will only use quality products installed by technicians trained to safely install a variety of low voltage systems."
                }
                icon3={<FaWrench size={50} />}
                title3={"Maintain"}
                description3={
                    "Lifetime service and maintenance. We use material designed to last and partner with manufacturers who stand behind the products they deliver."
                }
            />
        </div>
    );
};

export default LandscapeLighting;
