import React from "react";

import { GiVacuumCleaner, GiWindow } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";

import ImgTextLayout from "../../../../components/ImgTextLayout";
import RoofSplash from "../../../../public/assets/imgs/roof-splash.jpg";
import IconBanner from "../../../../components/icon-banner/IconBanner";

const ExteriorCleaning = () => {
    return (
        <div>
            <ImgTextLayout imgClass="object-bottom" src={RoofSplash} name="Exterior Cleaning" />
            <IconBanner
                icon1={<GiVacuumCleaner size={50} />}
                title1={"Pressure Washing"}
                description1={
                    "Enhance your property's appearance with our thorough pressure washing services. We effectively remove dirt, grime, and stains, revitalizing surfaces for a refreshed and inviting look"
                }
                icon2={<GiWindow size={50} />}
                title2={"Window Washing"}
                description2={
                    "Illuminate your space with Brite windows, our expert window washing services bring a clear and sparkling sine to brighten up your home or business"
                }
                icon3={<MdOutlineRoofing size={50} />}
                title3={"Roof Cleaning"}
                description3={
                    "A spotless roof is the crowning glory of a Brite property, reach new heights of cleanliness with Brite's roof cleaning service"
                }
            />
        </div>
    );
};

export default ExteriorCleaning;
