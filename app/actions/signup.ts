"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signupSchema } from "@/lib/validators/signupSchema";

export async function signup(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role:formData.get("role")
  };

  const result = signupSchema.safeParse(rawData);

 if (!result.success) {
  const fieldErrors: Record<string, string> = {};

  result.error.issues.forEach((err) => {
    const field = err.path[0];

    if (typeof field === "string") {
      fieldErrors[field] = err.message;
    }
  });

  return {
    success: false,
    errors: fieldErrors,
  };
}

  const { name, email, password, role } = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      errors: {
        email: "User already exists",
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  return {
    success: true,
    errors: {},
  };
}