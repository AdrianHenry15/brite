import { createApplication } from "@/sanity/lib/applications/createApplication";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const job = formData.get("job") as string;
        const userId = formData.get("userId") as string;
        const file = formData.get("resume") as File | null;

        if (!firstName || !lastName || !email || !phone || !job || !file) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Upload resume file to Sanity
        const resumeAsset = await client.assets.upload("file", file, {
            filename: file.name,
        });

        // Create the application
        const application = await createApplication({
            userId,
            title: `${firstName} ${lastName} - Application`,
            job,
            slug: { current: `${firstName.toLowerCase()}-${lastName.toLowerCase()}-${Date.now()}` },
            firstName,
            lastName,
            email,
            phone,
            resume: resumeAsset._id,
        });

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error("Error handling application submission:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
