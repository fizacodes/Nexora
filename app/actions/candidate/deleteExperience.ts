"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteExperience(id: string) {
  await prisma.experience.delete({
    where: { id },
  });

  revalidatePath("/candidate/resume");
}