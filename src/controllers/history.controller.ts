import { Request, Response } from "express";

import { asyncHandler } from "..//utils/async-handler";
import { AppError } from "..//utils/errors";

import {
  deleteHistory,
  getHistory,
  getResume,
} from "../services/storage";

export const historyController = asyncHandler(
  async (_: Request, res: Response) => {
    const history = await getHistory();

    return res.json({
      success: true,
      result: history,
    });
  }
);

export const historyByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const history = await getResume(id);

    if (!history) {
      throw new AppError(404, "History not found.");
    }

    return res.json({
      success: true,
      result: history,
    });
  }
);

export const deleteHistoryController = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const history = await getResume(id);

    if (!history) {
      throw new AppError(404, "History not found.");
    }

    await deleteHistory(id);

    return res.json({
      success: true,
      message: "History deleted successfully.",
    });
  }
);