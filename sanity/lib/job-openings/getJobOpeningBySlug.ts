import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getJobBySlug = async (slug: string) => {
    const JOB_BY_ID_QUERY =
        defineQuery(`*[_type == "job" && slug.current == $slug] | order(name asc) [0]
`);

    try {
        // Use sanityFetch to send the query with the slug as a parameter
        const job = await sanityFetch({
            query: JOB_BY_ID_QUERY,
            params: {
                slug,
            },
        });

        // Return the product data or null if not found
        return job.data || null;
    } catch (error) {
        console.error("Error fetching job by ID:", error);
        return null;
    }
};
