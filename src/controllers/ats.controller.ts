import { Request, Response } from "express";

import { analyzeATS } from "../services/ats/ats.service";

import { getResume } from "../services/storage";

export async function analyzeATSController(
  req: Request,
  res: Response
) {
  try {
    const { resumeId, jobDescription } = req.body;

    const stored = await getResume(resumeId);

    if (!stored) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }

    const result = await analyzeATS(
      stored.resume,
      jobDescription
    );

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "ATS analysis failed.",
    });
  }
}