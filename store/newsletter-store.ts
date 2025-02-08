import { create } from "zustand";

interface NewsletterItem {
    id: string;
    email: string;
    content: string;
    date: string;
}

interface NewsletterState {
    newsletters: NewsletterItem[];
    addNewsletter: (email: string, content: string) => void;
}

export const useNewsletterStore = create<NewsletterState>((set) => ({
    newsletters: [],
    addNewsletter: (email, content) => {
        const newNewsletter = {
            id: crypto.randomUUID(),
            email,
            content,
            date: new Date().toLocaleString(),
        };

        set((state) => ({ newsletters: [newNewsletter, ...state.newsletters] }));
    },
}));
