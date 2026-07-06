"use client";

import { useRouter } from "next/navigation";
import { deleteExperience } from "@/app/actions/candidate/deleteExperience";
import Link from "next/link";
type Experience = {
  id: string;
  jobTitle: string;
  company: string;
  location: string | null;
  employmentType: string | null;
  description: string | null;
  profileId: string;
};

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  const router = useRouter();

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Work Experience</h1>

        {/* ➕ Add Button */}
        <button
          onClick={() => router.push("/candidate/resume/experience")}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          + Add Experience
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {experiences.length === 0 ? (
          <p className="text-gray-500 text-sm">No experience added yet</p>
        ) : (
          experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border bg-white p-4 shadow-sm"
            >
              <div className="flex justify-between">
                {/* Left side */}
                <div>
                  <h2 className="font-semibold text-lg">{exp.jobTitle}</h2>

                  <p className="text-sm text-gray-600">
                    {exp.company} • {exp.location}
                  </p>

                  {exp.employmentType && (
                    <span className="text-xs text-gray-500">
                      {exp.employmentType}
                    </span>
                  )}
                </div>

                <div>
                  <Link href={`/candidate/resume/experience/${exp.id}`}>
                    ✏️ Edit
                  </Link>
                </div>

                {/* Right side actions */}
                <div className="flex gap-3">
                  {/* Delete */}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={async () => {
                      await deleteExperience(exp.id);
                    }}
                  >
                    🗑
                  </button>
                </div>
              </div>

              {exp.description && (
                <p className="mt-3 text-sm text-gray-600">{exp.description}</p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
