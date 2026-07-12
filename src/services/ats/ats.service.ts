import { askAI } from "../ai/ai.service";

import { atsPrompt } from "./ats.prompt";

import { AtsSchema } from "./ats.schema";

export async function analyzeATS(
  resume: unknown,
  jobDescription: string
) {
  const prompt = atsPrompt(
    resume,
    jobDescription
  );

  const response = await askAI(prompt);

let json;

try {
  json = JSON.parse(response);
} catch {
  throw new Error("Gemini returned invalid JSON.");
}
  return AtsSchema.parse(json);
}