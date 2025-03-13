import * as React from "react";
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Text,
    Button,
    Hr,
    Section,
} from "@react-email/components";
import Link from "next/link";

interface IJobApplicationConfirmationEmailTemplateProps {
    applicantName: string;
    applicantEmail: string;
    applicantPhoneNumber: string;
    job: string;
}

export const JobApplicationConfirmationEmailTemplate = ({
    applicantName,
    applicantEmail,
    applicantPhoneNumber,
    job,
}: IJobApplicationConfirmationEmailTemplateProps) => {
    return (
        <Html>
            <Head />
            <Preview>Your Job Application Has Been Received</Preview>
            <Body
                style={{
                    backgroundColor: "#f4f8ff",
                    padding: "20px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <Container
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <Heading
                        style={{
                            color: "#007BFF",
                            textAlign: "center",
                            fontSize: "24px",
                            marginBottom: "10px",
                        }}
                    >
                        🎉 Application Received!
                    </Heading>

                    <Text style={{ color: "#333", fontSize: "16px", lineHeight: "1.5" }}>
                        Hi {applicantName},
                        <br />
                        Thank you for applying for the <strong>{job}</strong> position. We have
                        received your application and will review it soon.
                    </Text>

                    <Section
                        style={{
                            marginTop: "20px",
                            padding: "10px",
                            backgroundColor: "#f4f8ff",
                            borderRadius: "5px",
                        }}
                    >
                        <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#007BFF" }}>
                            Applicant Details:
                        </Text>
                        <Text style={{ color: "#333", fontSize: "16px" }}>
                            <strong>Name:</strong> {applicantName} <br />
                            <strong>Email:</strong> {applicantEmail} <br />
                            <strong>Phone Number:</strong> {applicantPhoneNumber} <br />
                            <strong>Job Applied For:</strong> {job}
                        </Text>
                    </Section>

                    <Section
                        style={{
                            marginTop: "20px",
                            padding: "10px",
                            backgroundColor: "#f4f8ff",
                            borderRadius: "5px",
                        }}
                    >
                        <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#007BFF" }}>
                            What's Next?
                        </Text>
                        <Text style={{ color: "#333", fontSize: "16px" }}>
                            Our team will carefully review your application and, if selected, we
                            will reach out to you for the next steps.
                            <br />
                            If you have any questions, feel free to contact us.
                        </Text>
                    </Section>

                    <Section style={{ textAlign: "center", marginTop: "20px" }}>
                        <Button
                            href="mailto:nick.walker@briteclt.com"
                            style={{
                                display: "inline-block",
                                backgroundColor: "#007BFF",
                                color: "#ffffff",
                                padding: "10px 20px",
                                fontSize: "16px",
                                borderRadius: "5px",
                                textDecoration: "none",
                            }}
                        >
                            Contact Us
                        </Button>
                    </Section>

                    <Hr style={{ borderColor: "#ddd", marginTop: "20px" }} />

                    <Text style={{ fontSize: "14px", color: "#777", textAlign: "center" }}>
                        This is an automated confirmation from <strong>Brite</strong>. If you did
                        not apply for this position, please ignore this email or contact us at{" "}
                        <Link
                            href="mailto:nick.walker@briteclt.com"
                            style={{ color: "#007BFF", textDecoration: "none" }}
                        >
                            nick.walker@briteclt.com
                        </Link>
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default JobApplicationConfirmationEmailTemplate;
