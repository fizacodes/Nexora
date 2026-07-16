"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";

export async function getConversation(conversationId: string) {
  const recruiter = await getCurrentRecruiter();

  if (!recruiter.recruiterProfile) {
    throw new Error("Recruiter profile not found.");
  }

  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      recruiterProfileId: recruiter.recruiterProfile.id,
    },

    include: {
      candidate: {
        include: {
          user: true,
        },
      },

      recruiter: {
        include: {
          user: true,
        },
      },

      job: true,

      messages: {
        include: {
          sender: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found.");
  }

  return conversation;
}