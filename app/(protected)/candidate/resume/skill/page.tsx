"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useActionState } from "react";
import { z } from "zod";
import { Skill } from "@/generated/prisma/client";

import { saveSkill } from "@/app/actions/candidate/saveSkill";
import { skillSchema } from "@/lib/validators/SkillSchema";

export type SkillValues = z.infer<typeof skillSchema>;

export type SkillFormState = {
  success: boolean;
  message?: string;
  errors: {
    name?: string[];
  };
};

const initialState: SkillFormState = {
  success: false,
  message: "",
  errors: {
    name: undefined,
  },
};

type Props = {
  skill?: Skill | null;
};

export default function SkillPage({
  skill,
}: Props) {
  const [state, formAction, isPending] = useActionState(
    saveSkill,
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
              Skills
            </h1>

            <p className="mt-2 text-gray-600">
              Add your professional skills to showcase your expertise.
            </p>
          </div>

          <form action={formAction} className="space-y-6">

            <input
              type="hidden"
              name="skillId"
              defaultValue={skill?.id}
            />

            {/* Skill */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Skill
              </label>

              <input
                name="name"
                defaultValue={skill?.name}
                placeholder="e.g. React.js"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {state.errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.name[0]}
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
                  : skill
                  ? "Update Skill"
                  : "Save Skill"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}