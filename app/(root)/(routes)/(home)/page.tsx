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
                // TODO: NEEDS UPDATING
                description1={
                    "Brite specializes in professional window washing services for both residential and commercial properties in Charlotte."
                }
                addBtn1
                // ITEM 2 - PRESSURE WASHING
                link2="/exterior/cleaning"
                icon2={<IoWaterOutline size={50} />}
                title2={"Pressure Washing"}
                // TODO: NEEDS UPDATING
                description2={
                    "Brite's pressure washing services are expertly crafted to deliver exceptional cleanliness and revitalization to your outdoor surfaces."
                }
                addBtn2
                // ITEM 3 - HOLIDAY LIGHTING
                link3="/holiday-lighting"
                icon3={<TbChristmasTree size={50} />}
                title3={"Holiday Lighting"}
                // TODO: NEEDS UPDATING
                description3={
                    "Brite offers comprehensive holiday lighting solutions, including design, high-quality materials, installation, and storage, to illuminate your festive celebrations year after year."
                }
                addBtn3
            />
            <WelcomeMessage />
            <SocialProof />
        </div>
    );
}
