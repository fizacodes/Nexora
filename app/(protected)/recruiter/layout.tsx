import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
    console.log("SESSION:", session);
  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "RECRUITER") {
    redirect("/login");
  }

  return <>{children}</>;
}