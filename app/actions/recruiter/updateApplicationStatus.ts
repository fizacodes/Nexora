"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { revalidatePath } from "next/cache";
import { ApplicationStatus } from "@/generated/prisma/enums";

export async function updateApplicationStatus(
  applicationId: string,
  status: ApplicationStatus
) {
  const recruiter = await getCurrentRecruiter();

 const application = await prisma.application.findFirst({
  where: {
    id: applicationId,
    job: {
      recruiterProfileId: recruiter.recruiterProfileId!,
    },
  },
  include: {
    job: true,
  },
});

  if (!application) {
    throw new Error("Application not found.");
  }

  await prisma.application.update({
    where: {
      id: applicationId,
    },
    data: {
      status,
    },
  });

  await prisma.notification.create({
  data: {
    userId: application.userId,
    applicationId: application.id,

    type: "APPLICATION",

    title: "Application Status Updated",

    message: `Your application for "${application.job.title}" has been updated to ${status}.`,
  },
});

  revalidatePath(
    `/recruiter/show-job/${application.jobId}/applicant/${applicationId}`
  );

  return {
    success: true,
  };
}