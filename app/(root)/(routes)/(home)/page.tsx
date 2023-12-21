import React from "react";

import Jumbotron from "../../../../components/ui/home/Jumbotron";
import WelcomeMessage from "../../../../components/ui/home/WelcomeMessage";
import SocialProof from "../../../../components/ui/home/SocialProof";

export default async function Home() {
    return (
        <div>
            <Jumbotron />
            <SocialProof />
            <WelcomeMessage />
        </div>
    );
}
