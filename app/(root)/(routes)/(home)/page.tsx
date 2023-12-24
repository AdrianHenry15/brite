import React from "react";

import { MdOutlineRoofing } from "react-icons/md";
import { FaIcicles } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";
import MobileImgText from "../../../../components/layout/sections/MobileImgText";

import GreenMountains from "../../../../public/assets/imgs/green-mountains.jpg";
import Water from "../../../../public/assets/imgs/blue-water.jpg";
import AccentLighting from "../../../../public/assets/imgs/accent-lighting.jpg";
import StringLighting from "../../../../public/assets/imgs/string-lighting.jpg";

export default async function Home() {
    return (
        <div>
            <ImgTextOverlay src={GreenMountains} name={"Brite Lighting"} />
            {/* <Jumbotron /> */}
            <IconBanner
                icon1={<MdOutlineRoofing size={50} />}
                title1={"Exterior Cleaning"}
                description1={
                    "Brite's Exterior Cleaning includes: Window Washing, Pressure Wash Cleaning, Gutter Cleaning, and Roof Cleaning"
                }
                addBtn1
                link1="/exterior-cleaning"
                icon2={<FaRegLightbulb size={50} />}
                title2={"Landscape Lighting"}
                description2={
                    "Brite's Landscape lights enhance aesthetics with strategically placed fixtures and energy-efficient illumination"
                }
                addBtn2
                link2="/landscape-lighting"
                icon3={<FaIcicles size={50} />}
                title3={"Christmas Lighting"}
                description3={
                    "Brite's Christmas lights bring festive joy to outdoor spaces with carefully placed and eco-friendly lighting"
                }
                addBtn3
                link3="/christmas-lighting"
            />
            <SocialProof />
            <ImgTextRow
                src={Water}
                textLeft
                link={"/estimate"}
                title={"Pressure Washing"}
                description={
                    "Pressure Washing is a highly effective method of cleaning surfaces using a high-pressure stream of water. This technique is employed to remove dirt, grime, mold, mildew, stains, and other contaminants from a variety of surfaces."
                }
            />
            <ImgTextRow
                src={AccentLighting}
                imgLeft
                link={"/estimate"}
                title={"Accent Lighting"}
                description={
                    "Accent Lighting is a form of illumination designed to highlight specific features or areas within a space. Using strategically placed light fixtures, such as spotlights or wall-mounted fixtures, accent lighting adds emphasis to objects like artwork, architectural details or focal points"
                }
            />
            <ImgTextRow
                src={StringLighting}
                textLeft
                link={"/estimate"}
                title={"String Lighting"}
                description={
                    "String Lighting consists of a series of small, decorative light bulbs connected by a flexible cord or wire, creating a charming and festive illumination. Typically used for outdoor and decorative purposes, string lights are popular for enhancing the ambiance of various spaces"
                }
            />
            <MobileImgText
                src={Water}
                textLeft
                link={"/estimate"}
                title={"Pressure Washing"}
                description={
                    "Pressure Washing is a highly effective method of cleaning surfaces using a high-pressure stream of water. This technique is employed to remove dirt, grime, mold, mildew, stains, and other contaminants from a variety of surfaces."
                }
            />
            <MobileImgText
                src={AccentLighting}
                link={"/estimate"}
                title={"Accent Lighting"}
                description={
                    "Accent Lighting is a form of illumination designed to highlight specific features or areas within a space. Using strategically placed light fixtures, such as spotlights or wall-mounted fixtures, accent lighting adds emphasis to objects like artwork, architectural details or focal points"
                }
            />
            <MobileImgText
                src={StringLighting}
                textLeft
                link={"/estimate"}
                title={"String Lighting"}
                description={
                    "String Lighting consists of a series of small, decorative light bulbs connected by a flexible cord or wire, creating a charming and festive illumination. Typically used for outdoor and decorative purposes, string lights are popular for enhancing the ambiance of various spaces"
                }
            />
            <WelcomeMessage />
        </div>
    );
}
