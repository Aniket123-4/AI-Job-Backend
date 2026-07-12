import multer from "multer";
import { randomUUID } from "node:crypto";
import path from "node:path";

const storage = multer.diskStorage({
  destination(_, __, cb) {
    cb(null, "src/data/uploads");
  },

  filename(_, file, cb) {
    const extension = path.extname(file.originalname);

    cb(null, `${randomUUID()}${extension}`);
  },
});

export const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter(_, file, cb) {
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    cb(null, allowed.includes(file.mimetype));
  },
});