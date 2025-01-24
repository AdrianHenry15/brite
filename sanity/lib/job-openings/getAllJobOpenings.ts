import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllJobOpenings = async () => {
    const ALL_JOB_OPENINGS_QUERY = defineQuery(`*[_type == "job"] | order(name asc)
`);

    try {
        // Use sanityFetch to send the query
        const jobOpening = await sanityFetch({
            query: ALL_JOB_OPENINGS_QUERY,
        });

        // Return the list of job openings, or an empty array if none are found
        return jobOpening.data || [];
    } catch (error) {
        console.error("Error fetching all Job Openings:", error);
        return [];
    }
};
