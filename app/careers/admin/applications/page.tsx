import { getAllApplications } from "@/sanity/lib/applications/getAllApplications";

const AdminApplicationsPage = async () => {
    const applications = await getAllApplications();

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">All Applications</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Phone</th>
                            <th className="border px-4 py-2">Resume</th>
                            <th className="border px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app._id} className="border-t">
                                <td className="border px-4 py-2">
                                    {app.firstName} {app.lastName}
                                </td>
                                <td className="border px-4 py-2">{app.email}</td>
                                <td className="border px-4 py-2">{app.phone}</td>
                                <td className="border px-4 py-2">
                                    {new Date(app.publishedAt!).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminApplicationsPage;
