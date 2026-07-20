import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function PostLoginPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

const user = await prisma.user.findUnique({
  where: {
    id: session.user.id,
  },
  include: {
    profile: true,
    recruiterProfile: true,
  },
});

  if (!user?.role) {
    redirect("/role");
  }

  if (user.role === "CANDIDATE") {
    if (!user.profile) {
      redirect("/candidate/profile");
    }

    redirect("/candidate");
  }

  if (user.role === "RECRUITER") {
    if (!user.recruiterProfile) {
      redirect("/recruiter/profile");
    }

    redirect("/recruiter");
  }

  redirect("/role");
}