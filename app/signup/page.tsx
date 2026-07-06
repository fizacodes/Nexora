"use client";

import { useActionState } from "react";
import { signup } from "../actions/signup";

const initialState = {
  success: false,
  errors: {} as Record<string, string>,
};

export default function SignupPage() {
  const [state, action, isPending] = useActionState(signup, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center text-background bg-gray-50">
      <form action={action} className="w-100 rounded-xl bg-white p-8 shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-background text-center">Create Account</h1>

        {/* NAME */}
        <div>
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border text-background p-3 rounded-md"
          />
          {state?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md"
          />
          {state?.errors?.email && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.email}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md"
          />
          {state?.errors?.password && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.password}
            </p>
          )}
        </div>
      <div>
  <label className="block mb-2 font-medium">Select Role</label>

  <select
    name="role"
    className="w-full border p-3 rounded-md"
    defaultValue=""
  >
    <option value="" disabled>
      Choose role
    </option>
    <option value="CANDIDATE">Candidate</option>
    <option value="RECRUITER">Recruiter</option>
    <option value="ADMIN">Admin</option>
  </select>

  {state?.errors?.role && (
    <p className="text-red-500 text-sm mt-1">
      {state.errors.role}
    </p>
  )}
</div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-accent text-background font-bold p-3 rounded-md  disabled:opacity-50"
        >
          {isPending ? "Creating account..." : "Sign Up"}
        </button>

        {/* SUCCESS MESSAGE */}
        {state?.success && (
          <p className="text-green-600 text-center">
            Account created successfully!
          </p>
        )}
      </form>
    </div>
  );
}