import React from "react";

import { FaRegLightbulb } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdHighlight } from "react-icons/md";

import ImgTextLayout from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";
import MobileImgText from "../../../../components/layout/sections/MobileImgText";

import LightingSplash from "../../../../public/assets/imgs/landscape-lighting.jpg";
import AccentLighting from "../../../../public/assets/imgs/brite-pic-8.jpg";
import PathLighting from "../../../../public/assets/imgs/brite-pic-7.jpg";
import UpLighting from "../../../../public/assets/imgs/brite-pic-10.jpg";

const LandscapeLighting = () => {
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
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={AccentLighting}
                    link={"/estimate"}
                    title={"Accent Lighting"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={PathLighting}
                    link={"/estimate"}
                    title={"Path Lighting"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={UpLighting}
                    link={"/estimate"}
                    title={"Up Lighting"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                {/* MOBILE */}
                <MobileImgText
                    textLeft={true}
                    src={AccentLighting}
                    link={"/estimate"}
                    title={"Accent Lighting"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={false}
                    src={PathLighting}
                    link={"/estimate"}
                    title={"Path Lighting"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={true}
                    src={UpLighting}
                    link={"/estimate"}
                    title={"Up Lighting"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
            </div>
        </div>
    );
};

export default LandscapeLighting;
