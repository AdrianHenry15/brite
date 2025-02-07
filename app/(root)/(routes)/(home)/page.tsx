import React from "react";

import ButtonRow from "./components/button-row";
import PromoRow from "../../../../components/products/product-row";
import HomeSplash from "./components/home-splash";
import SocialProof from "./components/social-proof";

export default async function HomePage() {
    return (
        <section>
            <ButtonRow />
            <HomeSplash />
            <SocialProof />
            <PromoRow
                category="Exterior Cleaning"
                title="Revitalize Your Home's Curb Appeal – Spotless Exteriors, Every Time!"
            />
            <PromoRow
                category="Holiday Lighting"
                title="Lighting Up Your Holidays with Sparkle and Cheer!"
            />
            <PromoRow
                className="pb-24"
                category="Commercial Services"
                title="Your Business, Our Expertise—Excellence Delivered!"
            />
            {/* <WelcomeMessage /> */}
        </section>
    );
}
