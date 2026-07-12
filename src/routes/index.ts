import { Router } from "express";

import resumeRoutes from "./resume.routes";

const router = Router();

router.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "Backend Working",
  });
});

router.use("/resume", resumeRoutes);

export default router;