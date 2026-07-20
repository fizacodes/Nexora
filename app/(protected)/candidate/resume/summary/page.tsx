"use client";

import { useState, useTransition } from "react";
import { saveSummary } from "@/app/actions/candidate/saveSummary";

export default function SummarySection() {
  const [summary, setSummary] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      const result = await saveSummary(summary);

      if (result.success) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    });
  };

  return (
    <section className="bg-white h-screen">
      <h2 className="mb-4 text-3xl font-semibold text-gray-900">
        Edit Summary
      </h2>

      <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Write a professional summary..."
          className="min-h-40 w-full resize-none outline-none"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={isPending}
        className="mt-4 rounded-md bg-accent px-4 py-2 text-background"
      >
        {isPending ? "Saving..." : "Save"}
      </button>
    </section>
  );
}