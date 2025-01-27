import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getResumeBySlug = async (slug: string) => {
    const RESUME_BY_ID_QUERY =
        defineQuery(`*[_type == "resume" && slug.current == $slug] | order(name asc) [0]
`);

    try {
        // Use sanityFetch to send the query with the slug as a parameter
        const resume = await sanityFetch({
            query: RESUME_BY_ID_QUERY,
            params: {
                slug,
            },
        });

        // Return the resume data or null if not found
        return resume.data || null;
    } catch (error) {
        console.error("Error fetching resume by ID:", error);
        return null;
    }
};
