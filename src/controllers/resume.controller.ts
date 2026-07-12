import { Request, Response } from "express";

export async function uploadResumeController(
  req: Request,
  res: Response
) {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Resume is required.",
    });
  }

  return res.json({
    success: true,

    file: {
      originalName: req.file.originalname,
      fileName: req.file.filename,
      mimeType: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
    },
  });
}