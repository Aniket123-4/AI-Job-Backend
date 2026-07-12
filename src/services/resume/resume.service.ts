import { parseResume } from "../parser";

import { askAI } from "../ai/ai.service";

import { resumePrompt } from "../ai/prompts/resume.prompt";

import { ResumeSchema } from "../ai/schemas/resume.schema";

import { saveResume } from "../storage/resume.storage";

export async function processResume(
  filePath: string
) {
  const rawText = await parseResume(filePath);

  const prompt = resumePrompt(rawText);

  const response = await askAI(prompt);

  const json = JSON.parse(response);

  const resume = ResumeSchema.parse(json);

  const resumeId = await saveResume(resume);

  return {
    resumeId,
    resume,
  };
}