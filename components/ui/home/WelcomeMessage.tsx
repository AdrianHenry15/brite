import React from "react";
import PromoCards from "./PromoCards";

import { MdOutlineBrightnessLow } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";

const WelcomeMessage = () => {
    return (
        <div className="flex flex-col w-full items-center relative bg-cover bg-[url('/assets/imgs/brick.jpg')] h-min-content">
            {/* WHITE BG  */}
            <div className="bg-white flex flex-col mx-4 my-24 h-full shadow-xl md:p-20 px-4 py-10">
                {/* TEXT  */}
                <div className="text-center flex flex-col">
                    <span className="font-extrabold md:text-4xl text-2xl mb-4">
                        Your Journey To A Spotless Home Or Business Begins Here.
                    </span>
                    <span>
                        Get peace of mind knowing that all our servces are done right the first time
                        and done with a smile.
                    </span>
                    <span>Start with a FREE, no obligation estimate today!</span>
                </div>
                {/* PROMO CARDS  */}
                <div className="flex flex-col md:flex-row">
                    <PromoCards
                        title="Much More Than Window Washing"
                        description="Pressure Washing, 
                        screen cleaning, 
                        gutter cleaning, 
                        roof washing, 
                        Christmas & holiday light installation and more."
                        link="/residential-services"
                        linkText="View our services..."
                    >
                        <MdOutlineBrightnessLow size={80} />
                    </PromoCards>
                    <PromoCards
                        title="Professional and Friendly Service"
                        description="Our trusted team members always start with a handshake and leave with a smile."
                        link="/about"
                        linkText="Read our promise..."
                    >
                        <LuHeartHandshake size={80} />
                    </PromoCards>
                    <PromoCards
                        title="Highly Satisfied Customers"
                        description="A proven record of happy, 
                        satisfied customers, 
                        with 9 out of 10 of them recommending us to friends."
                        link="/locations"
                        linkText="See our locations..."
                    >
                        <MdOutlineBrightnessLow size={80} />
                    </PromoCards>
                    <PromoCards
                        title="Business With a Purpose"
                        description="Your business is more than a transaction to us. 
                            Our servant-leadership work is fulfilled by our team members during our work with you and far beyond."
                        link="/about"
                        linkText="Learn how we give back..."
                    >
                        <MdOutlineBrightnessLow size={80} />
                    </PromoCards>
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessage;
