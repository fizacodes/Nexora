import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

import CandidateNavbar from "../../components/Navbar";
import BackButton from "../../components/BackButton";
import ProfileForm from "./ProfileForm";

export default async function EditProfilePage() {
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
    <main className="min-h-screen bg-gray-50 text-black">
      <CandidateNavbar />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <BackButton />
        </div>

        <ProfileForm profile={profile} />
      </div>
    </main>
  );
}