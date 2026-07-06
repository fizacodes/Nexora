"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { deleteSkill } from "@/app/actions/candidate/deleteSkill";

type Skill = {
  id: string;
  name: string;
  profileId: string;
};

export default function SkillSection({
  skills,
}: {
  skills: Skill[];
}) {
  const router = useRouter();

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Skills</h1>

        <button
          onClick={() => router.push("/candidate/resume/skill")}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          + Add Skill
        </button>
      </div>

      {/* Skills */}
      {skills.length === 0 ? (
        <p className="text-sm text-gray-500">
          No skills added yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-sm"
            >
              <span className="font-medium">
                {skill.name}
              </span>

              <Link
                href={`/candidate/resume/skill/${skill.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                ✏️
              </Link>

              <button
                onClick={async () => {
                  await deleteSkill(skill.id);
                }}
                className="text-red-500 hover:text-red-700"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}