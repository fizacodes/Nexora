"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function getNotifications() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return await prisma.notification.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}