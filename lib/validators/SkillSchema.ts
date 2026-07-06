import { z } from "zod";

export const skillSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Skill is required.")
    .max(50, "Skill cannot exceed 50 characters."),
});