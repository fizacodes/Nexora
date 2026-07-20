"use server";

import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { prisma } from "@/lib/prisma";
import { recruiterProfileSchema } from "@/lib/validators/RecruiterSchema";
import { redirect } from "next/navigation";

export async function saveRecruiterProfile(
  prevState: any,
  formData: FormData
) {
    const recruiter = await getCurrentRecruiter();

    const parsed = recruiterProfileSchema.safeParse({
  fullName: formData.get("fullName"),
  jobTitle: formData.get("jobTitle"),
  phone: formData.get("phone"),

  companyName: formData.get("companyName"),
  companyEmail: formData.get("companyEmail"),
  companyWebsite: formData.get("companyWebsite"),

  industry: formData.get("industry"),
  companySize: formData.get("companySize"),

  country: formData.get("country"),
  city: formData.get("city"),
  address: formData.get("address"),

  description: formData.get("description"),
});

if (!parsed.success) {
  return {
    success: false,
    message: "Validation Failed",
    errors: parsed.error.flatten().fieldErrors,
  };
}

const {
  fullName,
  jobTitle,
  phone,

  companyName,
  companyEmail,
  companyWebsite,

  industry,
  companySize,

  country,
  city,
  address,

  description,
} = parsed.data;

await prisma.recruiterProfile.upsert({
  where: {
    userId: recruiter.userId,
  },

  update: {
    fullName,
    jobTitle,
    phone,

    companyName,
    companyEmail,
    companyWebsite,

    industry,
    companySize,

    country,
    city,
    address,

    description,
  },

  create: {
    userId: recruiter.userId,

    fullName,
    jobTitle,
    phone,

    companyName,
    companyEmail,
    companyWebsite,

    industry,
    companySize,

    country,
    city,
    address,

    description,
  },
});

redirect("/recruiter")
return {
  success: true,
  message: "Recruiter profile saved successfully.",
};
}