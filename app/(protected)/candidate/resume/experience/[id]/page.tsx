import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ExperiencePage from "../page";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditExperiencePage({
  params,
}: Props) {
  const { id } = await params;

  const experience = await prisma.experience.findUnique({
    where: {
      id,
    },
  });

  if (!experience) {
    notFound();
  }

  return <ExperiencePage experience={experience} />;
}