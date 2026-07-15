import Link from "next/link";

type Props = {
  job: any;
};

export default function JobCard({ job }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-2xl font-semibold">
            {job.title}
          </h2>

          <p className="mt-1 text-gray-500">
            {job.company}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            📍 {job.location}
          </p>

          <p className="mt-2 text-sm">
            {job.type.replace("_", " ")}
          </p>
        </div>

        <span className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background">
          {job._count.applications} Applicants
        </span>

      </div>

      <div className="mt-6 flex gap-3">
        <Link   href={`/recruiter/show-job/${job.id}`} >
        <button className="rounded-lg border px-4 py-2">
          View
        </button>
        </Link>

        <button className="rounded-lg border px-4 py-2">
          Edit
        </button>

        <button className="rounded-lg border border-red-500 px-4 py-2 text-red-500">
          Delete
        </button>

      </div>

    </div>
  );
}