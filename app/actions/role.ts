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
}