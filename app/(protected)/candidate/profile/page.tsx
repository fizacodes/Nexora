import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

import ProfileHeader from "./ProfileHeader";
import SectionCard from "./SectionCard";

import {
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  Link,
} from "lucide-react";
import CandidateNavbar from "../components/Navbar";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <main className="bg-gray-50  min-h-screen   text-black">
     <CandidateNavbar/>
      <div className="max-w-3xl  mx-auto py-12 pt-5 space-y-8">

        <ProfileHeader
          user={{
            name: session.user.name ?? "",
            email: session.user.email ?? "",
          }}
          profile={profile}
        />

        <h2 className="text-2xl pt-6  font-semibold">
          Resume
        </h2>

        <SectionCard
          title="Resume"
          subtitle="Complete your resume"
          icon={<FileText size={34} />}
          href="/candidate/resume"
        />
       

        

      </div>

    </main>
  );
}