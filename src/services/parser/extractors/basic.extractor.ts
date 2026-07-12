export function extractBasicInfo(text: string) {
  const email =
    text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? "";

  const phone =
    text.match(/(\+?\d[\d\s-]{8,15}\d)/)?.[0] ?? "";

  const linkedin =
    text.match(/https?:\/\/(www\.)?linkedin\.com\/[^\s]+/i)?.[0] ?? "";

  const github =
    text.match(/https?:\/\/(www\.)?github\.com\/[^\s]+/i)?.[0] ?? "";

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const name = lines[0] ?? "";

  return {
    name,
    email,
    phone,
    linkedin,
    github,
  };
}