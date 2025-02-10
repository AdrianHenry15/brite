import { type SchemaTypeDefinition } from "sanity";

import { jobType } from "./jobType";
import { applicationType } from "./applicationType";
import { resumeType } from "./resumeType";
import { newsletterType } from "./newsletterType";
import { blogType } from "./blogType";
import { promotionType } from "./promotionType";
import { authorType } from "./authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        jobType,
        applicationType,
        resumeType,
        newsletterType,
        blogType,
        authorType,
        promotionType,
    ],
};
