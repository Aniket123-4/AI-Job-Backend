import { generate } from "./providers/gemini.provider";

function clean(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export async function askAI(prompt: string) {
  let lastError;

  for (let i = 0; i < 3; i++) {
    try {
      const response = await generate(prompt);

      return clean(response);
    } catch (error) {
      lastError = error;

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );
    }
  }

  throw lastError;
}