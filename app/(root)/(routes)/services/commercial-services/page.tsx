import React from "react";
import { Metadata } from "next";

import { GiWindowBars } from "react-icons/gi";
import { IoWater } from "react-icons/io5";

import IconBanner from "@/components/icon-banner/IconBanner";

import CommercialServicePic from "@/public/assets/imgs/h-b-jn.jpg";
import ComponentSplash from "@/components/ComponentSplash";
import { FaTrashCan } from "react-icons/fa6";
import PromoRow from "@/components/products/product-row";

export const metadata: Metadata = {
    title: "Brite's Commercial Services",
    description: "Commercial Services At Brite",
};

const CommercialServicesPage = () => {
    return (
        <section className="w-full justify-center items-center self-center">
            <ComponentSplash center title="Commercial Services" img={CommercialServicePic} />
            {/* ICON BANNER */}
            <IconBanner
                icon1={<FaTrashCan size={50} />}
                title1={"Dumpster Pad Maintenance"}
                description1={
                    "Our most valued service by our food service clients. Let Brite ensure you never have to worry about fines from hazardous dumpers. With monthly, quarterly or annual cleaning (depending on your business type) you can be sure you'll stay clean and compliant 24/7."
                }
                icon2={<IoWater size={50} />}
                title2={"Pressure Washing & Soft Washing"}
                description2={
                    "Brite Technicians are trained in a variety of cleaning techniques and have the equipment to tackle low and high pressure cleaning jobs. From your roofs, buildings and awnings, to the high traffic areas and oil spills, Brite has the knowledge and expertise to keep your business safe, sanitary and clean all year long."
                }
                icon3={<GiWindowBars size={50} />}
                title3={"Routine Window Cleaning"}
                description3={
                    "Keep your place of work shining Brite consistently! With our pure water cleaning techniques and meticulously trained technicians, we will keep a professional streak-free finish on all your exterior windows, frames and sills."
                }
            />
            <PromoRow
                className="pb-24"
                category="Commercial Services"
                title="Your Business, Our Expertise—Excellence Delivered!"
            />
        </section>
    );
};

export default CommercialServicesPage;
