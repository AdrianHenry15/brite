import React from "react";

import { GiVacuumCleaner, GiWindow } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";

import ImgTextOverlay from "../../../../components/layout/sections/ImgTextOverlay";
import IconBanner from "../../../../components/icon-banner/IconBanner";
import ImgTextRow from "../../../../components/layout/sections/ImgTextRow";

import RoofSplash from "../../../../public/assets/imgs/roof-splash.jpg";
import Gutter from "../../../../public/assets/imgs/gutter.jpg";
import ContactForm from "../../../../components/ContactForm";
import MobileImgTextRow from "../../../../components/layout/sections/MobileImgTextRow";

const ExteriorCleaning = () => {
    return (
        <div className="w-full justify-center items-center self-center">
            <ImgTextOverlay imgClass="object-bottom" src={RoofSplash} name="Exterior Cleaning" />
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
            {/* ROWS */}
            <div>
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Window Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Pressure Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={true}
                    imgLeft={false}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Gutter Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <ImgTextRow
                    textLeft={false}
                    imgLeft={true}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Roof Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                {/* MOBILE */}
                <MobileImgTextRow
                    textLeft={true}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Window Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgTextRow
                    textLeft={false}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Pressure Washing"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgTextRow
                    textLeft={true}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Gutter Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
                <MobileImgTextRow
                    textLeft={true}
                    src={Gutter}
                    link={"/estimate"}
                    title={"Roof Cleaning"}
                    description={
                        "Prevent water damage and maintain the proper functioning your drainage system by removing debris, leaves, and dirt from gutters. Get a Twice A Year Estimate for our Gutter Cleaning services"
                    }
                />
            </div>
            <ContactForm />
        </div>
    );
};

export default ExteriorCleaning;
