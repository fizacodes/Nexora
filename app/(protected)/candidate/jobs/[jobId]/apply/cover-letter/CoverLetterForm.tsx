"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  jobId: string;
  resumeType: string;
  resumeUrl: string;
};

export default function CoverLetterForm({
  jobId,
  resumeType,
  resumeUrl,
}: Props) {
  const router = useRouter();

  const [coverLetter, setCoverLetter] = useState("");

  const handleContinue = () => {
    const applicationData = {
      coverLetter,
    };

    sessionStorage.setItem("application", JSON.stringify(applicationData));
    
    router.push(`/candidate/jobs/${jobId}/apply/preview`);
  };

  const handleBack = () => {
    const params = new URLSearchParams();

    params.set("resumeType", resumeType);

    if (resumeUrl) {
      params.set("resumeUrl", resumeUrl);
    }

    router.push(`/candidate/jobs/${jobId}/apply?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-8">
      <h2 className="text-2xl font-bold text-background">Cover Letter</h2>

      <p className="text-gray-500 mt-2">
        Add a cover letter to introduce yourself to the employer. This step is
        optional.
      </p>

      <textarea
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        placeholder="Write your cover letter here..."
        rows={10}
        className="w-full mt-6 border rounded-lg p-4 resize-none outline-none focus:ring-2 focus:ring-accent"
      />

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="px-6 py-2 border rounded-lg hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={handleContinue}
          className="px-6 py-2 bg-accent text-background rounded-lg hover:opacity-90"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
