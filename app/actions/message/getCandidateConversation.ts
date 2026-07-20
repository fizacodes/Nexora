"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";

export async function getCandidateConversations() {
  const candidate = await getCurrentCandidate();

  const conversations = await prisma.conversation.findMany({
    where: {
      candidateProfileId: candidate.profileId,
    },

    include: {
      recruiter: {
        include: {
          user: true,
        },
      },

      job: {
        select: {
          title: true,
        },
      },

      messages: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
        include: {
          sender: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return conversations;
}