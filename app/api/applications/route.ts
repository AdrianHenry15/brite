import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const application = {
            _type: "application",
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            job: {
                _type: "reference",
                _ref: formData.get("job"), // This should be a valid job ID
            },
            publishedAt: new Date().toISOString(),
        };

        const createdApplication = await client.create(application);

        return NextResponse.json(createdApplication, { status: 201 });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
