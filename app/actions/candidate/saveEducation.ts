"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { educationSchema } from "@/lib/validators/EducationSchema";



export async function saveEducation(
    prevState:any,
    formData:FormData
){
    const parsed=educationSchema.safeParse({
       school:formData.get("school"),
       degree:formData.get("degree"),
       field:formData.get("field") ,
       startDate:formData.get("startDate"),
       endDate:formData.get("endDate"),
       grade:formData.get("grade"),
       description:formData.get("description")
    })
    
if(!parsed.success){
    return{
        success:false,
        message:"Validation Error",
        errors:parsed.error.flatten().fieldErrors,
    }
}
const session= await auth()

    if (!session) {
    throw new Error("Unauthorized");
  }
 
   const profile = await prisma.candidateProfile.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (!profile) {
    throw new Error("Candidate profile not found.");
  }

  const educationId=formData.get("educationId")?.toString();
 
  if(educationId){
    await prisma.education.update({
        where:{
             id:educationId,
        },
        data:parsed.data
        
    })

  }
  else{
    await prisma.education.create({
        data:{
            ...parsed.data,
            profileId:profile.id
        }
    })
  }
    return {
    success: true,
    message: "Education saved successfully.",
    errors: {},
  };
}
