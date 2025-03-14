import { getAllApplications } from "@/sanity/lib/applications/getAllApplications";

const AdminApplicationsPage = async () => {
    const applications = await getAllApplications();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center pt-6 md:pt-0">
                All Applications
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app) => (
                    <div
                        key={app._id}
                        className="bg-gray-50 shadow-md rounded-lg p-6 border flex flex-col"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">{app.job?.title}</h3>
                        <p className="text-gray-600 mt-1">
                            {app.firstName} {app.lastName}
                        </p>
                        <p className="text-gray-500 text-sm">{app.email}</p>
                        <p className="text-gray-500 text-sm">{app.phone}</p>
                        <p className="text-gray-500 text-sm">
                            {new Date(app.publishedAt!).toLocaleDateString()}
                        </p>

                        {/* <div className="mt-4">
                            {app.resumeFile ? (
                                <a
                                    href={`/careers/admin/resume/${app.resumeFile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    View Resume
                                </a>
                            ) : (
                                <span className="text-gray-400">No Resume</span>
                            )}
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminApplicationsPage;
