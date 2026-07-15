import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getCurrentRecruiter() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  

console.log("Session user:", session?.user);

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      recruiterProfile: true,
    },
  });
 



  if (!user) {
    throw new Error("User not found.");
  }
 
  if (user.role !== "RECRUITER") {
    throw new Error("Only recruiters can perform this action.");
  }

  return {
    id: user.id,
    userId: user.id,
    recruiterProfileId: user.recruiterProfile?.id,
    user,
    recruiterProfile: user.recruiterProfile,
  };
}