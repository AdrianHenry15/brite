import React from "react";

import SocialProof from "../../../../components/layout/home/SocialProof";
import HomeSplash from "../../../../components/HomeSplash";
import ButtonRow from "../../../../components/ButtonRow";
import PromoRow from "../../../../components/promotion/promo-row";

export default async function HomePage() {
    return (
        <section>
            <ButtonRow />
            <HomeSplash />
            <PromoRow
                category="Exterior Cleaning"
                title="Revitalize Your Home's Curb Appeal – Spotless Exteriors, Every Time!"
            />
            {/* <WelcomeMessage /> */}
            <SocialProof />
        </section>
    );
}
