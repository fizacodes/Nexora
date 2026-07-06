import { z } from "zod";

export const signupSchema = z.object({
   name: z.string().min(3, "Name is too short"),
   email: z.string().email("Invalid Email"),
   password: z.string().min(8, "Password must be atleast 8 characters long"),
   role: z.enum(["CANDIDATE", "RECRUITER", "ADMIN"] as const),
});