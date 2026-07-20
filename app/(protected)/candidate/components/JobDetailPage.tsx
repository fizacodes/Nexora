"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Building2, MapPin, Briefcase } from "lucide-react";

interface Props {
  job: any;
}

export default function JobDetailsPage({ job }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-6">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-gray-700 hover:text-accent transition"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Job Card */}
        <div className="rounded-xl bg-white shadow-sm border border-gray-200">

          {/* Header */}
          <div className="border-b p-6">
            <h1 className="text-2xl font-bold text-background">
              {job.title}
            </h1>

            <div className="mt-4 space-y-3 text-gray-600">

              <div className="flex items-center gap-3">
                <Building2 size={18} />
                <span>{job.company}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{job.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase size={18} />
                <span>{job.type}</span>
              </div>

            </div>

            {(job.salaryMin || job.salaryMax) && (
              <div className="mt-5">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Salary: Rs {job.salaryMin ?? 0} - Rs {job.salaryMax ?? "Negotiable"}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="p-6">

            <h2 className="mb-4 text-xl font-semibold text-background">
              Job Description
            </h2>

            <div className="whitespace-pre-wrap leading-8 text-gray-700">
              {job.description}
            </div>

          </div>

        </div>
      </div>

      {/* Sticky Bottom Apply Button */}
      <div className="sticky bottom-0 border-t bg-white p-4">
        <div className="mx-auto max-w-4xl">
          <Link href={`/candidate/jobs/${job.id}/apply`}>
            <button className="w-full rounded-lg bg-accent py-3 text-lg font-semibold text-background transition hover:opacity-90">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}