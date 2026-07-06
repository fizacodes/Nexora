import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import ExperienceSection from "./ExperienceSection";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EducationSection from "./education/EducationSection";
import SkillSection from "./skill/SkillSection";

export default async function ResumePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
    include: {
      experiences: true,
      educations:true,
      skills:true
    },
  });
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-8 py-10">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Fiza Shahid
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            Frontend Developer
          </p>

          <p className="mt-4 text-gray-500">
            fiza@gmail.com
          </p>

          <p className="text-gray-500">
            Lahore, Pakistan
          </p>
        </div>

        {/* Summary */}
        <section>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-gray-900">
              Summary
            </h2>

            <div className="flex items-center gap-2">
              <Link
                href="/candidate/resume/summary"
                aria-label="Edit summary"
                className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition hover:border-sky-200 hover:text-sky-700 hover:shadow-md"
              >
                <Pencil size={18} />
              </Link>

              <button
                type="button"
                aria-label="Delete summary"
                className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition hover:border-rose-200 hover:text-rose-600 hover:shadow-md"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
            <p className="leading-8 text-gray-700">
        
            </p>
          </div>
        </section>


         {/* Experience */}
        
        
           <ExperienceSection experiences={profile?.experiences || []} />
           <EducationSection educations={profile?.educations || []}/>
           <SkillSection skills={profile?.skills || []}/>

      </div>
    </div>
  );
}