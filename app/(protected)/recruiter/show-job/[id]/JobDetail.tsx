import Link from "next/link";
import { MapPin, Briefcase, Banknote, ArrowLeft } from "lucide-react";

export default function JobDetails({
  job,
}: {
  job: any;
}) {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-6">

        {/* Back Button */}
        <Link
          href="/recruiter/show-job"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back to My Jobs
        </Link>

        {/* Header */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h1 className="text-4xl font-bold text-gray-900">
            {job.title}
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            {job.company}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-gray-600">

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {job.location}
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={18} />
              {job.type.replace("_", " ")}
            </div>

            {(job.salaryMin || job.salaryMax) && (
              <div className="flex items-center gap-2">
                <Banknote size={18} />
                PKR {job.salaryMin?.toLocaleString()} -
                {job.salaryMax?.toLocaleString()}
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
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Job Description
          </h2>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: job.description,
            }}
          />

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          
          <Link href={`/recruiter/show-job/${job.id}/edit`} >
          <button
            className="
              rounded-lg
              bg-accent
              px-6
              py-3
              font-semibold
              text-background
              hover:opacity-90
            "
          >
            Edit Job
          </button>
          </Link>
<Link href={`/recruiter/show-job/${job.id}/applicant`}>


          <button
            className="
              rounded-lg
              border
              border-gray-300
              px-6
              py-3
              font-semibold
              hover:bg-gray-100
            "
          >
            View Applicants
          </button>
        </Link>
          <button
            className="
              rounded-lg
              border
              border-red-500
              px-6
              py-3
              font-semibold
              text-red-600
              hover:bg-red-50
            "
          >
            Delete Job
          </button>

        </div>

      </div>
    </div>
  );
}