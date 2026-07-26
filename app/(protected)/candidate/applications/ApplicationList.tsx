import Link from "next/link";

type Props = {
  applications: any[];
};

export default function ApplicationList({
  applications,
}: Props) {
  if (applications.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-10 mt-6 text-center text-black">
        <h2 className="text-2xl font-semibold text-background">
          No Applications Yet
        </h2>

        <p className="text-gray-600 mt-2">
          You haven't applied for any jobs yet.
        </p>

        <Link
          href="/candidate"
          className="inline-block mt-6 px-6 py-3 bg-accent text-background rounded-lg hover:opacity-90"
        >
          Browse Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-5 text-black">
      {applications.map((application) => (
        <div
          key={application.id}
          className="bg-white rounded-xl shadow-sm border p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-background">
                {application.job.title}
              </h2>

              <p className="text-gray-600 mt-1">
                {application.job.company}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                📍 {application.job.location}
              </p>
            </div>

            <StatusBadge status={application.status} />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

            <div>
              <p className="text-gray-500">Applied On</p>

              <p className="font-medium">
                {new Date(application.appliedAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Resume Used</p>

              <p className="font-medium">
                {application.resumeType === "NEXORA"
                  ? "Nexora Resume"
                  : "Uploaded Resume"}
              </p>
            </div>

          </div>

          <div className="mt-6 flex gap-3">

            <Link
              href={`/candidate/jobs/${application.job.id}`}
              className="px-5 py-2 bg-accent text-background rounded-lg hover:opacity-90"
            >
              View Job
            </Link>

          </div>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors: Record<string, string> = {
    APPLIED: "bg-yellow-100 text-yellow-700",
    REVIEWING: "bg-blue-100 text-blue-700",
    SHORTLISTED: "bg-purple-100 text-purple-700",
    INTERVIEW: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
    HIRED: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        colors[status] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}