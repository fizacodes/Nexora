import { z } from "zod";

export const educationSchema = z.object({
  school: z.string().trim().min(1, "School is required"),

  degree: z.string().trim().min(1, "Degree is required"),

  field: z.string().trim().optional(),

  startDate: z.coerce.date({
  error: "Please select a valid start date.",
}).optional(),
  endDate: z.coerce.date().optional(),

  grade: z.string().trim().optional(),

  description: z.string().trim().optional(),
});