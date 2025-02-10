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
