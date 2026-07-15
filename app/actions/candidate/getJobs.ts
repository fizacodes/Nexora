"use server";

import { prisma } from "@/lib/prisma";

export async function getJobs(
  query?: string,
  location?: string
) {
  try {
    const jobs = await prisma.job.findMany({
      where: {
        AND: [
          query
            ? {
                OR: [
                  {
                    title: {
                      contains: query,
                      mode: "insensitive",
                    },
                  },
                  {
                    company: {
                      contains: query,
                      mode: "insensitive",
                    },
                  },
                  {
                    description: {
                      contains: query,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {},

          location
            ? {
                location: {
                  contains: location,
                  mode: "insensitive",
                },
              }
            : {},
        ],
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return jobs;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}