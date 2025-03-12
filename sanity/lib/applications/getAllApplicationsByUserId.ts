import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live"; // Custom function for fetching

export const getApplicationsByUserId = async (userId: string) => {
    if (!userId) {
        console.error("User ID is required to fetch applications.");
        return [];
    }

    const APPLICATIONS_BY_USER_QUERY = defineQuery(`
        *[_type == "application" && userId == $userId]{
            _id,
            firstName,
            lastName,
            email,
            resume,
            phone,
            publishedAt,
            job->{
                title
            }
        }
    `);

    try {
        const response = await sanityFetch({
            query: APPLICATIONS_BY_USER_QUERY,
            params: { userId },
        });

        return response?.data || []; // Return an array, even if empty
    } catch (error) {
        console.error("Error fetching applications by user ID:", error);
        return [];
    }
};
