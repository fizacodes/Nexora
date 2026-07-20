"use client";

import { useActionState } from "react";
import { createJob } from "@/app/actions/recruiter/saveJob";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function JobForm({
  job,
  isEdit = false,
}: {
  job?: any;
  isEdit?: boolean;
}) {
  const [state, formAction, isPending] = useActionState(
    createJob,
    initialState
  );

  return (
    <div className="bg-white">
      <form
        action={formAction}
        className="mx-auto max-w-4xl space-y-8 bg-white px-4 py-6 text-black sm:px-6 lg:px-8"
      >
        {/* Job Information */}
        <div className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
            Job Information
          </h2>

          <div className="space-y-5">
            <input type="hidden" name="jobId" defaultValue={job?.id} />

            {/* Title */}
            <div>
              <label className="font-medium">Job Title</label>

              <input
                name="title"
                defaultValue={job?.title}
                placeholder="Frontend Developer"
                className="mt-2 w-full rounded-lg border p-3 outline-none transition focus:border-accent"
              />

              <p className="mt-1 text-sm text-red-500">
                {state.errors?.title}
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="font-medium">Job Description</label>

              <textarea
                name="description"
                defaultValue={job?.description}
                rows={10}
                placeholder="Describe the role, responsibilities, qualifications, benefits, and any other important details..."
                className="mt-2 w-full resize-y rounded-lg border p-3 outline-none transition focus:border-accent"
              />

              <p className="mt-1 text-sm text-red-500">
                {state.errors?.description}
              </p>
            </div>

            {/* Location */}
            <div>
              <label className="font-medium">Location</label>

              <input
                name="location"
                defaultValue={job?.location}
                placeholder="Lahore, Pakistan"
                className="mt-2 w-full rounded-lg border p-3 outline-none transition focus:border-accent"
              />

              <p className="mt-1 text-sm text-red-500">
                {state.errors?.location}
              </p>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
            Job Details
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Job Type */}
            <div>
              <label className="font-medium">Job Type</label>

              <select
                name="type"
                defaultValue={job?.type}
                className="mt-2 w-full rounded-lg border p-3 outline-none transition focus:border-accent"
              >
                <option value="">Select Type</option>
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERNSHIP">Internship</option>
                <option value="REMOTE">Remote</option>
              </select>

              <p className="mt-1 text-sm text-red-500">
                {state.errors?.type}
              </p>
            </div>

            {/* Minimum Salary */}
            <div>
              <label className="font-medium">Minimum Salary</label>

              <input
                type="number"
                name="salaryMin"
                defaultValue={job?.salaryMin}
                placeholder="50000"
                className="mt-2 w-full rounded-lg border p-3 outline-none transition focus:border-accent"
              />
            </div>

            {/* Maximum Salary */}
            <div>
              <label className="font-medium">Maximum Salary</label>

              <input
                type="number"
                name="salaryMax"
                defaultValue={job?.salaryMax}
                placeholder="100000"
                className="mt-2 w-full rounded-lg border p-3 outline-none transition focus:border-accent"
              />
            </div>
          </div>

          {/* Remote */}
          <div className="mt-6 flex items-center gap-3">
            <input
              type="checkbox"
              name="isRemote"
              defaultChecked={job?.isRemote}
              className="h-4 w-4"
            />

            <label>This is a remote job</label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-accent px-8 py-3 font-semibold text-background transition hover:opacity-90 disabled:opacity-50 sm:w-auto"
          >
            {isPending
              ? isEdit
                ? "Updating..."
                : "Posting..."
              : isEdit
              ? "Update Job"
              : "Post Job"}
          </button>
        </div>

        {state.message && (
          <p
            className={`text-center ${
              state.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}