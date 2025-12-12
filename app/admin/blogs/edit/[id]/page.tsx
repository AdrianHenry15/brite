import { getBlogById } from "@/sanity/lib/actions/blogs";
import AdminBlogsForm from "../../components/admin-blogs-form";

export default async function AdminBlogEditItemPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = await getBlogById(id);

    return (
        <div className="p-6">
            <AdminBlogsForm initialData={blog as any} />
        </div>
    );
}
