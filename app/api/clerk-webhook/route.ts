import { syncUserToSanity } from "@/sanity/lib/sync-user";
import { sanityClient } from "@/sanity/lib/client";

export async function POST(req: Request) {
    const payload = await req.json();
    const event = payload.data;
    const type = payload.type;

    if (type === "user.created" || type === "user.updated") {
        await syncUserToSanity(event);
    }

    if (type === "user.deleted") {
        await sanityClient.delete(`clerk.${event.id}`).catch(() => {});
    }

    return new Response("ok");
}
