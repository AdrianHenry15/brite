import React from "react";
import ImgTextLayout from "../../../../components/ImgTextLayout";

import ChristmasLightingSplash from "../../../../public/assets/imgs/christmas-lights.jpg";

const ChristmasLighting = () => {
    return (
        <div>
            <ImgTextLayout
                imgClass="object-center"
                src={ChristmasLightingSplash}
                name="Christmas Lighting"
            />
        </div>
    );
};

export default ChristmasLighting;
