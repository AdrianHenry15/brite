import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NewsletterType } from "../../../../../lib/types";

const NewsletterDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [newsletter, setNewsletter] = useState<NewsletterType | null>(null);

    useEffect(() => {
        const fetchNewsletter = async () => {
            if (!id) return;

            try {
                const response = await fetch("/newsletter.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch newsletters");
                }
                const data = await response.json();
                const specificNewsletter = data.find((item: NewsletterType) => item.id === id);
                setNewsletter(specificNewsletter);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNewsletter();
    }, [id]);

    if (!newsletter) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-display font-bold text-gray-900">{newsletter.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{newsletter.date}</p>
            <div className="mt-6 text-lg text-gray-800">{newsletter.description}</div>

            {/* Add any additional content related to the newsletter */}
        </div>
    );
};

export default NewsletterDetailPage;
