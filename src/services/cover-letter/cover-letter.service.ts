import { askAI } from "../ai/ai.service";

import { coverLetterPrompt } from "./cover-letter.prompt";

import { CoverLetterSchema } from "./cover-letter.schema";

export async function generateCoverLetter(
  resume: unknown,
  jobDescription: string
) {
  const prompt = coverLetterPrompt(
    resume,
    jobDescription
  );

  const response = await askAI(prompt);

  const json = JSON.parse(response);

  return CoverLetterSchema.parse(json);
}