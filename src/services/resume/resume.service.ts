import { parseResume } from "../parser";

export async function processResume(filePath: string) {
  const text = await parseResume(filePath);

  return {
    rawText: text,
  };
}