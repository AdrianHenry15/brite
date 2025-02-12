import { Application } from "@/sanity.types";
import { create } from "zustand";

interface ApplicationStore {
    applications: Application[];
    isLoading: boolean;
    error: string | null;
    fetchApplications: () => Promise<void>;
}

export const useApplicationStore = create<ApplicationStore>((set) => ({
    applications: [],
    isLoading: false,
    error: null,
    fetchApplications: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch("/api/applications");
            const data = await response.json();
            if (!data.success) throw new Error("Failed to fetch applications");
            set({ applications: data.applications, isLoading: false });
        } catch (error) {
            set({ error: error as string, isLoading: false });
        }
    },
}));
