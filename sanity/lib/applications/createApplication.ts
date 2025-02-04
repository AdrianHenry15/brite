import { v4 as uuidv4 } from "uuid";
import { client } from "../client";

interface Application {
    title: string;
    job: string;
    slug: { current: string };
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    publishedAt?: string;
}

export const createApplication = async (application: Application) => {
    try {
        const newApplication = {
            _type: "application",
            _id: uuidv4(), // Generate a unique ID
            title: application.title,
            job: {
                _type: "reference",
                _ref: application.job,
            },
            slug: application.slug,
            firstName: application.firstName,
            lastName: application.lastName,
            email: application.email,
            phone: application.phone,
            publishedAt: application.publishedAt || new Date().toISOString(),
        };

        // Create the document in Sanity
        const result = await client.create(newApplication);

        console.log("Application created successfully:", result);
        return result;
    } catch (error) {
        console.error("Error creating application:", error);
        throw new Error("Failed to create application");
    }
};
