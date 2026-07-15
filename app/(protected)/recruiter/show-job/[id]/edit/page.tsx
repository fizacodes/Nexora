import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import JobForm from "@/app/(protected)/recruiter/job/JobForm";

export default async function EditJobPage({
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

  return (
    <JobForm
      job={job}
      isEdit
    />
  );
}