"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function getUnreadMessageCount() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      profile: true,
      recruiterProfile: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const count = await prisma.message.count({
    where: {
      isRead: false,

      // only messages from the other person
      senderId: {
        not: user.id,
      },

      conversation: {
        OR: [
          user.profile
            ? {
                candidateProfileId: user.profile.id,
              }
            : undefined,

          user.recruiterProfile
            ? {
                recruiterProfileId:
                  user.recruiterProfile.id,
              }
            : undefined,
        ].filter(Boolean) as any,
      },
    },
  });

  return count;
}