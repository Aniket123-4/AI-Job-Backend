import { Request, Response } from "express";

import { asyncHandler } from "../utils/async-handler";

import { analyzeATS } from "../services/ats/ats.service";

import { loadResume } from "../services/resume/resume-loader.service";

import { updateResume } from "../services/storage";

export const analyzeATSController = asyncHandler(
  async (req: Request, res: Response) => {
    const { resumeId, jobDescription } = req.body;

    const stored = await loadResume(resumeId);

    const result = await analyzeATS(
      stored.originalResume,
      jobDescription
    );

    await updateResume(resumeId, {
      ats: result,
    });

    return res.json({
      success: true,
      result,
    });
  }
);