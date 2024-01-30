"use client";

import React from "react";

import { GiRabbit } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { CiRuler } from "react-icons/ci";

import IconBanner from "../../../../components/icon-banner/IconBanner";

import ChristmasLightingSplash from "../../../../public/assets/imgs/christmas-lights.jpg";
import Splash from "../../../../components/Splash";

const ChristmasLighting = () => {
    return (
        <div>
            <Splash title="Christmas Lighting" img={ChristmasLightingSplash} />
            <IconBanner
                icon1={<CiRuler size={50} />}
                title1={"Design"}
                description1={
                    "Work with one of our lighting experts to give your home a look you’ll love for the holidays"
                }
                icon2={<FaWrench size={50} />}
                title2={"Installation, Removal, & Storage"}
                description2={
                    "Never worry about your holiday decor again. We keep your display stored safely  and ready for installation and removal on your schedule."
                }
                icon3={<GiRabbit size={50} />}
                title3={"Fast Service"}
                description3={
                    "Nobody can control mother nature, but we can control how fast we solve the problems she may cause. We solve any service calls within 36 hours of notification."
                }
            />
        </div>
    );
};

export default ChristmasLighting;
