import JobOpenings from "./job-openings/components/job-opening-section";
import About from "./components/about";
import Hero from "./components/hero";

import { getAllJobOpenings } from "@/sanity/lib/job-openings/getAllJobOpenings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join Our Team | Careers at Brite Exterior Cleaning Services",
    description:
        "Explore career opportunities at Brite Exterior Cleaning, offering jobs in exterior cleaning, pressure washing, holiday lighting, and more in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Join Our Team | Careers at Brite Exterior Cleaning Services",
        description:
            "We're hiring! Join Brite Exterior Cleaning and become part of a team that offers services like pressure washing, gutter cleaning, and holiday lighting installation in Charlotte, NC.",
        url: "https://briteclt.com/careers",
    },
    twitter: {
        card: "summary_large_image",
        title: "Join Our Team | Careers at Brite Exterior Cleaning Services",
        description:
            "Start your career with Brite Exterior Cleaning! We're hiring for exterior cleaning, pressure washing, and holiday lighting positions in Charlotte, NC.",
    },
};

const CareersPage = async () => {
    // Fetch job openings and testimonials
    const jobs = await getAllJobOpenings();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Job Openings Section */}
            <JobOpenings jobs={jobs} />
        </div>
    );
};

export default CareersPage;
