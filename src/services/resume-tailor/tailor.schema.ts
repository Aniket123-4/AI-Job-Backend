import { z } from "zod";

export const TailoredResumeSchema = z.object({
  summary: z.string(),

  skills: z.array(z.string()),

  experience: z.array(
    z.object({
      company: z.string(),
      designation: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      technologies: z.array(z.string()),
      responsibilities: z.array(z.string()),
    })
  ),

  projects: z.array(
    z.object({
      name: z.string(),
      technologies: z.array(z.string()),
      description: z.string(),
    })
  ),

  atsScoreBefore: z.number(),

  atsScoreAfter: z.number(),

  changes: z.array(z.string()),
});

export type TailoredResume = z.infer<
  typeof TailoredResumeSchema
>;