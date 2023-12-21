import Script from "next/script";
import React from "react";

const SocialProof = () => {
    return (
        // TODO: UPGRADE TO BASIC PLAN FOR ELFSIGHT TO TAKE OFF ELFSIGHT BRANDING
        <section className="bg-white w-full flex py-24 px-10 justify-center relative">
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
            ></Script>
            <div
                className="elfsight-app-5569a9cf-9ef8-40cf-a013-e933e23bdd38"
                data-elfsight-app-lazy
            ></div>
        </section>
    );
};

export default SocialProof;
