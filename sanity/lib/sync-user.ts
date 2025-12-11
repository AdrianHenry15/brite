import { User } from "@clerk/nextjs/server";
import { sanityClient } from "./client";

export async function syncUserToSanity(clerkUser: User) {
    const sanityId = `clerk.${clerkUser.id}`;

    const sanityUser = {
        _id: sanityId,
        _type: "user",
        clerkId: clerkUser.id,
        fullName: clerkUser.fullName,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        imageUrl: clerkUser.imageUrl,
    };

    await sanityClient.createOrReplace(sanityUser);

    return sanityId;
}
