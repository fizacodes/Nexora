"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";

export async function getOrCreateConversation(
  jobId: string,
  candidateProfileId: string
) {
  const recruiter = await getCurrentRecruiter();

  if (!recruiter.recruiterProfile) {
    throw new Error("Recruiter profile not found.");
  }

  // Verify recruiter owns this job
  const job = await prisma.job.findFirst({
    where: {
      id: jobId,
      recruiterProfileId: recruiter.recruiterProfile.id,
    },
  });

  if (!job) {
    throw new Error("Unauthorized");
  }

  // Check if conversation already exists
  const existingConversation = await prisma.conversation.findUnique({
    where: {
      recruiterProfileId_candidateProfileId_jobId: {
        recruiterProfileId: recruiter.recruiterProfile.id,
        candidateProfileId,
        jobId,
      },
    },
  });

  if (existingConversation) {
    return existingConversation;
  }

  // Create new conversation
  const conversation = await prisma.conversation.create({
    data: {
      recruiterProfileId: recruiter.recruiterProfile.id,
      candidateProfileId,
      jobId,
    },
  });

  return conversation;
}