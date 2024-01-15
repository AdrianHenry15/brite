import React from "react";

import { MdOutlineRoofing } from "react-icons/md";
import { FaIcicles } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import BriteSplash from "../../../../public/assets/imgs/brite-splash.webp";
import CustomerCentric from "../../../../public/assets/imgs/customer-centric.jpg";
import Workmanship from "../../../../public/assets/imgs/workmanship.jpg";
import Community from "../../../../public/assets/imgs/community.jpg";

export default async function Home() {
    return (
        <div>
            <ImgTextOverlay
                src={BriteSplash}
                name={"The Last Exterior Cleaning Company You Will Call"}
            />
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
            {/* IMAGE TEXT ROWS */}
            {/* <ImgTextRow
                imgLeft
                src={CustomerCentric}
                imgTopOnMobile
                link={"/estimate"}
                title={"Customer Centric"}
                description={
                    "We are committed to providing the best customer service experience in the industry. We are not satisfied until you are satisfied."
                }
            />
            <ImgTextRow
                src={Workmanship}
                textLeft
                link={"/estimate"}
                title={"Quality Workmanship"}
                description={
                    "Exemplifying unparalleled skill and precision, our workmanship is a testament to quality, ensuring every project is crafted with expertise and dedication for lasting excellence."
                }
            />
            <ImgTextRow
                src={Community}
                imgLeft
                imgTopOnMobile
                link={"/estimate"}
                title={"Community First"}
                description={
                    "We prioritize community well-being, fostering connections and contributing meaningfully to create a positive impact, putting the community at the heart of everything we do."
                }
            /> */}
            <WelcomeMessage />
        </div>
    );
}
