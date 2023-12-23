import React from "react";

import { GiSewingString } from "react-icons/gi";
import { TbDeviceProjector } from "react-icons/tb";
import { FaIcicles } from "react-icons/fa";

import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import ChristmasLightingSplash from "../../../../public/assets/imgs/christmas-lights.jpg";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";
import ContactForm from "../../../../components/ContactForm";

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
            <ContactForm />
        </div>
    );
};

export default ChristmasLighting;
