// stores/userStore.ts
import create from "zustand";

interface User {
    id: string;
    fullName: string;
    email: string;
    imageUrl?: string;
}

interface UserStore {
    users: User[];
    totalUserCount: number;
    isLoading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
}

const useUserStore = create<UserStore>((set) => ({
    users: [],
    totalUserCount: 0,
    isLoading: true,
    error: null,
    fetchUsers: async () => {
        try {
            set({ isLoading: true });
            const response = await fetch("/api/users");
            const data = await response.json();
            set({
                users: data.data,
                totalUserCount: data.totalCount,
                isLoading: false,
            });
        } catch (err) {
            set({
                error: "Failed to fetch users",
                isLoading: false,
            });
        }
    },
}));

export default useUserStore;
