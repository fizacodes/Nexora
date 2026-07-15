"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";

export async function getJobApplications(jobId: string) {
  const recruiter = await getCurrentRecruiter();

  // Ensure the recruiter owns this job
  const job = await prisma.job.findFirst({
    where: {
      id: jobId,
      recruiterProfileId: recruiter.recruiterProfile?.id,
    },
  });

  if (!job) {
    throw new Error("Job not found or unauthorized");
  }

  const applications = await prisma.application.findMany({
    where: {
      jobId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      profile: true,
    },
    orderBy: {
      appliedAt: "desc",
    },
  });

  return applications;
}