"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { profileSchema } from "@/lib/validators/profileSchema";
import { revalidatePath } from "next/cache";

export type ProfileState = {
  success: boolean;
  errors?: {
    headline?: string[];
    phone?: string[];
    location?: string[];
    bio?: string[];
  };
};

export async function saveProfile(
  prevState: ProfileState,
  formData: FormData
): Promise<ProfileState> {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const parsed = profileSchema.safeParse({
    headline: formData.get("headline") || undefined,
    phone: formData.get("phone") || undefined,
    location: formData.get("location") || undefined,
    bio: formData.get("bio") || undefined,
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  await prisma.candidateProfile.upsert({
    where: {
      userId: session.user.id,
    },

    create: {
      userId: session.user.id,
      headline: data.headline ?? null,
      phone: data.phone ?? null,
      location: data.location ?? null,
      bio: data.bio ?? null,
    },

    update: {
      headline: data.headline ?? null,
      phone: data.phone ?? null,
      location: data.location ?? null,
      bio: data.bio ?? null,
    },
  });

  revalidatePath("/candidate/profile");

  return {
    success: true,
  };
}