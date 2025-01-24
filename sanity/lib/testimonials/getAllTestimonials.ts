import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllTestimonials = async () => {
    const ALL_TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"] | order(name asc)
`);

    try {
        // Use sanityFetch to send the query
        const testimonials = await sanityFetch({
            query: ALL_TESTIMONIALS_QUERY,
        });

        // Return the list of testimonials, or an empty array if none are found
        return testimonials.data || [];
    } catch (error) {
        console.error("Error fetching all testimonials:", error);
        return [];
    }
};
