import React from "react";

import ImgTextLayout from "../../../../components/ImgTextLayout";
import ChristmasLightingSplash from "../../../../public/assets/imgs/christmas-lights.jpg";
import IconBanner from "../../../../components/icon-banner/IconBanner";

const ChristmasLighting = () => {
    return (
        <div>
            <ImgTextLayout
                imgClass="object-center"
                src={ChristmasLightingSplash}
                name="Christmas Lighting"
            />
            <IconBanner />
        </div>
    );
};

export default ChristmasLighting;
