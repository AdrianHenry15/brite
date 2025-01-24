import { type SchemaTypeDefinition } from "sanity";

import { jobType } from "./jobType";
import { testimonialType } from "./testimonialType";
import { applicationType } from "./applicationType";
import { resumeType } from "./resumeType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [jobType, testimonialType, applicationType, resumeType],
};
