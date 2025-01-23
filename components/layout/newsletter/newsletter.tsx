"use client";

import React, { useEffect, useState } from "react";
import NewsletterItem from "./newsletter-item";
import Link from "next/link";

interface Newsletter {
    id: number;
    title: string;
    date: string;
    description: string;
}

const Newsletter: React.FC = () => {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);

    useEffect(() => {
        const fetchNewsletters = async () => {
            try {
                const response = await fetch("/newsletter.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch newsletters");
                }
                const data = await response.json();
                setNewsletters(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNewsletters();
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x min-h-screen">
            <h1 className="text-xl font-bold text-start mb-8">Our Newsletter</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {newsletters.map((item) => (
                    <Link key={item.id} href={`/newsletter/${item.id}`}>
                        <NewsletterItem
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            description={item.description}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Newsletter;
