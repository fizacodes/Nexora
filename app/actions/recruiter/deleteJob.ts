"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteJob(jobId: string) {
  const recruiter = await getCurrentRecruiter();

  if (!recruiter.recruiterProfileId) {
    throw new Error("Recruiter profile not found.");
  }

  const job = await prisma.job.findFirst({
    where: {
      id: jobId,
      recruiterProfileId: recruiter.recruiterProfileId,
    },
  });

  if (!job) {
    throw new Error("Job not found or you are not authorized to delete it.");
  }

  await prisma.job.delete({
    where: {
      id: jobId,
    },
  });

  revalidatePath("/recruiter/show-job");

  redirect("/recruiter/show-job");
}