import { getJobApplications } from "@/app/actions/recruiter/getJobApplications";
import Link from "next/link";
import BackButton from "../../../components/BackButton";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicantsPage({ params }: Props) {
  const { id } = await params;

  const applications = await getJobApplications(id);

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="mb-8 text-2xl font-bold sm:text-3xl">
          Applicants ({applications.length})
        </h1>

        {applications.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
            <p className="text-lg text-gray-600">
              No applicants yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((application) => (
              <Link
                key={application.id}
                href={`/recruiter/show-job/${id}/applicant/${application.id}`}
              >
                <div className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-accent hover:shadow-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    {/* Applicant Info */}
                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-lg font-semibold sm:text-xl">
                        {application.user.name}
                      </h2>

                      <p className="break-all text-sm text-gray-600">
                        {application.user.email}
                      </p>

                      <p className="mt-2 text-sm text-gray-700">
                        {application.profile.headline || "No headline"}
                      </p>
                    </div>

                    {/* Status & Date */}
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-background">
                        {application.status}
                      </span>

                      <p className="text-sm text-gray-500">
                        {application.appliedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}