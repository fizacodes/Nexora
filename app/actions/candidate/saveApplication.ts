// "use server"

// import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";
// import { prisma } from "@/lib/prisma";
// import { applicationSchema } from "@/lib/validators/ApplicationSchema";
// import { redirect } from "next/dist/server/api-utils";



// export async function saveApplication(
//     prevState:any,
//     formData:FormData
// ){
     
//     const parsed=await applicationSchema.safeParse({
//       jobId: formData.get("jobId"),
//       resumeType: formData.get("resumeType"),
//       resumeUrl: formData.get("resumeUrl"),
//       coverLetter: formData.get("coverLetter"),
//     })

//     if(!parsed.success){
//         return{
//             success:false,
//             message:"Validation Failed",
//             error: parsed.error.flatten().fieldErrors,
//         }
//     }

//     const candidate= await getCurrentCandidate()

//    const existingApplication = await prisma.application.findUnique({
//   where: {
//     userId_jobId: {
//       userId: candidate.userId,
//       jobId: parsed.data.jobId,
//     },
//   },
// });

// if (existingApplication) {
//   return {
//     success: false,
//     message: "You have already applied for this job.",
//   };
// }

// await prisma.application.create({
//   data: {
//     userId: candidate.userId,
//     profileId: candidate.profileId,
//     jobId: parsed.data.jobId,
//     resumeType: parsed.data.resumeType,
//     resumeUrl:
//       parsed.data.resumeType === "UPLOADED"
//         ? parsed.data.resumeUrl
//         : null,
//     coverLetter: parsed.data.coverLetter,
//   },
// });

// return {
//     success:true,
//     message:"Application Sent.",
//     error:{}
// }

// // Create application

// redirect(`/candidate/jobs/${jobId}/apply/success`);
// }

"use server";

import { redirect } from "next/navigation";

import { getCurrentCandidate } from "@/lib/auth/getCurrentCandidate";
import { prisma } from "@/lib/prisma";
import { applicationSchema } from "@/lib/validators/ApplicationSchema";

export async function saveApplication(
  prevState: any,
  formData: FormData
) {
  const parsed = applicationSchema.safeParse({
    jobId: formData.get("jobId"),
    resumeType: formData.get("resumeType"),
    resumeUrl: formData.get("resumeUrl"),
    coverLetter: formData.get("coverLetter"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation Failed",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const candidate = await getCurrentCandidate();

  if (!candidate) {
    return {
      success: false,
      message: "You must be logged in to apply.",
      errors: {},
    };
  }

  const existingApplication = await prisma.application.findUnique({
    where: {
      userId_jobId: {
        userId: candidate.userId,
        jobId: parsed.data.jobId,
      },
    },
  });

  if (existingApplication) {
    return {
      success: false,
      message: "You have already applied for this job.",
      errors: {},
    };
  }

  await prisma.application.create({
    data: {
      userId: candidate.userId,
      profileId: candidate.profileId,
      jobId: parsed.data.jobId,
      resumeType: parsed.data.resumeType,
      resumeUrl:
        parsed.data.resumeType === "UPLOADED"
          ? parsed.data.resumeUrl
          : null,
      // coverLetter: parsed.data.coverLetter,
    },
  });
  return {
    success: true,
    message: "Application Sent.",
    errors: {},
  };
}