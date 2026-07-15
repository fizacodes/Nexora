import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import RecruiterProfileForm from "./RecruiterProfileForm";
import EmployerNavbar from "../components/Navbar";

export default async function Page() {
  const recruiter = await getCurrentRecruiter();

  if (!recruiter) {
    redirect("/login");
  }

  const profile = await prisma.recruiterProfile.findUnique({
    where: {
      userId: recruiter.userId,
    },
  });

  return (
    <div>
        <EmployerNavbar/>
    <RecruiterProfileForm
      recruiter={recruiter.user}
      profile={profile}
    />
    </div>
  );
}