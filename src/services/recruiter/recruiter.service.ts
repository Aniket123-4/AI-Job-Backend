import { askAI } from "../ai/ai.service";

import { recruiterPrompt } from "./recruiter.prompt";

import { RecruiterMessageSchema } from "./recruiter.schema";

export async function generateRecruiterMessage(
  resume: unknown,
  jobDescription: string
) {
  const response = await askAI(
    recruiterPrompt(
      resume,
      jobDescription
    )
  );

  return RecruiterMessageSchema.parse(
    JSON.parse(response)
  );
}