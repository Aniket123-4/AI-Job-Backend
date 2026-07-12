import { Request, Response } from "express";

import { processResume } from "../services/resume/resume.service";

export async function uploadResumeController(
  req: Request,
  res: Response
) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required.",
      });
    }

    const resume = await processResume(req.file.path);

    return res.json({
      success: true,

      file: {
        originalName: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
      },

      resume,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Resume processing failed.",
    });
  }
}