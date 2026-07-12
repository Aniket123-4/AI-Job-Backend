import { Request, Response } from "express";

import { asyncHandler } from "..//utils/async-handler";

import { loadResume } from "..//services/resume/resume-loader.service";

import { updateResume } from "..//services/storage";

import { tailorResume } from "..//services/resume-tailor/tailor.service";

export const tailorResumeController = asyncHandler(
  async (req: Request, res: Response) => {
    const { resumeId, jobDescription } = req.body;

    const stored = await loadResume(resumeId);

    const result = await tailorResume(
      stored.originalResume,
      jobDescription
    );

    await updateResume(resumeId, {
      tailoredResume: result,
    });

    return res.json({
      success: true,
      result,
    });
  }
);