import React from "react";

interface NewsletterItemProps {
    title: string;
    date: string;
    description: string;
}

const NewsletterItem: React.FC<NewsletterItemProps> = ({ title, date, description }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="p-6">
            <h2 className="text-lg font-display font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mt-2">{date}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
        </div>
    </div>
);

export default NewsletterItem;
