import JobOpenings from "./components/job-openings";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Hero from "./components/hero";

import { getAllTestimonials } from "@/sanity/lib/testimonials/getAllTestimonials";
import { getAllJobOpenings } from "@/sanity/lib/job-openings/getAllJobOpenings";

const CareersPage = async () => {
    // Fetch job openings and testimonials
    const jobs = await getAllJobOpenings();
    const testimonials = await getAllTestimonials();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Job Openings Section */}
            <JobOpenings jobs={jobs} />
            {/* Employee Testimonials Section */}
            <Testimonials testimonials={testimonials} />
        </div>
    );
};

export default CareersPage;
