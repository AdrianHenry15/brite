import { getAllResumes } from "@/sanity/lib/actions/resumes";
import ResumeCard from "./components/resume-card";
import { Resume } from "@/sanity.types";

export const revalidate = 0; // always fetch fresh resumes

export default async function AdminResumesPage() {
    const resumes = await getAllResumes();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Resumes</h2>

            {resumes.length === 0 ? (
                <p className="text-gray-500">No resumes uploaded yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumes.map((resume: Resume) => (
                        <ResumeCard key={resume._id} resume={resume} />
                    ))}
                </div>
            )}
        </div>
    );
}
