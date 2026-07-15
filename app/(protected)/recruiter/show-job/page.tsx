import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { prisma } from "@/lib/prisma";
import JobCard from "./JobCard";

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
  <main className="bg-white h-screen">
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        My Jobs
      </h1>

      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
    </main>
  );
}