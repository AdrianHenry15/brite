import { Metadata } from "next";

import JobOpenings from "./job-openings/components/job-opening-section";
import About from "./components/about";
import Hero from "./components/hero";

import { getAllJobOpenings } from "@/sanity/lib/job-openings/getAllJobOpenings";

export const metadata: Metadata = {
    title: "Careers | Brite Exterior Cleaning",
    description:
        "Explore career opportunities with Brite Exterior Cleaning in Charlotte, NC. View open roles in exterior cleaning, pressure washing, soft washing, and holiday lighting.",

    alternates: {
        canonical: "/careers",
    },

    openGraph: {
        title: "Careers | Brite Exterior Cleaning",
        description:
            "Join Brite Exterior Cleaning and build a career in professional exterior cleaning, pressure washing, soft washing, and holiday lighting services.",
        url: "/careers",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Careers | Brite Exterior Cleaning",
        description:
            "Brite Exterior Cleaning is hiring in Charlotte, NC. Explore open roles in exterior cleaning, pressure washing, and holiday lighting.",
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        "Brite Exterior Cleaning careers",
        "exterior cleaning jobs Charlotte NC",
        "pressure washing jobs Charlotte NC",
        "soft washing jobs",
        "holiday lighting jobs",
        "cleaning service careers Charlotte",
    ],
};

const CareersPage = async () => {
    const jobs = await getAllJobOpenings();

    return (
        <main className="min-h-screen w-full bg-background text-foreground">
            <Hero />
            <About />
            <JobOpenings jobs={jobs} />
        </main>
    );
};

export default CareersPage;
