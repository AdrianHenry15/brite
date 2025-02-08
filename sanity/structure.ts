import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title("Brite Exterior Services Studio")
        .items([
            S.documentTypeListItem("promotion").title("Promotions"),
            S.documentTypeListItem("newsletter").title("Newsletters"),
            S.documentTypeListItem("blog").title("Blogs"),
            S.documentTypeListItem("job").title("Job Openings"),
            S.divider(),
            S.documentTypeListItem("application").title("Applications"),
            S.documentTypeListItem("resume").title("Resumes"),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() &&
                    ![
                        "promotion",
                        "newsletter",
                        "blog",
                        "job",
                        "testimonial",
                        "application",
                        "resume",
                    ].includes(item.getId()!),
            ),
        ]);
