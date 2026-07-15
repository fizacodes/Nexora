import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CoverLetterForm from "./CoverLetterForm";

type Props = {
  params: Promise<{
    jobId: string;
  }>;
  searchParams: Promise<{
    resumeType?: string;
    resumeUrl?: string;
  }>;
};

export default async function CoverLetterPage({
  params,
  searchParams,
}: Props) {
  const { jobId } = await params;

  const { resumeType, resumeUrl } = await searchParams;

  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
    select: {
      title: true,
      company: true,
    },
  });

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="max-w-3xl mx-auto">

        {/* Progress */}
        <div className="mb-6 text-sm text-gray-500">
          Resume
          <span className="mx-2">→</span>
          <span className="font-semibold text-accent">
            Cover Letter
          </span>
          <span className="mx-2">→</span>
          Preview
          <span className="mx-2">→</span>
          Submit
        </div>


        {/* Job Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

          <h1 className="text-2xl font-bold text-background">
            {job.title}
          </h1>

          <p className="text-gray-600 mt-1">
            {job.company}
          </p>

        </div>


        <CoverLetterForm
          jobId={jobId}
          resumeType={resumeType ?? "NEXORA"}
          resumeUrl={resumeUrl ?? ""}
        />

      </div>

    </div>
  );
}