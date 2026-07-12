import { Router } from "express";

import { tailorResumeController } from "../controllers/resume-tailor.controller";

const router = Router();

router.post(
  "/",
  tailorResumeController
);

export default router;