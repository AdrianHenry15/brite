import React from "react";

import SocialProof from "../../../../components/layout/home/SocialProof";
import HomeSplash from "../../../../components/HomeSplash";
import ButtonRow from "../../../../components/ButtonRow";
import PromoRow from "../../../../components/products/product-row";
// import PromotionalBanner from "../../../../components/promotional-banner";

export default async function HomePage() {
    return (
        <section>
            <ButtonRow />
            <HomeSplash />
            {/* <PromotionalBanner /> */}
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
