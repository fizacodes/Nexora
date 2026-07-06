
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useActionState } from "react";
import { z } from "zod";
import { Education } from "@/generated/prisma/client";

import { saveEducation } from "@/app/actions/candidate/saveEducation";
import { educationSchema } from "@/lib/validators/EducationSchema";

export type EducationValues = z.infer<typeof educationSchema>;

export type EducationFormState = {
  success: boolean;
  message?: string;
  errors: {
    school?: string[];
    degree?: string[];
    field?: string[];
    startDate?: string[];
    endDate?: string[];
    grade?: string[];
    description?: string[];
  };
};

const initialState: EducationFormState = {
  success: false,
  message: "",
  errors: {
    school: undefined,
    degree: undefined,
    field: undefined,
    startDate: undefined,
    endDate: undefined,
    grade: undefined,
    description: undefined,
  },
};

type Props = {
  education?: Education | null;
};

export default function EducationPage({
  education,
}: Props) {
  const [state, formAction, isPending] = useActionState(
    saveEducation,
    initialState
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 text-black">
      <div className="mx-auto w-full max-w-3xl">

        <Link
          href="/candidate/resume"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resume
        </Link>

        <div className="rounded-xl bg-white p-8 shadow-sm">

          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Education
            </h1>

            <p className="mt-2 text-gray-600">
              Add your educational background to strengthen your resume.
            </p>
          </div>

          <form action={formAction} className="space-y-6">

            <input
              type="hidden"
              name="educationId"
              defaultValue={education?.id}
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* School */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  School
                </label>

                <input
                  name="school"
                  defaultValue={education?.school}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {state.errors.school && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.school[0]}
                  </p>
                )}
              </div>

              {/* Degree */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Degree
                </label>

                <input
                  name="degree"
                  defaultValue={education?.degree}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {state.errors.degree && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.degree[0]}
                  </p>
                )}
              </div>

              {/* Field of Study */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Field of Study
                </label>

                <input
                  name="field"
                  defaultValue={education?.field ?? ""}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {state.errors.field && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.field[0]}
                  </p>
                )}
              </div>

                            {/* Start Date */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Start Date
                </label>

                <input
                  type="date"
                  name="startDate"
                  defaultValue={
                    education?.startDate
                      ? new Date(education.startDate)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {state.errors.startDate && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.startDate[0]}
                  </p>
                )}
              </div>

              {/* End Date */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  End Date
                </label>

                <input
                  type="date"
                  name="endDate"
                  defaultValue={
                    education?.endDate
                      ? new Date(education.endDate)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {state.errors.endDate && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.endDate[0]}
                  </p>
                )}
              </div>

              {/* Grade */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Grade / CGPA
                </label>

                <input
                  name="grade"
                  defaultValue={education?.grade ?? ""}
                  placeholder="e.g. 3.85 CGPA"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {state.errors.grade && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.errors.grade[0]}
                  </p>
                )}
              </div>

            </div>

            {/* Description */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                name="description"
                rows={5}
                defaultValue={education?.description ?? ""}
                placeholder="Mention achievements, coursework, activities, honors..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {state.errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.description[0]}
                </p>
              )}
            </div>

            {/* Success Message */}

            {state.success && state.message && (
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {state.message}
              </div>
            )}

            {/* Submit Button */}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-accent px-6 py-2.5 font-medium text-background hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPending
                  ? "Saving..."
                  : education
                  ? "Update Education"
                  : "Save Education"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}