import { z } from "zod";

export const applicationSchema = z
  .object({
    jobId: z.string().cuid("Invalid job ID"),

    resumeType: z.enum(["NEXORA", "UPLOADED"], {
      error: "Please select a resume type.",
    }),

    resumeUrl: z
      .string()
      .url("Invalid resume URL.")
      .optional()
      .or(z.literal("")),

    coverLetter: z
      .string()
      .max(3000, "Cover letter cannot exceed 3000 characters.")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.resumeType === "UPLOADED" && !data.resumeUrl) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["resumeUrl"],
        message: "Please upload your resume.",
      });
    }
  });

export type ApplicationSchema = z.infer<typeof applicationSchema>;