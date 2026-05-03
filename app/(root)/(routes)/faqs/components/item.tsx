// FAQItem.tsx
import React from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <article className="mb-10 w-full border-b border-border pb-10">
            <h3 className="my-4 text-lg font-semibold text-foreground sm:text-xl">{question}</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </article>
    );
}
