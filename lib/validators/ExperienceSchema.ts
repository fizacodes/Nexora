import { z } from "zod";

export const experienceSchema = z.object({
  jobTitle: z
    .string()
    .trim()
    .min(2, "Job title must be at least 2 characters.")
    .max(100, "Job title cannot exceed 100 characters."),

  company: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters.")
    .max(100, "Company name cannot exceed 100 characters."),

  location: z
    .string()
    .trim()
    .max(100, "Location cannot exceed 100 characters.")
    .optional(),

  employmentType: z
    .string()
    .trim()
    .max(50, "Employment type cannot exceed 50 characters.")
    .optional(),

 

  description: z
    .string()
    .trim()
    .max(2000, "Description cannot exceed 2000 characters.")
    .optional(),
});