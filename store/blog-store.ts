import { create } from "zustand";

interface BlogPost {
    id: string;
    title: string;
    content: string;
    date: string;
}

interface BlogState {
    blogPosts: BlogPost[];
    addBlogPost: (title: string, content: string) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
    blogPosts: [],
    addBlogPost: (title, content) => {
        const newPost: BlogPost = {
            id: crypto.randomUUID(),
            title,
            content,
            date: new Date().toLocaleString(),
        };

        set((state) => ({ blogPosts: [newPost, ...state.blogPosts] }));
    },
}));
