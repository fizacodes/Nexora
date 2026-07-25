"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import ResumeUploader from "./ResumeUploader";

type Props = {
  jobId: string;
};

export default function ApplyResumeForm({ jobId }: Props) {
  const router = useRouter();

  const [resumeType, setResumeType] = useState<"NEXORA" | "UPLOADED">(
    "NEXORA"
  );

  const [resumeUrl, setResumeUrl] = useState("");

  const handleContinue = () => {
    // Prevent continuing without uploading a resume
    if (resumeType === "UPLOADED" && !resumeUrl) {
      alert("Please upload your resume.");
      return;
    }

    const params = new URLSearchParams();

    params.set("resumeType", resumeType);

    if (resumeType === "UPLOADED") {
      params.set("resumeUrl", resumeUrl);
    }

    router.push(
      `/candidate/jobs/${jobId}/apply/cover-letter?${params.toString()}`
    );
  };

  return (
    <div className="max-w-2xl mx-auto rounded-xl border bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold mb-2">
        Choose Resume
      </h2>

      <p className="text-gray-500 mb-8">
        Select the resume you want to use for this application.
      </p>

      {/* Nexora Resume */}
      <label className="flex items-start gap-3 border rounded-lg p-4 cursor-pointer hover:border-blue-500">
        <input
          type="radio"
          name="resumeType"
          value="NEXORA"
          checked={resumeType === "NEXORA"}
          onChange={() => setResumeType("NEXORA")}
          className="mt-1"
        />

        <div>
          <h3 className="font-semibold">
            Use Nexora Resume
          </h3>

          <p className="text-sm text-gray-500">
            Use the resume you created on Nexora.
          </p>
        </div>
      </label>

      {/* Upload Resume */}
      {/* <label className="flex flex-col gap-3 border rounded-lg p-4 mt-4 cursor-pointer hover:border-blue-500">

        <div className="flex items-start gap-3">

          <input
            type="radio"
            name="resumeType"
            value="UPLOADED"
            checked={resumeType === "UPLOADED"}
            onChange={() => setResumeType("UPLOADED")}
            className="mt-1"
          />

          <div>
            <h3 className="font-semibold">
              Upload Resume
            </h3>

            <p className="text-sm text-gray-500">
              Upload a PDF or DOCX file.
            </p>
          </div>

        </div>

        {/* {resumeType === "UPLOADED" && (
          <ResumeUploader
            resumeUrl={resumeUrl}
            setResumeUrl={setResumeUrl}
          />
        )} 
      </label> */}

      <div className="flex justify-end mt-8">
        <button
          onClick={handleContinue}
          className="bg-accent text-background px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>

    </div>
  );
}