import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import JobDetailsPage from "../../components/JobDetailPage";

interface Props {
  params: Promise<{
    jobId: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { jobId } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
    include: {
      recruiterProfile: true,
    },
  });

  if (!job) {
    notFound();
  }

  return <JobDetailsPage job={job} />;
}