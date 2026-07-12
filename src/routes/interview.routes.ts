import { Router } from "express";

import { interviewController } from "../controllers/interview.controller";

const router = Router();

router.post("/", interviewController);

export default router;