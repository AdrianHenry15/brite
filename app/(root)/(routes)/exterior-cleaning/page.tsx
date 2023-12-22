import React from "react";

import ImgTextLayout from "../../../../components/ImgTextLayout";
import RoofSplash from "../../../../public/assets/imgs/roof-splash.jpg";
import IconBanner from "../../../../components/icon-banner/IconBanner";

const ExteriorCleaning = () => {
    return (
        <div>
            <ImgTextLayout imgClass="object-bottom" src={RoofSplash} name="Exterior Cleaning" />
            <IconBanner />
        </div>
    );
};

export default ExteriorCleaning;
