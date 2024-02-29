import React from "react";

import { GiWindow } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { TbChristmasTree } from "react-icons/tb";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import IconBanner from "../../../../components/icon-banner/IconBanner";

import SplashSlideShow from "../../../../components/SplashSlideShow";

export default async function Home() {
    return (
        <div>
            {/* <Jumbotron /> */}
            <SplashSlideShow />
            <IconBanner
                // ITEM 1 - WINDOW CLEANING
                icon1={<GiWindow size={50} />}
                link1="/exterior-cleaning"
                title1={"Window Cleaning"}
                description1={
                    "Brite's professional window detailing service is Charlotte's first choice for spotless windows year-round"
                }
                addBtn1
                // ITEM 2 - PRESSURE WASHING
                link2="/exterior-cleaning"
                icon2={<IoWaterOutline size={50} />}
                title2={"Pressure Washing"}
                description2={
                    "Brite's professional pressure washing and soft washing services are perfct for maintaining any surface around your home or business."
                }
                addBtn2
                // ITEM 3 - HOLIDAY LIGHTING
                link3="/holiday-lighting"
                icon3={<TbChristmasTree size={50} />}
                title3={"Holiday Lighting"}
                description3={
                    "Brite's holiday light services are here to provide you with the holiday display of your dreams year after year. We take care of the design, installation, removal and storage of your entire display."
                }
                addBtn3
            />
            <WelcomeMessage />
            {/* <SocialProof /> */}
        </div>
    );
}
