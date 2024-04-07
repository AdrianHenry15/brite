import { NextResponse } from "next/server";
import { GetObjectCommand, ListObjectsCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { uploadFileToS3 } from "s3-operations/createS3Operations";
import { s3, Bucket } from "@/config/aws.config";

// endpoint to get the list of files in the bucket
export async function GET() {
    const response = await s3.send(new ListObjectsCommand({ Bucket }));
    return NextResponse.json(response?.Contents ?? []);
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(new Error("No file uploaded"), { status: 400 });
        }

        // Convert the File to a Buffer
        const buffer = await file.arrayBuffer();
        const fileContent = Buffer.from(buffer);

        // Upload the file to S3
        await uploadFileToS3(fileContent, file.name, Bucket);

        // Get the signed URL for the uploaded file
        const src = await getSignedUrl(s3, new GetObjectCommand({ Bucket, Key: file.name }), {
            expiresIn: 3600,
        });

        // Respond with success message and signed URL
        return NextResponse.json({ message: "Object uploaded successfully.", src });
    } catch (error) {
        console.error("Error uploading object:", error);
        return NextResponse.json({ error: "Failed to upload object." }, { status: 500 });
    }
}
