"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { setRole } from "@/app/actions/role";

export default function SelectRolePage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleContinue() {
    if (!selectedRole) return;

    const formData = new FormData();
    formData.append("role", selectedRole);

    startTransition(async () => {
      await setRole(formData);

      if (selectedRole === "CANDIDATE") {
        router.push("/candidate");
      } else if (selectedRole === "RECRUITER") {
        router.push("/recruiter");
      }
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white text-center">
            Choose Your Role
          </h1>

          <p className="text-slate-400 text-center mt-2">
            Select how you want to use the platform
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <button
              type="button"
              onClick={() => setSelectedRole("CANDIDATE")}
              className={`p-6 rounded-2xl border transition-all text-left ${
                selectedRole === "CANDIDATE"
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-slate-700 hover:border-slate-500"
              }`}
            >
              <div className="text-5xl mb-4">👨‍💻</div>

              <h2 className="text-xl font-semibold text-white">
                Candidate
              </h2>

              <p className="text-slate-400 mt-2">
                Search jobs, apply to opportunities, and manage your profile.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("RECRUITER")}
              className={`p-6 rounded-2xl border transition-all text-left ${
                selectedRole === "RECRUITER"
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-slate-700 hover:border-slate-500"
              }`}
            >
              <div className="text-5xl mb-4">🏢</div>

              <h2 className="text-xl font-semibold text-white">
                Recruiter
              </h2>

              <p className="text-slate-400 mt-2">
                Post jobs, manage applicants, and hire talent.
              </p>
            </button>
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedRole || isPending}
            className="w-full mt-8 bg-white text-black font-semibold py-3 rounded-xl hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isPending ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}