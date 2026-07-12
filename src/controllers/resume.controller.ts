import { Request, Response } from "express";

import { asyncHandler } from "..//utils/async-handler";
import { AppError } from "..//utils/errors";

import { processResume } from "../services/resume/resume.service";

export const uploadResumeController = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.file) {
      throw new AppError(400, "Resume is required.");
    }

    const result = await processResume(req.file.path);

    return res.json({
      success: true,

      file: {
        originalName: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
      },

      resumeId: result.resumeId,

      resume: result.resume,
    });
  }
);