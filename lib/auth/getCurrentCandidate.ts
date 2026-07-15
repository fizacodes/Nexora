import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function getCurrentCandidate() {
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
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  if (user.role !== "CANDIDATE") {
    throw new Error("Only candidates can perform this action.");
  }

  if (!user.profile) {
    throw new Error("Candidate profile not found.Fill profile to proceed");
  }

  return {
    id: user.id,
    userId: user.id,
    profileId: user.profile.id,
    user,
    profile: user.profile,
  };
}