import { askAI } from "../ai/ai.service";

import { tailorPrompt } from "./tailor.prompt";

import { TailoredResumeSchema } from "./tailor.schema";

export async function tailorResume(
  resume: unknown,
  jobDescription: string
) {
  const prompt = tailorPrompt(
    resume,
    jobDescription
  );

  const response = await askAI(prompt);

  const json = JSON.parse(response);

  return TailoredResumeSchema.parse(json);
}