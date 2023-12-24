"use client";

import React, { useEffect, useRef } from "react";

import { FaRegLightbulb } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdHighlight } from "react-icons/md";

import ImgTextLayout from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";
import MobileImgText from "../../../../components/layout/sections/MobileImgText";

import LightingSplash from "../../../../public/assets/imgs/landscape-lighting.jpg";
import AccentLighting from "../../../../public/assets/imgs/accent-lighting.jpg";
import PathLighting from "../../../../public/assets/imgs/path-lighting.jpg";
import UpLighting from "../../../../public/assets/imgs/up-lighting.jpg";

const LandscapeLighting = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.1, // Adjust the threshold as needed (percentage of element visibility)
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textRef.current?.classList.add("show");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);
    return (
        <div>
            <ImgTextLayout
                imgClass="object-center"
                src={LightingSplash}
                name="Landscape Lighting"
            />
            <IconBanner
                icon1={<FaRegLightbulb size={50} />}
                title1={"Accent Lighting"}
                description1={
                    "Accent Lighting is used to highlight specific features of your landscape, such as trees, sculptures, or architectural elements. It adds a touch of drama and draws attention to focal points"
                }
                icon2={<CiLight size={50} />}
                title2={"Path Lighting"}
                description2={
                    "Path lighting is designed to illuminate walkways, driveways, and garden paths, providing both safety and aesthetics. It guides the way for pedestrians while enhancing the overall beauty of the landscape"
                }
                icon3={<MdHighlight size={50} />}
                title3={"Up Lighting"}
                description3={
                    "Up lighting involves positioning fixtures at ground level to cast light upward, emphasizing tall structures like trees or the facade of a building. This technique creates a visually striking and dynamic effect, adding depth to the landscape"
                }
            />
            {/* LANDSCAPE LIGHTING SERVICES */}
            <h5 ref={textRef} className="fade-in text-black text-center text-2xl underline">
                Our Landscape Lighting Services
            </h5>
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={AccentLighting}
                    link={"/estimate"}
                    title={"Accent Lighting"}
                    description={
                        "Accent lighting is a type of lighting design that focuses on highlighting specific objects, areas, or architectural features within a space. The purpose of accent lighting is to draw attention to particular elements, creating visual interest and enhancing the overall atmosphere."
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={PathLighting}
                    link={"/estimate"}
                    title={"Path Lighting"}
                    description={
                        "Path lighting refers to the use of strategically placed light fixtures to illuminate walkways, pathways, or outdoor trails. The primary purpose of path lighting is to enhance safety by providing visibility along routes, guide people through outdoor spaces, and add aesthetic appeal to landscapes during the nighttime."
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={UpLighting}
                    link={"/estimate"}
                    title={"Up Lighting"}
                    description={
                        "Uplighting is a lighting technique in which light fixtures are strategically positioned on or near the ground to illuminate architectural features, trees, plants, or other elements from the bottom upward. This method creates a visually appealing effect by casting light on surfaces, emphasizing textures, and adding depth to the environment."
                    }
                />
                {/* MOBILE */}
                <MobileImgText
                    textLeft={true}
                    src={AccentLighting}
                    link={"/estimate"}
                    title={"Accent Lighting"}
                    description={
                        "Accent lighting is a type of lighting design that focuses on highlighting specific objects, areas, or architectural features within a space. The purpose of accent lighting is to draw attention to particular elements, creating visual interest and enhancing the overall atmosphere."
                    }
                />
                <MobileImgText
                    textLeft={false}
                    src={PathLighting}
                    link={"/estimate"}
                    title={"Path Lighting"}
                    description={
                        "Path lighting refers to the use of strategically placed light fixtures to illuminate walkways, pathways, or outdoor trails. The primary purpose of path lighting is to enhance safety by providing visibility along routes, guide people through outdoor spaces, and add aesthetic appeal to landscapes during the nighttime."
                    }
                />
                <MobileImgText
                    textLeft={true}
                    src={UpLighting}
                    link={"/estimate"}
                    title={"Up Lighting"}
                    description={
                        "Uplighting is a lighting technique in which light fixtures are strategically positioned on or near the ground to illuminate architectural features, trees, plants, or other elements from the bottom upward. This method creates a visually appealing effect by casting light on surfaces, emphasizing textures, and adding depth to the environment."
                    }
                />
            </div>
        </div>
    );
};

export default LandscapeLighting;
