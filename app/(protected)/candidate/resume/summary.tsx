import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

interface SummarySectionProps {
  summary: string | null;
}

export default function SummarySection({
  summary,
}: SummarySectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between gap-4 ">
        <h2 className="text-3xl font-semibold text-gray-900">
          Summary
        </h2>

        <div className="flex items-center gap-2">
          <Link
            href="/candidate/resume/summary"
            aria-label="Edit summary"
            className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition hover:border-sky-200 hover:text-sky-700 hover:shadow-md"
          >
            <Pencil size={18} />
          </Link>

          <button
            type="button"
            aria-label="Delete summary"
            className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition hover:border-rose-200 hover:text-rose-600 hover:shadow-md"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <p className="leading-8 text-gray-700">
          {summary?.trim() || "No summary added yet."}
        </p>
      </div>
    </section>
  );
}