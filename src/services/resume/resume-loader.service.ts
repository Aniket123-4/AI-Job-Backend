import { AppError } from "@/utils/errors";

import { getResume } from "../storage";

export async function loadResume(
  resumeId: string
) {
  const resume = await getResume(resumeId);

  if (!resume) {
    throw new AppError(
      404,
      "Resume not found."
    );
  }

  return resume;
}