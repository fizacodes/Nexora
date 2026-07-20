import { deleteJob } from "@/app/actions/recruiter/deleteJob";
import Link from "next/link";

type Props = {
  job: any;
};

export default function JobCard({ job }: Props) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm sm:p-6">
      {/* Header */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
  <div className="flex-1">
    <h2 className="text-xl sm:text-2xl font-semibold">
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

 <span className="inline-flex items-center  justify-center whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-medium text-background">
  {job._count.applications}{" "}
  {job._count.applications === 1 ? "Applicant" : "Applicants"}
</span>
</div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/recruiter/show-job/${job.id}`}
          className="w-full sm:w-auto"
        >
          <button className="w-full rounded-lg border px-4 py-2 transition hover:bg-gray-100">
            View
          </button>
        </Link>

        <button className="w-full rounded-lg border px-4 py-2 transition hover:bg-gray-100 sm:w-auto">
          Edit
        </button>

        <form
          action={async () => {
            "use server";
            await deleteJob(job.id);
          }}
          className="w-full sm:w-auto"
        >
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-4 py-2 text-background transition hover:opacity-90"
          >
            Delete Job
          </button>
        </form>
      </div>
    </div>
  );
}