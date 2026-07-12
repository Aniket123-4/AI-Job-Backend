import pdf from "pdf-parse";
import fs from "node:fs/promises";

export async function parsePdf(path: string) {
  const buffer = await fs.readFile(path);

  const result = await pdf(buffer);

  return result.text;
}