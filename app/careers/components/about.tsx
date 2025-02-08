import React from "react";

const About = () => {
    return (
        <section className="py-16 px-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Why Work With Brite?</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        icon: "🌟",
                        title: "Competitive Pay",
                        description:
                            "Earn above industry standards while working in a supportive environment.",
                    },
                    {
                        icon: "📅",
                        title: "Flexible Scheduling",
                        description:
                            "We value your time and offer flexible schedules to meet your needs.",
                    },
                    {
                        icon: "🌱",
                        title: "Career Growth",
                        description: "Opportunities for advancement in a growing company.",
                    },
                ].map((benefit, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="text-4xl">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mt-4">{benefit.title}</h3>
                        <p className="text-gray-600 mt-2">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
