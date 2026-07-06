"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { skillSchema } from "@/lib/validators/SkillSchema";
import { success } from "zod";



export async function saveSkill( prevState:any,formData:FormData){
 
    const parsed=skillSchema.safeParse({
        name:formData.get("name")
    })
    if(!parsed.success){
        return{
            success:false,
            message:"Validation Failed",
            errors:parsed.error.flatten().fieldErrors
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

  const skillId=formData.get("skillId")?.toString();

  if(skillId){
    await prisma.skill.update({
        where:{
            id:skillId
        },
        data:parsed.data
    })
  }
  else{
    await prisma.skill.create({
     data:{
         ...parsed.data,
         profileId:profile.id
     }
    })
   

  }
  return{
    success:true,
    message:"Skill saved succesfully",
    errors:{}
  }
}