import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ApplyResumeForm from "./ApplyResumeForm";

type Props = {
  params: Promise<{
    jobId: string;
  }>;
};

export default async function ApplyPage({ params }: Props) {
  const { jobId } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    }
  });

  if (!job) {
    notFound();
  }

  return ( 
    <div className="bg-white h-screen text-black">
    <main className="max-w-3xl mx-auto py-10 px-6 bg-white">
      <div className="space-y-2 mb-8">
        <p className="text-sm text-muted-foreground">
          Apply for
        </p>

        <h1 className="text-3xl font-bold">
          {job.title}
        </h1>

        <p className="text-muted-foreground">
          {job.company}
        </p>
      </div>
    
      <ApplyResumeForm jobId={jobId} />
    </main>
    
</div>
  );
}