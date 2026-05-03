import type { Metadata } from "next";

import SocialProof from "./components/social-proof";
import ProductRow from "../../../../components/products/product-row";
import ContactFormOverlay from "../../../../components/forms/overlay";
import SplashPic from "@/public/assets/imgs/action-2.jpg";
import Splash from "../../../../components/splash";
import ButtonRow from "./components/button-row";

export const metadata: Metadata = {
    title: "Brite Exterior Cleaning | Expert Property Cleaning in Charlotte, NC",
    description:
        "Professional exterior cleaning services for homes and businesses in Charlotte, NC. Explore Brite services and request a free estimate today.",
    openGraph: {
        title: "Brite Exterior Cleaning | Charlotte, NC",
        description:
            "Professional exterior cleaning services that help homes and businesses look clean, polished, and well-maintained.",
        url: "/",
        siteName: "Brite Exterior Cleaning",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning | Charlotte, NC",
        description:
            "Explore Brite's professional exterior cleaning services and request a free estimate today.",
    },
};

export default async function HomePage() {
    return (
        <section className="w-full bg-background text-foreground">
            <div className="relative flex w-full flex-col">
                <Splash
                    img={SplashPic}
                    title="Brite Exterior Services"
                    description="Your home deserves the best — Brite provides elite maintenance services that keep your space pristine, efficient, and worry-free. From luxury estates to modern residences, we handle every detail with precision and care. Experience effortless homeownership with Brite."
                />

                <div className="relative flex w-full justify-center">
                    <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-brite-navy via-primary to-background" />

                    <div className="absolute top-[100px] z-10 flex w-[95%] items-center justify-center md:w-[80%] lg:w-[70%] xl:w-[45%]">
                        <ContactFormOverlay />
                    </div>
                </div>
            </div>

            <div className="pt-[1100px]">
                <SocialProof />
            </div>

            <ProductRow
                category="Holiday Lighting"
                title="Illuminate Your Luxury Home – Exquisite Holiday Lighting for a Spectacular Display!"
            />
        </section>
    );
}
