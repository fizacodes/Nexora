"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/validators/loginSchema";
import { AuthError } from "next-auth";

type LoginState = {
  success: boolean;
  fieldErrors: {
    email?: string;
    password?: string;
  };
  error: string;
};

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validate input
  const parsed = loginSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors: LoginState["fieldErrors"] = {};

    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0];

      if (typeof field === "string") {
        fieldErrors[field as keyof typeof fieldErrors] = issue.message;
      }
    });

    return {
      success: false,
      fieldErrors,
      error: "",
    };
  }

  const { email, password } = parsed.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          success: false,
          fieldErrors: {},
          error: "Invalid email or password.",
        };
      }

      return {
        success: false,
        fieldErrors: {},
        error: "Something went wrong. Please try again.",
      };
    }

    throw error;
  }

  redirect("/post-login");
}