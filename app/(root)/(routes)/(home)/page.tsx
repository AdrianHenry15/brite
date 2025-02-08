import React from "react";

import ButtonRow from "./components/button-row";
import SocialProof from "./components/social-proof";
import HomeSplash from "./components/home-splash";
import ProductRow from "../../components/products/product-row";

export default async function HomePage() {
    return (
        <section>
            <ButtonRow />
            <HomeSplash />
            {/* <PromotionalBanner /> */}
            <SocialProof />
            <ProductRow
                category="Exterior Cleaning"
                title="Revitalize Your Home's Curb Appeal – Spotless Exteriors, Every Time!"
            />
            <ProductRow
                category="Holiday Lighting"
                title="Lighting Up Your Holidays with Sparkle and Cheer!"
            />
            <ProductRow
                className="pb-24"
                category="Commercial Services"
                title="Your Business, Our Expertise—Excellence Delivered!"
            />
            {/* <WelcomeMessage /> */}
        </section>
    );
}
