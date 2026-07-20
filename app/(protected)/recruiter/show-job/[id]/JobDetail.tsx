import Link from "next/link";
import { MapPin, Briefcase, Banknote } from "lucide-react";
import { deleteJob } from "@/app/actions/recruiter/deleteJob";
import BackButton from "../../components/BackButton";

export default function JobDetails({ job }: { job: any }) {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 text-black overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {job.title}
          </h1>

          <p className="mt-2 text-base text-gray-600 sm:text-lg">
            {job.company}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 sm:text-base">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{job.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={18} />
              <span>{job.type.replace("_", " ")}</span>
            </div>

            {(job.salaryMin || job.salaryMax) && (
              <div className="flex items-center gap-2">
                <Banknote size={18} />
                <span>
                  PKR {job.salaryMin?.toLocaleString()} -{" "}
                  {job.salaryMax?.toLocaleString()}
                </span>
              </div>
            )}

            {job.isRemote && (
              <span className="rounded-full bg-accent px-4 py-1 text-sm font-semibold text-background">
                Remote
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:mt-8 sm:p-8">
          <h2 className="mb-5 text-xl font-semibold text-gray-900 sm:text-2xl">
            Job Description
          </h2>

         <div className="whitespace-pre-wrap break-words text-gray-700 leading-7 text-sm sm:text-base">
  {job.description}
</div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <Link
            href={`/recruiter/show-job/${job.id}/edit`}
            className="w-full sm:w-auto"
          >
            <button className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90">
              Edit Job
            </button>
          </Link>

          <Link
            href={`/recruiter/show-job/${job.id}/applicant`}
            className="w-full sm:w-auto"
          >
            <button className="w-full rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100">
              View Applicants
            </button>
          </Link>

          <form
            className="w-full sm:w-auto"
            action={async () => {
              "use server";
              await deleteJob(job.id);
            }}
          >
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90"
            >
              Delete Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}