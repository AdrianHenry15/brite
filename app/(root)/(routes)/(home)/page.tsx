import React from "react";

import { MdOutlineRoofing } from "react-icons/md";
import { FaIcicles } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ContactForm from "../../../../components/ContactForm";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import GreenMountains from "../../../../public/assets/imgs/green-mountains.jpg";
import Roof from "../../../../public/assets/imgs/roof.jpg";

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
                src={Roof}
                link={"/exterior-cleaning"}
                title={"Exterior Cleaning"}
                description={"Our Exterior Cleaning services are undeniably Brite"}
            />
            <WelcomeMessage />
            <ContactForm />
        </div>
    );
}
