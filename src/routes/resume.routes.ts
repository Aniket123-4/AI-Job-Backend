import { Router } from "express";

import { uploadResume } from "@/middlewares/upload.middleware";
import { uploadResumeController } from "@/controllers/resume.controller";

const router = Router();

router.post(
  "/upload",
  uploadResume,
  uploadResumeController
);

export default router;