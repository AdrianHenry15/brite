import { type SchemaTypeDefinition } from "sanity";

import { jobType } from "./jobType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [jobType],
};
