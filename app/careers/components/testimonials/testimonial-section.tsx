import React from "react";
import TestimonialCards from "./card";
import { Testimonial } from "@/sanity.types";

interface ITestimonials {
    testimonials: Testimonial[];
}

const TestimonialSection = (props: ITestimonials) => {
    const { testimonials } = props;

    // If no testimonials, don't render the component
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className="py-16 px-8 bg-blue-50">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Team Says</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                    <TestimonialCards testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
