import { Router } from "express";

import resumeRoutes from "./resume.routes";
import atsRoutes from "./ats.routes";
import tailorRoutes from "./resume-tailor.routes";


const router = Router();

router.use("/resume", resumeRoutes);

router.use("/ats", atsRoutes);

router.use(
  "/resume-tailor",
  tailorRoutes
);

router.get("/health", (_, res) => {
  res.json({
    success: true,
  });
});

export default router;