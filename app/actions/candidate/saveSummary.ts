"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveSummary(summary: string) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const profile = await prisma.candidateProfile.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!profile) {
      return {
        success: false,
        message: "Candidate profile not found.",
      };
    }

    await prisma.candidateProfile.update({
      where: {
        id: profile.id,
      },
      data: {
        summary,
      },
    });

    revalidatePath("/candidate/profile"); // Change this if your profile page has a different route.

    return {
      success: true,
      message: "Summary saved successfully.",
    };
  } catch (error) {
    console.error("Error saving summary:", error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}