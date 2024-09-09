import React from "react";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import HomeSplash from "../../../../components/HomeSplash";
import ButtonRow from "../../../../components/ButtonRow";

export default async function HomePage() {
    return (
        <section>
            <ButtonRow />
            <HomeSplash />
            {/* <WelcomeMessage /> */}
            <SocialProof />
        </section>
    );
}
