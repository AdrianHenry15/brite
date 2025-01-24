import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title("Brite Exterior Services Studio")
        .items([
            S.documentTypeListItem("testimonial").title("Tesimonials"),
            S.documentTypeListItem("job").title("Job Openings"),
            S.divider(),
            S.documentTypeListItem("application").title("Applications"),
            S.documentTypeListItem("resume").title("Resume"),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() &&
                    !["job", "testimonial", "application", "resume"].includes(item.getId()!),
            ),
        ]);
