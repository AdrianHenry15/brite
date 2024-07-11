import React from "react";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import HomeSplash from "../../../../components/HomeSplash";

export default async function Home() {
    return (
        <section>
            <HomeSplash />
            <WelcomeMessage />
            <SocialProof />
        </section>
    );
}
