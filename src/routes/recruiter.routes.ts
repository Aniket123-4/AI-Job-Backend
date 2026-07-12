import { Router } from "express";

import { recruiterController } from "../controllers/recruiter.controller";

const router = Router();

router.post("/", recruiterController);

export default router;