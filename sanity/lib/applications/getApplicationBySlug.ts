import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getApplicationBySlug = async (slug: string) => {
    const APPLICATION_BY_SLUG_QUERY =
        defineQuery(`*[_type == "application" && slug.current == $slug][0]{
        _id,
        userId,
        firstName,
        lastName,
        email,
        phone,
        publishedAt,
        job->{
            title
        },
    }`);

    try {
        // Use sanityFetch to send the query with the slug as a parameter
        const response = await sanityFetch({
            query: APPLICATION_BY_SLUG_QUERY,
            params: {
                slug,
            },
        });

        // Return the application data or null if not found
        return response.data || null;
    } catch (error) {
        console.error("Error fetching application by slug:", error);
        return null;
    }
};
