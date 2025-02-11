import { getAllResumes } from "@/sanity/lib/resumes/getAllResumes";
import Link from "next/link";

export default async function ResumesPage() {
    const resumes = await getAllResumes();

    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">User Resumes</h1>

            {resumes.length === 0 ? (
                <p className="text-center text-gray-500">No resumes uploaded yet.</p>
            ) : (
                <div className="space-y-4">
                    {resumes.map((resume) => (
                        <div
                            key={resume._id}
                            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{resume.user}</h2>
                                <p className="text-gray-500 text-sm">
                                    Uploaded: {new Date(resume.uploadedAt!).toLocaleDateString()}
                                </p>
                            </div>
                            <Link
                                href={resume.resumeFile?.url as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                View Resume
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
