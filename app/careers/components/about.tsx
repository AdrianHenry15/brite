import React from "react";

const benefits = [
    {
        icon: "🌟",
        title: "Competitive Pay",
        description: "Earn above industry standards while working in a supportive environment.",
    },
    {
        icon: "📅",
        title: "Flexible Scheduling",
        description: "We value your time and offer flexible schedules to meet your needs.",
    },
    {
        icon: "🌱",
        title: "Career Growth",
        description: "Opportunities for advancement in a growing company.",
    },
];

const About = () => {
    return (
        <section className="w-full bg-muted/40 px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
                    Why Work With Brite?
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {benefits.map((benefit) => (
                        <article
                            key={benefit.title}
                            className="rounded-2xl border border-border bg-card p-6 text-center text-card-foreground shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className="text-4xl" aria-hidden="true">
                                {benefit.icon}
                            </div>

                            <h3 className="mt-4 text-xl font-semibold tracking-tight text-card-foreground">
                                {benefit.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {benefit.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
