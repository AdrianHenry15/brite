import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getBlogBySlug = async (slug: string) => {
    const BLOG_BY_ID_QUERY =
        defineQuery(`*[_type == "blog" && slug.current == $slug] | order(name asc) [0]
`);

    try {
        // Use sanityFetch to send the query with the slug as a parameter
        const blog = await sanityFetch({
            query: BLOG_BY_ID_QUERY,
            params: {
                slug,
            },
        });

        // Return the product data or null if not found
        return blog.data || null;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        return null;
    }
};
