import React from "react";

import Jumbotron from "../../../../components/ui/home/Jumbotron";
import WelcomeMessage from "../../../../components/ui/home/WelcomeMessage";
import SocialProof from "../../../../components/ui/SocialProof";

export default async function Home() {
    return (
        <div className="w-full flex flex-col bg-black">
            <Jumbotron />
            <SocialProof />
            <WelcomeMessage />
        </div>
    );
}
