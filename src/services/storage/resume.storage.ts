import { randomUUID } from "node:crypto";

import { db } from "@/config/db";

export async function saveResume(
  resume: unknown
) {
  const id = randomUUID();

  db.data.resumes.push({
    id,
    createdAt: new Date().toISOString(),
    originalResume: resume,
    ats: null,
    tailoredResume: null,
    coverLetter: null,
    recruiterMessage: null,
    interviewQuestions: null,
  });

  await db.write();

  return id;
}

export async function getResume(id: string) {
  return (
    db.data.resumes.find(
      (item) => item.id === id
    ) ?? null
  );
}

export async function getHistory() {
  return db.data.resumes;
}

export async function deleteHistory(id: string) {
  db.data.resumes =
    db.data.resumes.filter(
      (item) => item.id !== id
    );

  await db.write();
}

export async function updateResume(
  id: string,
  data: Partial<{
    ats: unknown;
    tailoredResume: unknown;
    coverLetter: unknown;
    recruiterMessage: unknown;
    interviewQuestions: unknown;
  }>
) {
  const resume =
    db.data.resumes.find(
      (item) => item.id === id
    );

  if (!resume) return null;

  Object.assign(resume, data);

  await db.write();

  return resume;
}