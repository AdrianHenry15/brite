import { Testimonial } from "@/sanity.types";
import React from "react";

interface ITestimonialCardsProps {
    testimonial: Testimonial;
}

const TestimonialCards = (props: ITestimonialCardsProps) => {
    const { testimonial } = props;
    return (
        <div key={testimonial._id} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
    );
};

export default TestimonialCards;
