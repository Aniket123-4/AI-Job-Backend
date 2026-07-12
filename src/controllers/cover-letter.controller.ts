import { Request, Response } from "express";

import { getResume } from "../services/storage";

import { generateCoverLetter } from "../services/cover-letter/cover-letter.service";

export async function generateCoverLetterController(
  req: Request,
  res: Response
) {
  try {
    const { resumeId, jobDescription } =
      req.body;

    const stored =
      await getResume(resumeId);

    if (!stored) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }

    const result =
      await generateCoverLetter(
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
      message:
        "Cover Letter generation failed.",
    });
  }
}