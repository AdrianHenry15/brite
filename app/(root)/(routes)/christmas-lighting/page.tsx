import React from "react";

import { GiSewingString } from "react-icons/gi";
import { TbDeviceProjector } from "react-icons/tb";
import { FaIcicles } from "react-icons/fa";

import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import MobileImgText from "../../../../components/layout/sections/MobileImgText";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import ChristmasLightingSplash from "../../../../public/assets/imgs/christmas-lights.jpg";
import CurtainLights from "../../../../public/assets/imgs/curtain-lights.jpg";
import RopeLights from "../../../../public/assets/imgs/rope-lights.jpg";
import ProjectorLights from "../../../../public/assets/imgs/projector-lights.jpg";

const ChristmasLighting = () => {
    return (
        <div>
            <ImgTextOverlay
                imgClass="object-center"
                src={ChristmasLightingSplash}
                name="Christmas Lighting"
            />
            <IconBanner
                icon1={<GiSewingString size={50} />}
                title1={"String Lights"}
                description1={
                    "Versatile and classic, suitable for wrapping around trees, outlining structures, or decorating both indoor and outdoor spaces"
                }
                icon2={<TbDeviceProjector size={50} />}
                title2={"LED Projection Lights"}
                description2={
                    "LED Projection Lights project festive patterns or animations onto surfaces, adding a dynamic and visually engaging element to holiday decorations"
                }
                icon3={<FaIcicles size={50} />}
                title3={"Icicle Lights"}
                description3={
                    "Mimicking the appearance of hanging icicles, these lights are often used to decorate rooflines, eaves, or outdoor structures, creating a charming and whimsicle winter-inspired ambiance"
                }
            />
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={CurtainLights}
                    link={"/estimate"}
                    title={"Curtain Lights"}
                    description={
                        "Curtain lights are a type of decorative Christmas lighting that features strands of lights arranged in a vertical curtain-like pattern. These lights are designed to create a visually appealing backdrop or curtain effect, adding a touch of magic and elegance to various settings."
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={RopeLights}
                    link={"/estimate"}
                    title={"Rope Lights"}
                    description={
                        "Rope lights are a type of decorative lighting consisting of small bulbs encased in a flexible, transparent, or colored tube. This tubing resembles a rope, giving the lights their distinctive appearance."
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={ProjectorLights}
                    link={"/estimate"}
                    title={"Projector Lights"}
                    description={
                        "Projector lights, also known as holiday projector lights or LED projection lights, are lighting devices that use light projection technology to display colorful patterns, images, or animations onto surfaces. These lights are commonly used for holiday decorations, events, and special occasions. "
                    }
                />
                {/* MOBILE */}
                <MobileImgText
                    textLeft={true}
                    src={CurtainLights}
                    link={"/estimate"}
                    title={"Curtain Lights"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={false}
                    src={RopeLights}
                    link={"/estimate"}
                    title={"Rope Lights"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgText
                    textLeft={true}
                    src={ProjectorLights}
                    link={"/estimate"}
                    title={"Projector Lights"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
            </div>
        </div>
    );
};

export default ChristmasLighting;
