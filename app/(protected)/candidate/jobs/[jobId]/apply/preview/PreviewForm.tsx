"use client"

import { saveApplication } from "@/app/actions/candidate/saveApplication";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PreviewProfile = {
  id: string;
  userId: string;
  headline: string | null;
  summary: string | null;
  phone: string | null;
  location: string | null;
  resumeUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  experiences: Array<{
    id: string;
    jobTitle: string;
    company: string;
    location: string | null;
    employmentType: string | null;
    description: string | null;
    profileId: string;
  }>;
  educations: Array<{
    id: string;
    school: string;
    degree: string;
    field: string | null;
    startDate: Date | null;
    endDate: Date | null;
    grade: string | null;
    description: string | null;
    profileId: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    profileId: string;
  }>;
};

type Props = {
  jobId: string;
  resumeType: string;
  resumeUrl: string;
  profile: PreviewProfile;
};

export default function PreviewForm({
  jobId,
  resumeType,
  resumeUrl,
  profile,
}: Props) {
  const [coverLetter, setCoverLetter] = useState("");

useEffect(() => {
  const savedCoverLetter = sessionStorage.getItem("coverLetter");

  if (savedCoverLetter) {
    setCoverLetter(savedCoverLetter);
  }
}, []);
// const router = useRouter();


const [state, action, pending] = useActionState(
  saveApplication,
  {
    success: false,
    message: "",
    errors: {},
  }
);

const router = useRouter();

useEffect(() => {
  if (state?.success) {
    router.push(`/candidate/jobs/${jobId}/apply/success`);
  }
}, [state, router, jobId]);

  return (
    <form action={action} className="space-y-6 text-black">
        <div>
            <input type="hidden" name="jobId" value={jobId} />
<input type="hidden" name="resumeType" value={resumeType} />
<input type="hidden" name="resumeUrl" value={resumeUrl} />
<input type="hidden" name="coverLetter" value={coverLetter} />
        </div>
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Summary</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {profile.summary ?? "No summary added yet."}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>

        {profile.experiences.length === 0 ? (
          <p className="text-gray-500">No experience added.</p>
        ) : (
          <div className="space-y-6">
            {profile.experiences.map((experience) => (
              <div
                key={experience.id}
                className="border-b last:border-b-0 pb-6 last:pb-0"
              >
                <h3 className="text-lg font-semibold">{experience.jobTitle}</h3>
                <p className="text-gray-700">{experience.company}</p>

                {experience.location && (
                  <p className="text-sm text-gray-500 mt-1">{experience.location}</p>
                )}

                {experience.employmentType && (
                  <p className="text-sm text-gray-500">{experience.employmentType}</p>
                )}

                {experience.description && (
                  <p className="mt-3 whitespace-pre-line text-gray-700">
                    {experience.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>

        {profile.educations.length === 0 ? (
          <p className="text-gray-500">No education added.</p>
        ) : (
          <div className="space-y-6">
            {profile.educations.map((education) => (
              <div
                key={education.id}
                className="border-b last:border-b-0 pb-6 last:pb-0"
              >
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <p className="text-gray-700">{education.school}</p>

                {education.field && (
                  <p className="text-sm text-gray-500 mt-1">{education.field}</p>
                )}

                {education.grade && (
                  <p className="text-sm text-gray-500">Grade: {education.grade}</p>
                )}

                {education.description && (
                  <p className="mt-3 whitespace-pre-line text-gray-700">
                    {education.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>

        {profile.skills.length === 0 ? (
          <p className="text-gray-500">No skills added.</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-4 py-2 rounded-full bg-accent text-background font-medium"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-600">
        <p>Application details:</p>
        <p className="mt-1">Job ID: {jobId}</p>
        <p>Resume type: {resumeType}</p>
        <p>Resume URL: {resumeUrl || "Not provided"}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">

  <h2 className="text-xl font-semibold mb-4">
    Cover Letter
  </h2>

  {coverLetter ? (
    <p className="whitespace-pre-line text-gray-700">
      {coverLetter}
    </p>
  ) : (
    <p className="text-gray-500 italic">
      No cover letter provided.
    </p>
  )}

</div>

<button type="submit" className="bg-accent text-background px-6 py-2 mb-10">
    Submit Application
</button>
    </form>
  );
}
