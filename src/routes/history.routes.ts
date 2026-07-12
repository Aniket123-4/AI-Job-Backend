import { Router } from "express";

import {
  deleteHistoryController,
  historyByIdController,
  historyController,
} from "../controllers/history.controller";

const router = Router();

router.get(
  "/",
  historyController
);

router.get(
  "/:id",
  historyByIdController
);

router.delete(
  "/:id",
  deleteHistoryController
);

export default router;