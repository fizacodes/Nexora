import { z } from "zod";

export const messageSchema = z.object({
  conversationId: z.string().cuid(),
  content: z
    .string()
    .trim()
    .min(1, "Message cannot be empty.")
    .max(2000, "Message is too long."),
});