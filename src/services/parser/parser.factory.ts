import path from "node:path";

import { parsePdf } from "./pdf.parser";
import { parseDocx } from "./docx.parser";

export async function parseResume(filePath: string) {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case ".pdf":
      return parsePdf(filePath);

    case ".docx":
      return parseDocx(filePath);

    default:
      throw new Error("Unsupported File");
  }
}