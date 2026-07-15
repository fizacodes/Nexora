import { getJobApplications } from "@/app/actions/recruiter/getJobApplications";
import Link from "next/link";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicantsPage({ params }: Props) {
  const { id } = await params;

  const applications = await getJobApplications(id);

  return (
    <div className="bg-white h-screen">
    <div className="max-w-5xl bg-white text-black mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        Applicants ({applications.length})
      </h1>

      {applications.length === 0 ? (
        <p>No applicants yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((application) => (
            <Link
    key={application.id}
    href={`/recruiter/show-job/${id}/applicant/${application.id}`}
  >
            <div
              className="border rounded-lg p-5 bg-white"
            >
              <h2 className="text-xl font-semibold">
                {application.user.name}
              </h2>

              <p>{application.user.email}</p>

              <p>{application.profile.headline}</p>

              <p>{application.status}</p>

              <p>
                {application.appliedAt.toLocaleDateString()}
              </p>
            </div>
              </Link>
          ))}
        </div>
        
      )}
      
    </div>
    </div>
  );
}