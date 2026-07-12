import { Router } from "express";

import resumeRoutes from "./resume.routes";
import atsRoutes from "./ats.routes";
import tailorRoutes from "./resume-tailor.routes";
import coverLetterRoutes from "./cover-letter.routes";
import recruiterRoutes from "./recruiter.routes";
import interviewRoutes from "./interview.routes";
import historyRoutes from "./history.routes";


const router = Router();

router.use("/resume", resumeRoutes);
router.use("/cover-letter", coverLetterRoutes);
router.use("/ats", atsRoutes);
router.use("/recruiter",
  recruiterRoutes
);
router.use("/interview", interviewRoutes);
router.use("/history", historyRoutes);


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