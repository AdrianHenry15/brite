import JobOpenings from "./job-openings/components/job-opening-section";
import About from "./components/about";
import Hero from "./components/hero";

import { getAllJobOpenings } from "@/sanity/lib/job-openings/getAllJobOpenings";

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
