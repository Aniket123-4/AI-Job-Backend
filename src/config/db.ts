import { JSONFilePreset } from "lowdb/node";

export type ResumeHistory = {
  id: string;
  createdAt: string;
  originalResume: unknown;
  ats: unknown | null;
  tailoredResume: unknown | null;
  coverLetter: unknown | null;
  recruiterMessage: unknown | null;
  interviewQuestions: unknown | null;
};

type Database = {
  resumes: ResumeHistory[];
};

export const db = await JSONFilePreset<Database>(
  "src/data/history/db.json",
  {
    resumes: [],
  }
);