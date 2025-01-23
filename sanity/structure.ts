import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title("Brite Exterior Services Studio")
        .items([
            S.documentTypeListItem("job").title("Job Openings"),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => item.getId() && !["job"].includes(item.getId()!),
            ),
        ]);
