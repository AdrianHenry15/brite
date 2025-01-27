import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getApplicationBySlug = async (slug: string) => {
    const APPLICATION_BY_ID_QUERY =
        defineQuery(`*[_type == "application" && slug.current == $slug] | order(name asc) [0]
`);

    try {
        // Use sanityFetch to send the query with the slug as a parameter
        const application = await sanityFetch({
            query: APPLICATION_BY_ID_QUERY,
            params: {
                slug,
            },
        });

        // Return the product data or null if not found
        return application.data || null;
    } catch (error) {
        console.error("Error fetching application by ID:", error);
        return null;
    }
};
