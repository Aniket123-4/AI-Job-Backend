import { NextFunction, Request, Response } from "express";

import { AppError } from "@/utils/errors";

export function errorMiddleware(
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  console.error(error);

  if (error instanceof AppError) {
    return res.status(error.status).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}