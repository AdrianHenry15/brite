import React from "react";

import ButtonRow from "./components/button-row";
import SocialProof from "./components/social-proof";
import ProductRow from "../../components/products/product-row";
import { Metadata } from "next";
import ContactFormOverlay from "../../components/forms/overlay";
import SplashPic from "@/public/assets/imgs/action-2.jpg";
import Splash from "../../components/splash";

export const metadata: Metadata = {
    title: "Brite Exterior Cleaning Services | Clean Your Property with Experts",
    description:
        "Brite offers professional exterior cleaning services to make your home or business shine. Explore our services and get a free estimate today.",
    openGraph: {
        title: "Brite Exterior Cleaning Services",
        description:
            "Brite offers professional exterior cleaning services to make your home or business shine.",
        url: "https://briteclt.com",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning Services",
        description:
            "Brite offers professional exterior cleaning services to make your home or business shine.",
    },
};

export default async function HomePage() {
    return (
        <section>
            <ButtonRow />
            <div className="relative flex w-full flex-col">
                <Splash
                    img={SplashPic}
                    title="Brite Exterior Services"
                    description="Your home deserves the best—Brite 
                    provides elite maintenance services that keep your 
                    space pristine, efficient, and worry-free. 
                    From luxury estates to modern residences, 
                    we handle every detail with precision and care. 
                    Experience effortless homeownership with Brite. ✨🏡"
                />
                <div className="flex justify-center w-full">
                    <div className="absolute h-[1000px] w-full bg-gradient-to-b from-black via-blue-500 to-white"></div>
                    {/* Logo */}
                    {/* <div className="absolute z-10 top-[1300px] left-32 hidden xl:flex">
                        <Image src={Logo} alt="brite-logo" className="w-48" />
                    </div> */}
                    <div className="absolute flex items-center justify-center top-[700px] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[45%]">
                        <ContactFormOverlay />
                    </div>
                    {/* Logo */}
                    {/* <div className="absolute z-10 top-[1300px] right-32 hidden xl:flex">
                        <Image src={Logo} alt="brite-logo" className="w-48" />
                    </div> */}
                </div>
            </div>
            <div className="pt-[1000px]">
                <SocialProof />
            </div>
            <ProductRow
                category="Exterior Cleaning"
                title="Transform Your Estate’s Curb Appeal – Premium Exterior Cleaning for the Finest Homes!"
            />
            <ProductRow
                category="Holiday Lighting"
                title="Illuminate Your Luxury Home – Exquisite Holiday Lighting for a Spectacular Display!"
            />
            <ProductRow
                className="pb-24"
                category="Commercial Services"
                title="Enhance Your Business’s Image – Professional Commercial Exterior Cleaning & Holiday Lighting Services!"
            />
            {/* <WelcomeMessage /> */}
        </section>
    );
}
