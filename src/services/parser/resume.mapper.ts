import { extractBasicInfo } from "./extractors/basic.extractor";
import { extractSkills } from "./extractors/skills.extractor";

export function mapResume(text: string) {
  const basic = extractBasicInfo(text);

  return {
    ...basic,

    summary: "",

    skills: extractSkills(text),

    experience: [],

    education: [],

    projects: [],

    certifications: [],

    rawText: text,
  };
}