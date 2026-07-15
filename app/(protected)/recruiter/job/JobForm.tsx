"use client";

import { useActionState } from "react";
import { createJob } from "@/app/actions/recruiter/saveJob";
import { useState } from "react";
import JobDescriptionEditor from "./JobDescriptionEditor";

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
  const [description, setDescription] = useState("");
  const [state, formAction, isPending] = useActionState(
    createJob,
    initialState,
  );

  return (
    <div className="bg-white">
      <form
        action={formAction}
        className="mx-auto bg-white text-black max-w-4xl space-y-8 p-8"
      >
        {/* Basic Information */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">Job Information</h2>

          <div className="space-y-5">
            <div>
              <label className="font-medium">Job Title</label>

              <input
                name="title"
                defaultValue={job?.title}
                className="mt-2 w-full rounded-lg border p-3"
                placeholder="Frontend Developer"
              />

              <p className="mt-1 text-sm text-red-500">{state.errors?.title}</p>
            </div>

            <input type="hidden" name="jobId" value={job?.id} />

            <div>
              <label className="font-medium">Job Description</label>

              <JobDescriptionEditor onChange={setDescription} />

              <input
                type="hidden"
                defaultValue={job?.description}
                name="description"
                value={description}
              />

              <p className="mt-1 text-sm text-red-500">
                {state.errors?.description}
              </p>
            </div>

            <div>
              <label className="font-medium">Location</label>

              <input
                name="location"
                defaultValue={job?.location}
                className="mt-2 w-full rounded-lg border p-3"
                placeholder="Lahore, Pakistan"
              />

              <p className="mt-1 text-sm text-red-500">
                {state.errors?.location}
              </p>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">Job Details</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label>Job Type</label>

              <select
                name="type"
                defaultValue={job?.type}
                className="mt-2 w-full rounded-lg border p-3"
              >
                <option value="">Select Type</option>

                <option value="FULL_TIME">Full Time</option>

                <option value="PART_TIME">Part Time</option>

                <option value="CONTRACT">Contract</option>

                <option value="INTERNSHIP">Internship</option>

                <option value="REMOTE">Remote</option>
              </select>

              <p className="mt-1 text-sm text-red-500">{state.errors?.type}</p>
            </div>

            <div>
              <label>Minimum Salary</label>

              <input
                type="number"
                name="salaryMin"
                className="mt-2 w-full rounded-lg border p-3"
                placeholder="50000"
              />
            </div>

            <div>
              <label>Maximum Salary</label>

              <input
                type="number"
                name="salaryMax"
                className="mt-2 w-full rounded-lg border p-3"
                placeholder="100000"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={job?.isRemote}
              name="isRemote"
              className="h-4 w-4"
            />

            <label>This is a remote job</label>
          </div>
        </div>

        {/* Submit */}

        <div className="flex justify-end">
          <button
            disabled={isPending}
            className="
          rounded-xl 
          bg-accent 
          px-8 
          py-3 
          font-semibold 
          text-background
          disabled:opacity-50
          "
          >
            {isPending ? "Posting..." : "Post Job"}
          </button>
        </div>

        {state.message && (
          <p className={state.success ? "text-green-600" : "text-red-600"}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
