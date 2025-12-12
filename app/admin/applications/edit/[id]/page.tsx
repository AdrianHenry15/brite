import AdminApplicationsForm from "../../components/admin-applications-form";

export const dynamic = "force-dynamic";

async function getApplication(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/${id}`, {
        cache: "no-store",
    });
    return res.json();
}

export default async function AdminApplicationEditItemPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const application = await getApplication(id);

    return (
        <div>
            <AdminApplicationsForm initialData={application} />
        </div>
    );
}
