import checkIfUserApplied from "@/lib/check-user-applied";
import { create } from "zustand";

interface ApplicationStore {
    appliedJobs: string[];
    addAppliedJob: (jobTitle: string, email: string) => void;
    hasApplied: (jobTitle: string, email: string) => Promise<boolean>;
}

export const useApplicationStore = create<ApplicationStore>()(
    // persist(
    (set, get) => ({
        appliedJobs: [],

        addAppliedJob: async (jobTitle: string, email: string) => {
            // Check if the user has already applied for this job in the database
            const hasApplied = await checkIfUserApplied(jobTitle, email);

            if (!hasApplied) {
                const appliedJobs = get().appliedJobs;
                const updatedJobs = [...appliedJobs, jobTitle];

                set({ appliedJobs: updatedJobs });
            }
        },

        hasApplied: async (jobTitle: string, email: string) => {
            // Fetch the applied jobs from the store
            const appliedJobs = get().appliedJobs;

            // Check if the job is already in the list, otherwise check the database
            if (appliedJobs.includes(jobTitle)) {
                return true;
            }

            // Check the database if the job is not in the local store
            return await checkIfUserApplied(jobTitle, email);
        },
    }),
    // {
    //     name: "applied-jobs-storage",
    //     storage: createJSONStorage(() => sessionStorage),
    // },
);
// );
