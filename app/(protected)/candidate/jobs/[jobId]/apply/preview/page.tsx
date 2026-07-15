

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";
import PreviewForm from "./PreviewForm";


type Props = {
  params: Promise<{
    jobId: string;
  }>;

  searchParams: Promise<{
    resumeType?: string;
    resumeUrl?: string;
  }>;
};

export default async function PreviewPage({
  params,
  searchParams,
}: Props) {
  const { jobId } = await params;

  const { resumeType, resumeUrl } = await searchParams;

  const candidate = await getCurrentCandidate();

  if (!candidate) {
    notFound();
  }

  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
  });

  if (!job) {
    notFound();
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: candidate.userId,
    },
    include: {
      user: true,
      experiences: true,
      educations: true,
      skills: true,
    },
  });

  if (!profile) {
    notFound();
  }



  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Progress */}
        <div className="mb-6 text-sm text-gray-500">
          Resume
          <span className="mx-2">→</span>
          Cover Letter
          <span className="mx-2">→</span>

          <span className="font-semibold text-accent">
            Preview
          </span>

          <span className="mx-2">→</span>
          Submit
        </div>

        {/* Job Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold">
            {job.title}
          </h1>

          <p className="text-gray-500 mt-2">
            {job.company}
          </p>
        </div>

        <PreviewForm
          jobId={jobId}
          resumeType={resumeType ?? "NEXORA"}
          resumeUrl={resumeUrl ?? ""}
          profile={profile}
        />

      </div>
    </div>
  );
}