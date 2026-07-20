"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function getConversation(conversationId: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      OR: [
        {
          recruiter: {
            userId: session.user.id,
          },
        },
        {
          candidate: {
            userId: session.user.id,
          },
        },
      ],
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


  // Mark messages as read
  await prisma.message.updateMany({
    where: {
      conversationId,

      senderId: {
        not: session.user.id,
      },

      isRead: false,
    },

    data: {
      isRead: true,
    },
  });


  return conversation;
}