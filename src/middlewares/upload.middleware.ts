import { upload } from "../config/multer";

export const uploadResume = upload.single("resume");