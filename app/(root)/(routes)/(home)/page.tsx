import React from "react";

import Jumbotron from "../../../../components/home/Jumbotron";
import WelcomeMessage from "../../../../components/home/WelcomeMessage";
import SocialProof from "../../../../components/home/SocialProof";

export default async function Home() {
    return (
        <div>
            <Jumbotron />
            <SocialProof />
            <WelcomeMessage />
        </div>
    );
}
