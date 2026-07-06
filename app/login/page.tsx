"use client";

import { useActionState } from "react";
import { signOut, signIn } from "next-auth/react";
import { login } from "../actions/login";

const initialState = {
  success: false,
  fieldErrors: {} as Record<string, string>,
  error: "",
};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  async function handleGoogleLogin() {
    await signOut({ redirect: false });

    await signIn("google", {
      callbackUrl: "/post-login",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-105 p-6 border rounded-xl bg-white shadow-sm">
        <h1 className="text-2xl text-center text-background font-bold mb-6">
          Login
        </h1>

        <form action={formAction} className="space-y-4">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border text-background p-3 rounded"
            />

            {state.fieldErrors?.email && (
              <p className="text-red-500 text-sm mt-1">
                {state.fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border text-background p-3 rounded"
            />

            {state.fieldErrors?.password && (
              <p className="text-red-500 text-sm mt-1">
                {state.fieldErrors.password}
              </p>
            )}
          </div>

          {state.error && (
            <p className="text-red-500 text-sm text-center">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-accent text-background p-3 rounded disabled:opacity-50"
          >
            {pending ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 text-center text-gray-400">
          OR
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border p-3 rounded text-background bg-accent hover:bg-gray-50"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}