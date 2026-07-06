"use client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useActionState } from "react";
import { saveExperience } from "@/app/actions/candidate/saveExperience";
import { z } from "zod";
import { experienceSchema } from "@/lib/validators/ExperienceSchema";
import { Experience } from "@/generated/prisma/client";

export type ExperienceValues = z.infer<typeof experienceSchema>;

export type ExperienceFormState = {
  success: boolean;
  message?: string;
  errors: {
    jobTitle?: string[];
    company?: string[];
    location?: string[];
    employmentType?: string[];
    description?: string[];
  };
};

const initialState: ExperienceFormState = {
  success: false,
  message: "",
  errors: {
    jobTitle: undefined,
    company: undefined,
    location: undefined,
    employmentType: undefined,
    description: undefined,
  },
};
type Props = {
  experience?: Experience | null;
};

export default function ExperiencePage({
  experience,
}: Props) {
  const [state, formAction, isPending] =
useActionState(
    saveExperience,
    initialState
);

const hasSuccessMessage =
state.success && !!state.message;

  return (
    <div className="min-h-screen bg-gray-50 text-black py-10">
      <div className="mx-auto w-full max-w-3xl">
        <Link
  href="/candidate/resume"
  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6 transition-colors"
>
  <ArrowLeft className="h-4 w-4" />
  Back to Resume
</Link>
       <div className="bg-white rounded-xl  shadow-sm p-8">
  <div className="mb-8">
  <h1 className="text-3xl font-bold text-gray-900">
    Experience
  </h1>

  <p className="mt-2 text-gray-600">
    Add your work experience to help employers understand your background.
  </p>
</div>

<form action={formAction} className="space-y-6">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


    <input
  type="hidden"
  name="experienceId"
  defaultValue={experience?.id}
/>
    {/* Job Title */}
    <div>
  <label className="block mb-2 text-sm font-medium">
    Job Title
  </label>

  <input
    name="jobTitle"
      defaultValue={experience?.jobTitle}
    className="
      w-full
      rounded-lg
      border
      border-gray-300
      px-4
      py-2.5
      focus:outline-none
      focus:ring-2
      focus:ring-blue-600
    "
  />
   { state.errors.jobTitle && (
    <p className="mt-1 text-sm text-red-500">
      {state.errors.jobTitle[0]}
    </p>
  )}
</div>

    {/* Company */}
    <div>
  <label className="block mb-2 text-sm font-medium">
    Company Name
  </label>

  <input
    name="company"
    defaultValue={experience?.company}
    className="
      w-full
      rounded-lg
      border
      border-gray-300
      px-4
      py-2.5
      focus:outline-none
      focus:ring-2
      focus:ring-blue-600
    "
  />
  { state.errors.company && (
    <p className="mt-1 text-sm text-red-500">
      {state.errors.company[0]}
    </p>
  )}
</div>

    {/* Location */}
    <div>
  <label className="block mb-2 text-sm font-medium">
   Location
  </label>

  <input
    name="location"
    defaultValue={experience?.location ?? ""}
    className="
      w-full
      rounded-lg
      border
      border-gray-300
      px-4
      py-2.5
      focus:outline-none
      focus:ring-2
      focus:ring-blue-600
    "
  />
  { state.errors.location && (
    <p className="mt-1 text-sm text-red-500">
      {state.errors.location[0]}
    </p>
  )}
</div>

    {/* Employment Type */}
    <div>
  <label className="block mb-2 text-sm font-medium">
    Employment Type
  </label>

  <input
    name="employmentType"
    defaultValue={experience?.employmentType ?? ""}
    className="
      w-full
      rounded-lg
      border
      border-gray-300
      px-4
      py-2.5
      focus:outline-none
      focus:ring-2
      focus:ring-blue-600
    "
  />
  { state.errors.employmentType && (
    <p className="mt-1 text-sm text-red-500">
      {state.errors.employmentType[0]}
    </p>
  )}
</div>

  </div>

  {/* Description */}
  <label className="block mb-2 text-sm font-medium">
   Description
  </label>
  <textarea
    name="description"
    defaultValue={experience?.description ?? ""}
    rows={5}
    className="
      w-full
      rounded-lg
      border
      border-gray-300
      px-4
      py-3
      resize-none
      focus:ring-2
      focus:ring-blue-600
    "
  />
  { state.errors.description && (
    <p className="mt-1 text-sm text-red-500">
      {state.errors.description[0]}
    </p>
  )}

<div className="flex justify-end pt-6">
    <button
      type="submit"
      disabled={isPending}
      className="rounded-lg bg-accent px-6 py-2.5 text-background font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
     {experience
  ? "Update Experience"
  : "Save Experience"}
    </button>
    {hasSuccessMessage && state.message && (
  <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
    {state.message}
  </div>
)}
  </div>

</form>
</div>
      </div>
    </div>
  );
}