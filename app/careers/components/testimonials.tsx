import React from "react";

const Testimonials = () => {
    return (
        <section className="py-16 px-8 bg-blue-50">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Team Says</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        name: "Adrian H.",
                        role: "Head Web Developer",
                        testimonial:
                            "Working at Brite has been an amazing experience. The team is supportive, and I love making Charlotte sparkle!",
                    },
                    {
                        name: "Nick W.",
                        role: "Supervisor",
                        testimonial:
                            "Brite offers the perfect work-life balance. I can work remotely while contributing to a fantastic mission.",
                    },
                    {
                        name: "Joey M.",
                        role: "Owner",
                        testimonial:
                            "I started as a technician and now lead a team. The growth opportunities here are incredible.",
                    },
                ].map((testimonial, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
