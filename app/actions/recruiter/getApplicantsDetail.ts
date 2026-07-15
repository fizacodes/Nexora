"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";

export async function getApplicationDetails(
  jobId: string,
  applicationId: string
) {
  const recruiter = await getCurrentRecruiter();

  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      jobId,

      job: {
        recruiterProfileId: recruiter.recruiterProfileId!,
      },
    },

    include: {
      user: true,

      profile: {
        include: {
          skills: true,
          experiences: true,
          educations: true,
        },
      },

      job: true,
    },
  });

  if (!application) {
    throw new Error("Application not found.");
  }

  return application;
}