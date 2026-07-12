import { Router } from "express";

import resumeRoutes from "./resume.routes";
import atsRoutes from "./ats.routes";

const router = Router();

router.use("/resume", resumeRoutes);

router.use("/ats", atsRoutes);

router.get("/health", (_, res) => {
  res.json({
    success: true,
  });
});

export default router;