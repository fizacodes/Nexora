"use client";

import { useActionState } from "react";
import { saveProfile } from "@/app/actions/candidate/profile";

const initialState = {
  success: false,
  errors: {},
};

type Props = {
  profile: {
    headline: string | null;
    phone: string | null;
    location: string | null;
    summary: string | null;
  } | null;
};

export default function ProfileForm({ profile }: Props) {
  const [state, formAction, pending] = useActionState(
    saveProfile,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8"
    >
      <h1 className="text-3xl font-bold text-background">
        Edit Profile
      </h1>

      {/* Headline */}
      <div>
        <label className="mb-2 block font-medium">
          Professional Headline
        </label>

        <input
          type="text"
          name="headline"
          defaultValue={profile?.headline ?? ""}
          placeholder="Frontend Developer"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-accent"
        />

        <p className="mt-1 text-sm text-red-500">
          {state.errors?.headline?.[0]}
        </p>
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          type="text"
          name="phone"
          defaultValue={profile?.phone ?? ""}
          placeholder="+92 300 1234567"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-accent"
        />

        <p className="mt-1 text-sm text-red-500">
          {state.errors?.phone?.[0]}
        </p>
      </div>

      {/* Location */}
      <div>
        <label className="mb-2 block font-medium">
          Location
        </label>

        <input
          type="text"
          name="location"
          defaultValue={profile?.location ?? ""}
          placeholder="Lahore, Pakistan"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-accent"
        />

        <p className="mt-1 text-sm text-red-500">
          {state.errors?.location?.[0]}
        </p>
      </div>

      {/* Summary */}
      <div>
        <label className="mb-2 block font-medium">
          Professional Summary
        </label>

        <textarea
          name="bio"
          rows={6}
          defaultValue={profile?.summary ?? ""}
          placeholder="Write a short summary about yourself..."
          className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-accent"
        />

        <p className="mt-1 text-sm text-red-500">
          {state.errors?.summary?.[0]}
        </p>
      </div>

      <button
        disabled={pending}
        className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Saving..." : "Save Profile"}
      </button>
    </form>
  );
}