import { Request, Response } from "express";

import { asyncHandler } from "@/utils/async-handler";

import { loadResume } from "@/services/resume/resume-loader.service";

import { updateResume } from "@/services/storage";

import { generateCoverLetter } from "@/services/cover-letter/cover-letter.service";

export const generateCoverLetterController = asyncHandler(
  async (req: Request, res: Response) => {
    const { resumeId, jobDescription } = req.body;

    const stored = await loadResume(resumeId);

    const result = await generateCoverLetter(
      stored.originalResume,
      jobDescription
    );

    await updateResume(resumeId, {
      coverLetter: result,
    });

    return res.json({
      success: true,
      result,
    });
  }
);