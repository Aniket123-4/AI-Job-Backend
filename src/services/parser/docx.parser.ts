import mammoth from "mammoth";

export async function parseDocx(path: string) {
  const result = await mammoth.extractRawText({
    path,
  });

  return result.value;
}