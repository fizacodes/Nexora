"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";

export async function getConversations() {
  const recruiter = await getCurrentRecruiter();

  if (!recruiter.recruiterProfile) {
    throw new Error("Recruiter profile not found.");
  }

  const conversations = await prisma.conversation.findMany({
    where: {
      recruiterProfileId: recruiter.recruiterProfile.id,
    },

    include: {
      candidate: {
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

    
  });

  return conversations;
}