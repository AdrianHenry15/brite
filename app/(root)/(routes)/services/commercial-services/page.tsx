import type { Metadata } from "next";

import CommercialServicesImg from "@/public/assets/imgs/action-3.jpg";
import FAQPromo from "@/components/promo-stuff/faqs-promo";
import Splash from "@/components/splash";
import ServicesComponent from "@/components/services/services-component";

const commercialServices = [
    {
        id: "commercial-gutter-cleaning",
        title: "Gutter Cleaning",
        description:
            "Prevent water damage and drainage issues with scheduled commercial gutter cleaning for buildings and facilities.",
    },
    {
        id: "commercial-window-cleaning",
        title: "Window Cleaning",
        description:
            "Professional window cleaning for storefronts, offices, and commercial properties.",
    },
    {
        id: "sidewalk-cleaning",
        title: "Sidewalk Cleaning",
        description:
            "Remove grime, gum, and stains from high-traffic sidewalks to improve safety and curb appeal.",
    },
    {
        id: "dumpster-pad-cleaning",
        title: "Dumpster Pad Cleaning",
        description:
            "Eliminate odors, grease buildup, and bacteria with routine dumpster pad cleaning.",
    },
    {
        id: "building-washing",
        title: "Building Washing",
        description:
            "Exterior building washing using pressure and soft washing methods to remove dirt, mold, and pollutants.",
    },
    {
        id: "roof-washing",
        title: "Roof Washing",
        description:
            "Low-pressure commercial roof washing that removes organic growth and helps extend roof lifespan.",
    },
    {
        id: "christmas-lighting",
        title: "Commercial Christmas Lighting",
        description:
            "Holiday lighting installation, maintenance, and removal for commercial properties.",
    },
];

export const metadata: Metadata = {
    title: "Commercial Exterior Cleaning Services in Charlotte, NC",
    description:
        "Commercial exterior cleaning services in Charlotte, NC, including building washing, sidewalk cleaning, window cleaning, roof washing, gutter cleaning, dumpster pad cleaning, and holiday lighting.",

    alternates: {
        canonical: "/services/commercial-services",
    },

    openGraph: {
        title: "Commercial Exterior Cleaning | Brite Exterior Cleaning",
        description:
            "Professional commercial exterior cleaning services for businesses and facilities in Charlotte, NC.",
        url: "/services/commercial-services",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        images: [
            {
                url: "/assets/imgs/brite-pic-1.jpg",
                width: 1200,
                height: 630,
                alt: "Commercial exterior cleaning services in Charlotte, NC",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Commercial Exterior Cleaning | Brite Exterior Cleaning",
        description:
            "Building washing, sidewalk cleaning, window cleaning, roof washing, gutter cleaning, dumpster pad cleaning, and holiday lighting for Charlotte businesses.",
        images: ["/assets/imgs/brite-pic-1.jpg"],
    },
};

const CommercialServicesPage = () => {
    return (
        <main className="w-full bg-background text-foreground">
            <Splash
                img={CommercialServicesImg}
                title="Commercial Services"
                description="Boost your business’s professional appearance with tailored commercial cleaning solutions. From building washing and sidewalk cleaning to detailed window cleaning and soft washing, Brite helps your property maintain a clean, professional look for clients and visitors."
            />

            <section className="bg-background text-foreground">
                <FAQPromo />
            </section>

            <section className="bg-background text-foreground">
                <ServicesComponent title="Commercial Services" services={commercialServices} />
            </section>
        </main>
    );
};

export default CommercialServicesPage;
