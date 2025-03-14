"use client";

import UserApplications from "@/components/user/applications";
import { UserProfile } from "@clerk/nextjs";
import { DocumentIcon } from "@sanity/icons";

export default function AuthUserProfilePage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h5 className="flex items-start my-10 ml-20 text-4xl justify-start w-full">
                My Profile
            </h5>
            <UserProfile path="/auth" routing="path">
                {/* You can pass the content as a component */}
                <UserProfile.Page
                    label="Applications"
                    labelIcon={<DocumentIcon fontSize={20} />}
                    url="applications"
                >
                    <UserApplications />
                </UserProfile.Page>
            </UserProfile>
        </div>
    );
}
