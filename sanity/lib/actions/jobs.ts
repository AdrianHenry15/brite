import { client } from "../client";

// GET ALL JOBS
export const getAllJobs = async () => {
    try {
        return await client.fetch(`
            *[_type == "job"] | order(publishedAt desc){
                _id,
                title,
                slug,
                location,
                excerpt,
                publishedAt
            }
        `);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};

// GET JOB BY ID
export const getJobById = async (id: string) => {
    try {
        return await client.getDocument(id);
    } catch (error) {
        console.error("Error fetching job by ID:", error);
        return null;
    }
};

// GET JOB BY SLUG
export const getJobBySlug = async (slug: string) => {
    try {
        const job = await client.fetch(
            `
            *[_type == "job" && slug.current == $slug][0]{
                _id,
                title,
                slug,
                location,
                excerpt,
                body,
                publishedAt
            }
        `,
            { slug },
        );

        return job || null;
    } catch (error) {
        console.error("Error fetching job by slug:", error);
        return null;
    }
};

// CREATE JOB
export const createJob = async (payload: {
    title: string;
    location?: string;
    excerpt?: string;
    body?: any[];
    publishedAt?: string;
}) => {
    try {
        const slug = payload.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .slice(0, 96);

        const newJob = await client.create({
            _type: "job",
            ...payload,
            slug: { _type: "slug", current: slug },
        });

        return { success: true, data: newJob };
    } catch (error) {
        console.error("Error creating job:", error);
        return { success: false, error };
    }
};

// UPDATE JOB
export const updateJob = async (
    id: string,
    payload: Partial<{
        title: string;
        location: string;
        excerpt: string;
        body: any[];
        publishedAt: string;
    }>,
) => {
    try {
        const patch: any = { ...payload };

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

        const updated = await client.patch(id).set(patch).commit();

        return { success: true, data: updated };
    } catch (error) {
        console.error("Error updating job:", error);
        return { success: false, error };
    }
};

// DELETE JOB BY ID
export const deleteJobById = async (id: string) => {
    try {
        await client.delete(id);

        return {
            success: true,
            message: "Job deleted successfully.",
        };
    } catch (error: any) {
        console.error("Error deleting job by ID:", error);
        return {
            success: false,
            message: error.message || "Failed to delete job.",
        };
    }
};
