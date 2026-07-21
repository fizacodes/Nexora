"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentRecruiter } from "@/lib/auth/getCurrentRecruiter";
import { jobSchema } from "@/lib/validators/JobSchema";

export async function createJob(
  prevState: any,
  formData: FormData
) {
  try {
    const recruiter = await getCurrentRecruiter();

    if (!recruiter.recruiterProfile) {
      return {
        success: false,
        message: "Please complete your company profile first.",
      };
    }


    const parsed = jobSchema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      location: formData.get("location"),
      type: formData.get("type"),

      salaryMin: formData.get("salaryMin"),
      salaryMax: formData.get("salaryMax"),

      isRemote: formData.get("isRemote") === "on",
    });


    if (!parsed.success) {
      return {
        success: false,
        message: "Validation Failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }


    const {
      title,
      description,
      location,
      type,
      salaryMin,
      salaryMax,
      isRemote,
    } = parsed.data;


    if (!recruiter.recruiterProfile.companyName) {
      return {
        success: false,
        message: "Please complete your company profile first.",
      };
    }

    await prisma.job.create({
      data: {
        title,
        description,

        // coming from recruiter profile
        company: recruiter.recruiterProfile.companyName,

        location,
        type,

        salaryMin: salaryMin
          ? Number(salaryMin)
          : null,

        salaryMax: salaryMax
          ? Number(salaryMax)
          : null,

        isRemote,

        recruiterProfileId:
          recruiter.recruiterProfile.id,
      },
    });


    return {
      success: true,
      message: "Job posted successfully.",
    };


  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}