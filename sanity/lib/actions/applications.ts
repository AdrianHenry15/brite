import { sanityClient } from "../client";

// GET ALL APPLICATIONS
export const getAllApplications = async () => {
    try {
        return await sanityClient.fetch(`
            *[_type == "application"] | order(publishedAt desc){
                _id,
                firstName,
                lastName,
                email,
                phone,
                publishedAt,
                job->{
                    _id,
                    title,
                    location
                }
            }
        `);
    } catch (error) {
        console.error("Error fetching applications:", error);
        return [];
    }
};

// GET APPLICATION BY ID
export const getApplicationById = async (id: string) => {
    try {
        return await sanityClient.fetch(
            `
            *[_type == "application" && _id == $id][0]{
                _id,
                firstName,
                lastName,
                email,
                phone,
                publishedAt,
                job->{
                    _id,
                    title,
                    location
                }
            }
        `,
            { id },
        );
    } catch (error) {
        console.error("Error fetching application by ID:", error);
        return null;
    }
};

// CREATE APPLICATION
export const createApplication = async (payload: {
    jobId?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    publishedAt?: string;
}) => {
    try {
        const newApp = await sanityClient.create({
            _type: "application",

            job: payload.jobId
                ? {
                      _type: "reference",
                      _ref: payload.jobId,
                  }
                : undefined,

            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone || "",

            publishedAt: payload.publishedAt || new Date().toISOString(),
        });

        return { success: true, data: newApp };
    } catch (error) {
        console.error("Error creating application:", error);
        return { success: false, error };
    }
};

// UPDATE APPLICATION
export const updateApplication = async (
    id: string,
    payload: Partial<{
        jobId: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        publishedAt: string;
    }>,
) => {
    try {
        const patch: any = { ...payload };

        if (payload.jobId) {
            patch.job = {
                _type: "reference",
                _ref: payload.jobId,
            };
        }

        const updated = await sanityClient.patch(id).set(patch).commit();
        return { success: true, data: updated };
    } catch (error) {
        console.error("Error updating application:", error);
        return { success: false, error };
    }
};

// DELETE APPLICATION BY ID
export const deleteApplicationById = async (id: string) => {
    try {
        await sanityClient.delete(id);

        return { success: true, message: "Application deleted successfully." };
    } catch (error: any) {
        console.error("Error deleting application:", error);
        return { success: false, message: error.message || "Failed to delete application." };
    }
};
