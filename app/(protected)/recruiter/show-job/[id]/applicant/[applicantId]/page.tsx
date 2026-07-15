import { getApplicationDetails } from "@/app/actions/recruiter/getApplicantsDetail";

interface Props {
  params: Promise<{
    id: string; // Job ID
    applicantId: string; // Application ID
  }>;
}

export default async function ApplicantDetailsPage({
  params,
}: Props) {
  const { id, applicantId } = await params;

  const application = await getApplicationDetails(id, applicantId);

  return (
    <div className="bg-white">
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-black">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <div className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Applicant Profile
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                Applicant Details
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Review the candidate’s background and application materials in a concise, polished layout.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{application.user.name}</p>
              <p>{application.user.email}</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Candidate Information
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-slate-500">Name</p>
                  <p className="mt-1 font-medium text-slate-800">{application.user.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="mt-1 font-medium text-slate-800">{application.user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Headline</p>
                  <p className="mt-1 text-slate-700">{application.profile.headline || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <p className="mt-1 text-slate-700">{application.profile.phone || "Not provided"}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="mt-1 text-slate-700">{application.profile.location || "Not provided"}</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Application Overview</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="font-medium text-slate-500">Resume</p>
                  {application.resumeType === "UPLOADED" ? (
                    <a
                      href={application.resumeUrl ?? "#"}
                      target="_blank"
                      className="mt-1 inline-flex text-blue-600 underline"
                    >
                      View Uploaded Resume
                    </a>
                  ) : (
                    <p className="mt-1">Candidate used the Nexora Resume Builder.</p>
                  )}
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="font-medium text-slate-500">Cover Letter</p>
                  <p className="mt-1 whitespace-pre-wrap text-slate-700">
                    {application.coverLetter || "No cover letter provided."}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Professional Summary</h2>
              <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-700">
                {application.profile.summary || "No summary added."}
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
              {application.profile.skills.length === 0 ? (
                <p className="mt-4 text-slate-700">No skills added.</p>
              ) : (
                <div className="mt-4 flex flex-wrap gap-2">
                  {application.profile.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              )}
            </section>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Experience</h2>
              {application.profile.experiences.length === 0 ? (
                <p className="mt-4 text-slate-700">No experience added.</p>
              ) : (
                <div className="mt-4 space-y-5">
                  {application.profile.experiences.map((experience) => (
                    <div key={experience.id} className="border-b border-slate-200 pb-4 last:border-none last:pb-0">
                      <h3 className="text-lg font-semibold text-slate-900">{experience.jobTitle}</h3>
                      <p className="mt-1 text-slate-700">{experience.company}</p>
                      {experience.location && <p className="text-sm text-slate-500">{experience.location}</p>}
                      {experience.employmentType && <p className="text-sm text-slate-500">{experience.employmentType}</p>}
                      {experience.description && (
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                          {experience.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Education</h2>
              {application.profile.educations.length === 0 ? (
                <p className="mt-4 text-slate-700">No education added.</p>
              ) : (
                <div className="mt-4 space-y-5">
                  {application.profile.educations.map((education) => (
                    <div key={education.id} className="border-b border-slate-200 pb-4 last:border-none last:pb-0">
                      <h3 className="text-lg font-semibold text-slate-900">{education.school}</h3>
                      <p className="mt-1 text-slate-700">{education.degree}</p>
                      {education.field && <p className="text-sm text-slate-500">{education.field}</p>}
                      {education.grade && <p className="text-sm text-slate-500">Grade: {education.grade}</p>}
                      {education.description && (
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                          {education.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}