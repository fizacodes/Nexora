import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { prisma } from "@/lib/prisma";
import JobCard from "./JobCard";
import BackButton from "../components/BackButton";

export default async function Page() {
  const recruiter = await getCurrentRecruiter();

  const jobs = await prisma.job.findMany({
    where: {
      recruiterProfileId: recruiter.recruiterProfile!.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
  });

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:px-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">
          My Jobs
        </h1>

        {jobs.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-12 text-center sm:px-10">
            <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">
              No jobs posted yet
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              You haven't posted any jobs yet. Create your first job to start
              receiving applications.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}