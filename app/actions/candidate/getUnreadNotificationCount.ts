"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function getUnreadNotificationCount() {
  const session = await auth();

  if (!session?.user?.id) {
    return 0;
  }

  return await prisma.notification.count({
    where: {
      userId: session.user.id,
      isRead: false,
    },
  });
}