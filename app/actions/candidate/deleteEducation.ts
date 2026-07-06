"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export async function deleteEducation(id :string){
    await prisma.education.delete({
        where:{id},
    })
    revalidatePath("/candidate/resume");
}