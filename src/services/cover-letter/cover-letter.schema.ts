import { z } from "zod";

export const CoverLetterSchema = z.object({
  title: z.string(),

  coverLetter: z.string(),
});

export type CoverLetter = z.infer<
  typeof CoverLetterSchema
>;