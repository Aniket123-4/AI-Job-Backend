import { Router } from "express";

import { analyzeATSController } from "../controllers/ats.controller";

const router = Router();

router.post(
  "/analyze",
  analyzeATSController
);

export default router;