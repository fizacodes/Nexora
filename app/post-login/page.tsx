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
    select: {
      role: true,
    },
  });

  if (!user?.role) {
    redirect("/role");
  }

  if (user.role === "CANDIDATE") {
    redirect("/candidate");
  }

  if (user.role === "RECRUITER") {
    redirect("/recruiter");
  }

  redirect("/role");
}