import ExperienceSection from "./ExperienceSection";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EducationSection from "./education/EducationSection";
import SkillSection from "./skill/SkillSection";
import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";
import SummarySection from "./summary";
import BackButton from "../components/BackButton";

export default async function ResumePage() {
  const session = await auth();

  const candidate = await getCurrentCandidate();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
    include: {
      experiences: true,
      educations: true,
      skills: true,
    },
  });

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 md:px-8 lg:px-10 lg:py-10">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {candidate.user.name || "No Name"}
          </h1>

          <p className="mt-2 text-lg text-gray-600 sm:text-xl">
            {candidate.profile.headline || "No Headline"}
          </p>

          <div className="mt-5 space-y-1 text-sm text-gray-500 sm:text-base">
            <p>{candidate.user.email}</p>
            <p>{candidate.profile.location || "No Location"}</p>
          </div>
        </div>

        {/* Summary */}
        <SummarySection summary={candidate.profile.summary} />

        {/* Experience */}
        <ExperienceSection experiences={profile?.experiences || []} />

        {/* Education */}
        <EducationSection educations={profile?.educations || []} />

        {/* Skills */}
        <SkillSection skills={profile?.skills || []} />
      </div>
    </div>
  );
}