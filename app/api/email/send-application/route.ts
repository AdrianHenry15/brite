import JobApplicationConfirmationEmailTemplate from "@/components/email-templates/job-application/job-application-confirmation-email-template";
import JobApplicationEmailTemplate from "@/components/email-templates/job-application/job-application-email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

// Define client email (hiring team)
const CLIENT_EMAILS = [
    "nick.walker@briteclt.com",
    "joey.mckenna@briteclt.com",
    "adrianhenry2115@gmail.com",
]; // Replace with the actual client email

export async function POST(req: NextRequest) {
    try {
        const { applicantName, applicantEmail, applicantPhoneNumber, job } = await req.json();

        // Send email to the client (hiring team)
        const clientEmailResponse = await resend.emails.send({
            from: "Brite Cleaning <noreply@briteclt.com>",
            to: CLIENT_EMAILS,
            subject: `New Job Application: ${applicantName} for ${job}`,
            react: JobApplicationEmailTemplate({
                applicantName,
                applicantEmail,
                applicantPhoneNumber,
                job,
            }),
        });

        // Send confirmation email to the applicant
        const applicantEmailResponse = await resend.emails.send({
            from: "Brite Cleaning <noreply@briteclt.com>",
            to: applicantEmail,
            subject: "Your Job Application Has Been Received",
            react: JobApplicationConfirmationEmailTemplate({
                applicantName,
                applicantEmail,
                applicantPhoneNumber,
                job,
            }),
        });

        return NextResponse.json({ success: true, clientEmailResponse, applicantEmailResponse });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
    }
}
