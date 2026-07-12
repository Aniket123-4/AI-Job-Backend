import { Request, Response } from "express";

import { asyncHandler } from "..//utils/async-handler";

import { loadResume } from "..//services/resume/resume-loader.service";

import { updateResume } from "..//services/storage";

import { generateRecruiterMessage } from "..//services/recruiter/recruiter.service";

export const recruiterController = asyncHandler(
  async (req: Request, res: Response) => {
    const { resumeId, jobDescription } = req.body;

    const stored = await loadResume(resumeId);

    const result = await generateRecruiterMessage(
      stored.originalResume,
      jobDescription
    );

    await updateResume(resumeId, {
      recruiterMessage: result,
    });

    return res.json({
      success: true,
      result,
    });
  }
);