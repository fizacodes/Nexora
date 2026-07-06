import { notFound } from "next/navigation";
import EducationPage from "../page";
import { prisma } from "@/lib/prisma";



type Props={
    params: Promise<{
       id:string;
    }>
}

export default async function EditExperiencePage({
    params,
}:Props){

    const {id} = await params;

    const education=await prisma.education.findUnique({
        where:{
            id,
        }
    })

    if (!education){
        notFound();
    }
    return <EducationPage education={education}/>
}