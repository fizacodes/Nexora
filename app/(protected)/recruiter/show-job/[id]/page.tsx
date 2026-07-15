import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import JobDetails from "./JobDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
}