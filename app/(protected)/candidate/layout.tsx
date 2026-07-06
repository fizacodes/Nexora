import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
    console.log("SESSION:", session);
  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "CANDIDATE") {
    redirect("/login");
  }

  return <>{children}</>;
}