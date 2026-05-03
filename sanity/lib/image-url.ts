import type { SanityImageSource } from "@sanity/asset-utils";
import imageUrlBuilder, { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = createImageUrlBuilder(client);

export function imageUrl(source: SanityImageSource) {
    return builder.image(source);
}
