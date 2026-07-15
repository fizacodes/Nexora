"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

type Props = {
  params: Promise<{
    jobId: string;
  }>;
};

export default function SuccessPage() {
  useEffect(() => {
    sessionStorage.removeItem("coverLetter");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-2xl shadow-sm border p-10 max-w-xl w-full text-center">

        <CheckCircle
          className="mx-auto text-green-500"
          size={72}
        />

        <h1 className="text-3xl font-bold mt-6 text-background">
          Application Submitted!
        </h1>

        <p className="text-gray-600 mt-4">
          Your application has been submitted successfully.
          The employer will review your application and contact you if you are shortlisted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <Link
            href="/candidate/applications"
            className="px-6 py-3 rounded-lg bg-accent text-background font-medium hover:opacity-90"
          >
            View My Applications
          </Link>

          <Link
            href="/candidate"
            className="px-6 py-3 rounded-lg border hover:bg-gray-100"
          >
            Browse More Jobs
          </Link>

        </div>

      </div>

    </div>
  );
}