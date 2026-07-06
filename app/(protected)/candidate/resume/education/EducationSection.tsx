"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { deleteEducation } from "@/app/actions/candidate/deleteEducation";

type Education = {
  id: string;
  school: string;
  degree: string;
  field: string | null;
  startDate: Date | null;
  endDate: Date | null;
  grade: string | null;
  description: string | null;
  profileId: string;
};

export default function EducationSection({
  educations,
}: {
  educations: Education[];
}) {
  const router = useRouter();

  const formatDate = (date: Date | null) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Education</h1>

        <button
          onClick={() => router.push("/candidate/resume/education")}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          + Add Education
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {educations.length === 0 ? (
          <p className="text-sm text-gray-500">
            No education added yet
          </p>
        ) : (
          educations.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border bg-white p-4 shadow-sm"
            >
              <div className="flex justify-between">

                {/* Left Side */}
                <div>
                  <h2 className="text-lg font-semibold">
                    {edu.degree}
                  </h2>

                  <p className="text-sm text-gray-600">
                    {edu.school}
                  </p>

                  {edu.field && (
                    <p className="text-sm text-gray-500">
                      {edu.field}
                    </p>
                  )}

                  {(edu.startDate || edu.endDate) && (
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(edu.startDate)}
                      {edu.startDate || edu.endDate ? " - " : ""}
                      {formatDate(edu.endDate)}
                    </p>
                  )}

                  {edu.grade && (
                    <p className="text-xs text-gray-500">
                      Grade: {edu.grade}
                    </p>
                  )}
                </div>

                {/* Right Side */}
                <div className="flex gap-3">

                  <Link
                    href={`/candidate/resume/education/${edu.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ✏️
                  </Link>

                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={async () => {
                      await deleteEducation(edu.id);
                    }}
                  >
                    🗑
                  </button>

                </div>
              </div>

              {edu.description && (
                <p className="mt-3 text-sm text-gray-600">
                  {edu.description}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}