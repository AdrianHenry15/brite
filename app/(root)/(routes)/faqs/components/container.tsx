// FAQContainer.tsx
import React from "react";

interface FAQContainerProps {
    title: string;
    children: React.ReactNode;
    id: string;
}

export default function FAQContainer({ title, children, id }: FAQContainerProps) {
    return (
        <section id={id} className="flex w-full flex-1 flex-col px-6 py-10 sm:px-6 lg:px-24">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {title}
            </h2>

            <div className="mt-6 flex flex-col gap-6 text-foreground">{children}</div>
        </section>
    );
}
