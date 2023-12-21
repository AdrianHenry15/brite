import React from "react";
import ImgTextLayout from "../../../../components/ImgTextLayout";

import LightingSplash from "../../../../public/assets/imgs/landscape-lighting.jpg";

const LandscapeLighting = () => {
    return (
        <div>
            <ImgTextLayout
                imgClass="object-center"
                src={LightingSplash}
                name="Landscape Lighting"
            />
        </div>
    );
};

export default LandscapeLighting;
