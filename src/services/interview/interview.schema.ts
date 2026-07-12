import { z } from "zod";

export const InterviewSchema = z.object({
  technical: z.array(z.string()),

  behavioral: z.array(z.string()),

  hr: z.array(z.string()),
});

export type InterviewQuestions =
  z.infer<typeof InterviewSchema>;