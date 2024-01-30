import React from "react";

import { MdOutlineRoofing } from "react-icons/md";
import { FaIcicles } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import IconBanner from "../../../../components/icon-banner/IconBanner";

import BriteSplash from "../../../../public/assets/imgs/window-washing.png";
import Splash from "../../../../components/Splash";

export default async function Home() {
    return (
        <div>
            <Splash title={""} noShadow img={BriteSplash} />
            {/* <Jumbotron /> */}
            <IconBanner
                // ITEM 1 - EXTERIOR CLEANING
                icon1={<MdOutlineRoofing size={50} />}
                title1={"Exterior Cleaning"}
                description1={
                    "Brite delivers Window Cleaning, Trash Bin Cleaning, Pressure Washing, Soft Washing & more to Charlotte’s homes and businesses. "
                }
                addBtn1
                link1="/exterior-cleaning"
                // ITEM 2 - LANDSCAPE LIGHTING
                icon2={<FaRegLightbulb size={50} />}
                title2={"Landscape Lighting"}
                description2={
                    "Brite's professionally designed lighting systems are engineered to provide safety, functionality and beauty in your outdoor areas."
                }
                addBtn2
                link2="/landscape-lighting"
                // ITEM 3 - CHRISTMAS LIGHTING
                icon3={<FaIcicles size={50} />}
                title3={"Christmas Lighting"}
                description3={
                    "Brite provides the design, quality material, installation and storage to bring your winter wonderland to life year after year."
                }
                addBtn3
                link3="/christmas-lighting"
            />
            <SocialProof />
            <WelcomeMessage />
        </div>
    );
}
