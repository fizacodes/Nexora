import { z } from "zod";

export const profileSchema = z.object({
  headline: z
    .string()
    .min(3, "Headline must be at least 3 characters.")
    .max(100, "Headline is too long.")
    .optional(),

  phone: z
    .string()
    .min(10, "Phone number is too short.")
    .max(20, "Phone number is too long.")
    .optional(),

  location: z
    .string()
    .max(100, "Location is too long.")
    .optional(),

  bio: z
    .string()
    .max(1000, "Bio cannot exceed 1000 characters.")
    .optional(),
});