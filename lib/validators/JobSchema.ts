import { z } from "zod";

export const jobSchema = z.object({
  title: z
    .string()
    .min(3, "Job title must be at least 3 characters"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),

  location: z
    .string()
    .min(2, "Location is required"),

  type: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACT",
    "INTERNSHIP",
    "REMOTE",
  ]),

  salaryMin: z.string().optional(),

  salaryMax: z.string().optional(),

  isRemote: z.boolean(),
});