"use client";

import { useActionState } from "react";
import { saveRecruiterProfile } from "@/app/actions/recruiter/saveProfile";
import BackButton from "../components/BackButton";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function RecruiterProfileForm({
  recruiter,
  profile,
}: {
  recruiter: any;
  profile: any;
}) {
  const [state, formAction, isPending] = useActionState(
    saveRecruiterProfile,
    initialState
  );

  return (
    <div className=" bg-white">
      <BackButton/>
    <form action={formAction} className="max-w-5xl bg-white  mx-auto text-black p-8 space-y-10">
  <div className="rounded-xl border bg-white p-6 shadow-sm">
     <h3 className="text-red-600">Complete this profile Information to proceed further.</h3>
  <h2 className="text-2xl font-semibold mb-6">
    Recruiter Information
  </h2>
 

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label>Full Name</label>

      <input
        name="fullName"
        defaultValue={profile?.fullName ?? recruiter.name ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />

      <p className="text-sm text-red-500 mt-1">
        {state.errors?.fullName}
      </p>
    </div>

    <div>
      <label>Job Title</label>

      <input
        name="jobTitle"
        defaultValue={profile?.jobTitle ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />

      <p className="text-sm text-red-500 mt-1">
        {state.errors?.jobTitle}
      </p>
    </div>

    <div>
      <label>Phone</label>

      <input
        name="phone"
        defaultValue={profile?.phone ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />
    </div>

  </div>
</div>

<div className="rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="mb-6 text-2xl font-semibold">
    Company Information
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label>Company Name</label>

      <input
        name="companyName"
        defaultValue={profile?.companyName ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />

      <p className="mt-1 text-sm text-red-500">
        {state.errors?.companyName}
      </p>
    </div>

    <div>
      <label>Company Email</label>

      <input
        type="email"
        name="companyEmail"
        defaultValue={profile?.companyEmail ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />

      <p className="mt-1 text-sm text-red-500">
        {state.errors?.companyEmail}
      </p>
    </div>

    <div>
      <label>Company Website</label>

      <input
        type="url"
        name="companyWebsite"
        defaultValue={profile?.companyWebsite ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />

      <p className="mt-1 text-sm text-red-500">
        {state.errors?.companyWebsite}
      </p>
    </div>

    <div>
      <label>Industry</label>

      <input
        name="industry"
        defaultValue={profile?.industry ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />
    </div>

    <div>
      <label>Company Size</label>

      <select
        name="companySize"
        defaultValue={profile?.companySize ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      >
        <option value="">Select Company Size</option>
        <option value="STARTUP">Startup</option>
        <option value="SMALL">Small</option>
        <option value="MEDIUM">Medium</option>
        <option value="LARGE">Large</option>
        <option value="ENTERPRISE">Enterprise</option>
      </select>

      <p className="mt-1 text-sm text-red-500">
        {state.errors?.companySize}
      </p>
    </div>

  </div>
</div>



<div className="rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="mb-6 text-2xl font-semibold">
    Company Location
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label>Country</label>

      <input
        name="country"
        defaultValue={profile?.country ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />
    </div>

    <div>
      <label>City</label>

      <input
        name="city"
        defaultValue={profile?.city ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />
    </div>

    <div className="md:col-span-2">
      <label>Address</label>

      <input
        name="address"
        defaultValue={profile?.address ?? ""}
        className="mt-2 w-full rounded-lg border p-3"
      />
    </div>

  </div>
</div>

<div className="rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="mb-6 text-2xl font-semibold">
    About Company
  </h2>

  <textarea
    name="description"
    rows={6}
    defaultValue={profile?.description ?? ""}
    className="w-full rounded-lg border p-4"
    placeholder="Tell candidates about your company..."
  />

  <p className="mt-1 text-sm text-red-500">
    {state.errors?.description}
  </p>
</div>

<div className="flex flex-col items-end gap-2">
  {!state.success && state.message && (
    <p className="text-sm text-red-500">
      {state.message}
    </p>
  )}

  <button
    type="submit"
    disabled={isPending}
    className="rounded-xl bg-accent px-8 py-3 font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {isPending ? "Saving..." : "Save Profile"}
  </button>
    {!state.success && state.message && (
    <p className="text-sm text-red-500">
      {state.message}
    </p>
  )}
</div>

    </form>
    </div>
  );
}