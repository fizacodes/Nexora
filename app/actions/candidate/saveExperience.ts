"use server";

import { prisma } from "@/lib/prisma";
import { experienceSchema } from "@/lib/validators/ExperienceSchema";
import { auth } from "@/auth";

export async function saveExperience(
  prevState: any,
  formData: FormData
) {
  const parsed = experienceSchema.safeParse({
    jobTitle: formData.get("jobTitle"),
    company: formData.get("company"),
    location: formData.get("location"),
    employmentType: formData.get("employmentType"),
    currentlyWorking: formData.get("currentlyWorking") === "on",
    description: formData.get("description"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message:"Validation Failed",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

    const session= await auth()

    if (!session) {
    throw new Error("Unauthorized");
  }

  console.log("Session user ID:", session.user.id);
 
   const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (!profile) {
    throw new Error("Candidate profile not found.");
  }


console.log("Profile:", profile);

  const experienceId = formData.get("experienceId")?.toString();

  if (experienceId) {
    await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data: parsed.data,
    });
  } else {
    await prisma.experience.create({
      data: {
        ...parsed.data,
        profileId: profile.id,
      },
    });
  }

  return {
    success: true,
    message: "Experience saved successfully.",
    errors: {},
  };
}