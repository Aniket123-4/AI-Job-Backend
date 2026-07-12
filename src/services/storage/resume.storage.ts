import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const STORAGE = path.join(
  process.cwd(),
  "src",
  "data",
  "history",
  "resumes.json"
);

async function ensureFile() {
  try {
    await fs.access(STORAGE);
  } catch {
    await fs.mkdir(path.dirname(STORAGE), {
      recursive: true,
    });

    await fs.writeFile(STORAGE, "[]");
  }
}

export async function saveResume(resume: unknown) {
  await ensureFile();

  const content = await fs.readFile(STORAGE, "utf-8");

  const resumes = JSON.parse(content);

  const id = randomUUID();

  resumes.push({
    id,
    createdAt: new Date().toISOString(),
    resume,
  });

  await fs.writeFile(
    STORAGE,
    JSON.stringify(resumes, null, 2)
  );

  return id;
}

export async function getResume(id: string) {
  await ensureFile();

  const content = await fs.readFile(STORAGE, "utf-8");

  const resumes = JSON.parse(content);

  return resumes.find(
    (resume: any) => resume.id === id
  );
}