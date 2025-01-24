import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllApplications = async () => {
    const ALL_APPLICATIONS_QUERY = defineQuery(`*[_type == "application"] | order(name asc)
`);

    try {
        // Use sanityFetch to send the query
        const applications = await sanityFetch({
            query: ALL_APPLICATIONS_QUERY,
        });

        // Return the list of applications, or an empty array if none are found
        return applications.data || [];
    } catch (error) {
        console.error("Error fetching all applications:", error);
        return [];
    }
};
