"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";

export async function getApplications() {
  try {
    const candidate = await getCurrentCandidate();

    const applications = await prisma.application.findMany({
      where: {
        userId: candidate.userId,
      },
      include: {
        job: true,
      }
    });

    return applications;
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    return [];
  }
}