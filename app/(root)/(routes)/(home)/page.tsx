import React from "react";

import WelcomeMessage from "../../../../components/layout/home/WelcomeMessage";
import SocialProof from "../../../../components/layout/home/SocialProof";
import SplashSlideShow from "../../../../components/SplashSlideShow";

export default async function Home() {
    return (
        <section>
            <SplashSlideShow />
            <WelcomeMessage />
            <SocialProof />
        </section>
    );
}
