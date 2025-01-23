import { Button } from "@mui/material";
import JobOpenings from "./components/job-openings";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Hero from "./components/hero";

const Careers = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Job Openings Section */}
            <JobOpenings />
            {/* Employee Testimonials Section */}
            <Testimonials />
        </div>
    );
};

export default Careers;
