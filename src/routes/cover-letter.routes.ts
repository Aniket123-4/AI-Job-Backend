import { Router } from "express";

import { generateCoverLetterController } from "../controllers/cover-letter.controller";

const router = Router();

router.post(
  "/",
  generateCoverLetterController
);

export default router;