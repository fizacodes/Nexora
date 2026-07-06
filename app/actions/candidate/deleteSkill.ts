"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteSkill(id: string) {
  await prisma.skill.delete({
    where: { id },
  });

  revalidatePath("/candidate/resume");
}