import { askAI } from "../ai/ai.service";

import { interviewPrompt } from "./interview.prompt";

import { InterviewSchema } from "./interview.schema";

export async function generateInterviewQuestions(
  resume: unknown,
  jobDescription: string
) {
  const response = await askAI(
    interviewPrompt(
      resume,
      jobDescription
    )
  );

  return InterviewSchema.parse(
    JSON.parse(response)
  );
}