import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = process.env.AI_MODEL ?? "gemini-3.5-flash";

export async function generate(prompt: string) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: prompt,
  });

  if (!response.text) {
    throw new Error("Empty response from Gemini.");
  }

  return response.text;
}