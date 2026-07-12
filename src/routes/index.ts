import { Router } from "express";

import resumeRoutes from "./resume.routes";
import atsRoutes from "./ats.routes";
import tailorRoutes from "./resume-tailor.routes";
import coverLetterRoutes from "./cover-letter.routes";


const router = Router();

router.use("/resume", resumeRoutes);
router.use("/cover-letter", coverLetterRoutes);

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