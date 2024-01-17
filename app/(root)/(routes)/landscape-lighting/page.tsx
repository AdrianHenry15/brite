"use client";

import React, { useEffect, useRef } from "react";

import { FaRegLightbulb } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdHighlight } from "react-icons/md";

import ImgTextLayout from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import LightingSplash from "../../../../public/assets/imgs/landscape-lighting.jpg";
import AccentLighting from "../../../../public/assets/imgs/accent-lighting.jpg";
import PathLighting from "../../../../public/assets/imgs/path-lighting.jpg";
import UpLighting from "../../../../public/assets/imgs/up-lighting.jpg";
import Splash from "../../../../components/Splash";

const LandscapeLighting = () => {
    return (
        <div>
            {/* <ImgTextLayout
                imgClass="object-center"
                src={LightingSplash}
                name="Landscape Lighting"
            /> */}
            <Splash title="Landscape Lighting" img={LightingSplash} />
            <IconBanner
                icon1={<FaRegLightbulb size={50} />}
                title1={"Design"}
                description1={
                    "Brite’s low-voltage lighting team will curate a design to professionally illuminate your landscapes and hardscapes. Our designs prioritize beauty and safety."
                }
                icon2={<CiLight size={50} />}
                title2={"Install"}
                description2={
                    "Brite will only use quality products installed by technicians trained to safely install a variety of low voltage systems."
                }
                icon3={<MdHighlight size={50} />}
                title3={"Maintain"}
                description3={
                    "Lifetime service and maintenance. We use material designed to last and partner with manufacturers who stand behind the products they deliver."
                }
            />
            {/* LANDSCAPE LIGHTING SERVICES */}
            <h5
                // add 'fade-in' class to fade in on scroll
                className="text-black text-center text-2xl underline"
            >
                Our Landscape Lighting Services
            </h5>
            {/* ROWS */}
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={AccentLighting}
                    link={"/estimate"}
                    title={"Design"}
                    description={
                        "Brite’s low-voltage lighting team will curate a design to professionally illuminate your landscapes and hardscapes. Our designs prioritize beauty and safety."
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={PathLighting}
                    link={"/estimate"}
                    title={"Install"}
                    description={
                        "Brite will only use quality products installed by technicians trained to safely install a variety of low voltage systems."
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={UpLighting}
                    link={"/estimate"}
                    title={"Maintain"}
                    description={
                        "Lifetime service and maintenance. We use material designed to last and partner with manufacturers who stand behind the products they deliver."
                    }
                />
            </div>
        </div>
    );
};

export default LandscapeLighting;
