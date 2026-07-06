import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ExperiencePage from "../page";
import SkillPage from "../page";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditSkillPage({
  params,
}: Props) {
  const { id } = await params;

  const skill = await prisma.skill.findUnique({
    where: {
      id,
    },
  });

  if (!skill) {
    notFound();
  }

  return <SkillPage skill={skill} />;
}