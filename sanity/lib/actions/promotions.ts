import { sanityClient } from "../client";

// GET ALL PROMOTIONS
export const getAllPromotions = async () => {
    try {
        return await sanityClient.fetch(`
            *[_type == "promotion"] | order(startDate desc){
                _id,
                title,
                slug,
                description,
                discountPercentage,
                startDate,
                endDate,
                icon,
                status
            }
        `);
    } catch (error) {
        console.error("Error fetching promotions:", error);
        return [];
    }
};

// GET PROMOTION BY ID
export const getPromotionById = async (id: string) => {
    try {
        return await sanityClient.getDocument(id);
    } catch (error) {
        console.error("Error fetching promotion by ID:", error);
        return null;
    }
};

// GET PROMOTION BY SLUG
export const getPromotionBySlug = async (slug: string) => {
    try {
        const promotion = await sanityClient.fetch(
            `
            *[_type == "promotion" && slug.current == $slug][0]{
                _id,
                title,
                slug,
                description,
                discountPercentage,
                startDate,
                endDate,
                icon,
                status
            }
        `,
            { slug },
        );

        return promotion || null;
    } catch (error) {
        console.error("Error fetching promotion by slug:", error);
        return null;
    }
};

// CREATE PROMOTION
export const createPromotion = async (payload: {
    title: string;
    description?: string;
    discountPercentage?: number;
    startDate: string;
    endDate: string;
    icon?: string;
    status?: string;
}) => {
    try {
        const newPromotion = await sanityClient.create({
            _type: "promotion",
            ...payload,
            slug: {
                _type: "slug",
                current: payload.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                    .slice(0, 96),
            },
        });

        return { success: true, data: newPromotion };
    } catch (error) {
        console.error("Error creating promotion:", error);
        return { success: false, error };
    }
};

// UPDATE PROMOTION
export const updatePromotion = async (
    id: string,
    payload: Partial<{
        title: string;
        description: string;
        discountPercentage: number;
        startDate: string;
        endDate: string;
        icon: string;
        status: string;
    }>,
) => {
    try {
        const patch: any = { ...payload };

        // If title changed → regenerate slug
        if (payload.title) {
            patch.slug = {
                _type: "slug",
                current: payload.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                    .slice(0, 96),
            };
        }

        const updated = await sanityClient.patch(id).set(patch).commit();

        return { success: true, data: updated };
    } catch (error) {
        console.error("Error updating promotion:", error);
        return { success: false, error };
    }
};

// DELETE PROMOTION BY ID
export const deletePromotionById = async (id: string) => {
    try {
        await sanityClient.delete(id);

        return {
            success: true,
            message: "Promotion deleted successfully.",
        };
    } catch (error: any) {
        console.error("Error deleting promotion by ID:", error);
        return {
            success: false,
            message: error.message || "Failed to delete promotion.",
        };
    }
};
