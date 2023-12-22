import React from "react";

import ImgTextLayout from "../../../../components/ImgTextLayout";
import LightingSplash from "../../../../public/assets/imgs/landscape-lighting.jpg";
import IconBanner from "../../../../components/icon-banner/IconBanner";

const LandscapeLighting = () => {
    return (
        <div>
            <ImgTextLayout
                imgClass="object-center"
                src={LightingSplash}
                name="Landscape Lighting"
            />
            <IconBanner />
        </div>
    );
};

export default LandscapeLighting;
