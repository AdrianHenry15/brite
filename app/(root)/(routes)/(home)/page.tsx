import React from "react";

import { MdOutlineRoofing } from "react-icons/md";
import { FaIcicles } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import IconBanner from "../../../../components/icon-banner/IconBanner";

import SplashSlideShow from "../../../../components/SplashSlideShow";

export default async function Home() {
    return (
        <div>
            <SplashSlideShow />
            {/* <Jumbotron /> */}
            <IconBanner
                // ITEM 1 - WINDOW CLEANING
                icon1={<MdOutlineRoofing size={50} />}
                link1="window-cleaning"
                title1={"Window Cleaning"}
                // TODO: NEEDS UPDATING
                description1={
                    "Brite delivers Window Cleaning, Trash Bin Cleaning, Pressure Washing, Soft Washing & more to Charlotte’s homes and businesses. "
                }
                addBtn1
                // ITEM 2 - PRESSURE WASHING
                link2="/pressure-washing"
                icon2={<FaRegLightbulb size={50} />}
                title2={"Pressure Washing"}
                // TODO: NEEDS UPDATING
                description2={
                    "Brite's professionally designed lighting systems are engineered to provide safety, functionality and beauty in your outdoor areas."
                }
                addBtn2
                // ITEM 3 - HOLIDAY LIGHTING
                link3="/holiday-lighting"
                icon3={<FaIcicles size={50} />}
                title3={"Holiday Lighting"}
                // TODO: NEEDS UPDATING
                description3={
                    "Brite provides the design, quality material, installation and storage to bring your winter wonderland to life year after year."
                }
                addBtn3
            />
            <SocialProof />
            <WelcomeMessage />
        </div>
    );
}
