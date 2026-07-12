import { Request, Response } from "express";

import { asyncHandler } from "@/utils/async-handler";

import { loadResume } from "@/services/resume/resume-loader.service";

import { updateResume } from "@/services/storage";

import { generateInterviewQuestions } from "@/services/interview/interview.service";

export const interviewController = asyncHandler(
  async (req: Request, res: Response) => {
    const { resumeId, jobDescription } = req.body;

    const stored = await loadResume(resumeId);

    const result = await generateInterviewQuestions(
      stored.originalResume,
      jobDescription
    );

    await updateResume(resumeId, {
      interviewQuestions: result,
    });

    return res.json({
      success: true,
      result,
    });
  }
);