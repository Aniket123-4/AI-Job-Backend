import { z } from "zod";

export const AtsSchema = z.object({
  overallScore: z.number().min(0).max(100),

  skillsScore: z.number().min(0).max(100),

  experienceScore: z.number().min(0).max(100),

  educationScore: z.number().min(0).max(100),

  keywordScore: z.number().min(0).max(100),

  missingKeywords: z.array(z.string()),

  strengths: z.array(z.string()),

  improvements: z.array(z.string()),

  keywordSuggestions: z.array(z.string()),

  rewrittenSummary: z.string(),
});

export type AtsResult = z.infer<typeof AtsSchema>;