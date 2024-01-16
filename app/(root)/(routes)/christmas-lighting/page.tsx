"use client";

import React from "react";

import { GiSewingString } from "react-icons/gi";
import { TbDeviceProjector } from "react-icons/tb";
import { FaIcicles } from "react-icons/fa";

import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import ChristmasLightingSplash from "../../../../public/assets/imgs/christmas-lights.jpg";
import CurtainLights from "../../../../public/assets/imgs/curtain-lights.jpg";
import RopeLights from "../../../../public/assets/imgs/rope-lights.jpg";
import ProjectorLights from "../../../../public/assets/imgs/projector-lights.jpg";

const ChristmasLighting = () => {
    return (
        <div>
            <ImgTextOverlay
                imgClass="object-center"
                src={ChristmasLightingSplash}
                name="Christmas Lighting"
            />
            <IconBanner
                icon1={<GiSewingString size={50} />}
                title1={"Design"}
                description1={
                    "Work with one of our lighting experts to give your home a look you’ll love for the holidays"
                }
                icon2={<TbDeviceProjector size={50} />}
                title2={"Installation, Removal, & Storage"}
                description2={
                    "Never worry about your holiday decor again. We keep your display stored safely  and ready for installation and removal on your schedule."
                }
                icon3={<FaIcicles size={50} />}
                title3={"Fast Service"}
                description3={
                    "Nobody can control mother nature, but we can control how fast we solve the problems she may cause. We solve any service calls within 36 hours of notification."
                }
            />
            {/* LANDSCAPE LIGHTING SERVICES */}
            <h5
                // add 'fade-in' class to fade in on scroll
                className="text-black text-center text-4xl underline"
            >
                Our Christmas Lighting Services
            </h5>
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={CurtainLights}
                    link={"/estimate"}
                    title={"Commercial-Grade Material"}
                    // description={
                    //     "Curtain lights are a type of decorative Christmas lighting that features strands of lights arranged in a vertical curtain-like pattern. These lights are designed to create a visually appealing backdrop or curtain effect, adding a touch of magic and elegance to various settings."
                    // }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={RopeLights}
                    link={"/estimate"}
                    title={"Christmas Displays Custom to Your Home"}
                    // description={
                    //     "Rope lights are a type of decorative lighting consisting of small bulbs encased in a flexible, transparent, or colored tube. This tubing resembles a rope, giving the lights their distinctive appearance."
                    // }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={ProjectorLights}
                    link={"/estimate"}
                    title={"Quality-Trained Technicians"}
                    // description={
                    //     "Projector lights, also known as holiday projector lights or LED projection lights, are lighting devices that use light projection technology to display colorful patterns, images, or animations onto surfaces. These lights are commonly used for holiday decorations, events, and special occasions. "
                    // }
                />
            </div>
        </div>
    );
};

export default ChristmasLighting;
