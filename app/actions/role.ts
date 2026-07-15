"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import type { Role } from "@/type/next-auth";

export async function setRole(formData: FormData) {
  const role = formData.get("role") as Role;

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  if (!role) {
    throw new Error("Role is required");
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      role,
    },
  });

  if (role === "CANDIDATE") {
    await prisma.candidateProfile.upsert({
      where: {
        userId: session.user.id,
      },
      update: {},
      create: {
        userId: session.user.id,
      },
    });
  }

  if (role === "RECRUITER") {
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        name: true,
      },
    });

    await prisma.recruiterProfile.upsert({
      where: {
        userId: session.user.id,
      },
      update: {},
      create: {
        userId: session.user.id,
        fullName: user?.name ?? "",
      },
    });
  }
}