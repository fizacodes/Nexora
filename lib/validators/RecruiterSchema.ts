import { z } from "zod";

export const recruiterProfileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." }),

  jobTitle: z
    .string()
    .trim()
    .min(2, { message: "Job title is required." }),

  phone: z.string().optional(),

  companyName: z
    .string()
    .trim()
    .min(2, { message: "Company name is required." }),

  companyEmail: z
    .string()
    .trim()
    .email({ message: "Please enter a valid company email." }),

  companyWebsite: z
    .union([
      z.string().trim().url({ message: "Please enter a valid website URL." }),
      z.literal(""),
    ])
    .optional(),

  industry: z.string().optional(),

  companySize: z.enum(
    ["STARTUP", "SMALL", "MEDIUM", "LARGE", "ENTERPRISE"],
    {
      message: "Please select a company size.",
    }
  ),

  country: z.string().optional(),

  city: z.string().optional(),

  address: z.string().optional(),

  description: z
    .string()
    .max(1000, {
      message: "Description cannot exceed 1000 characters.",
    })
    .optional(),
});