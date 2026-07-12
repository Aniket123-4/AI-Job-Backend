export function coverLetterPrompt(
  resume: unknown,
  jobDescription: string
) {
  return `
You are an expert HR Recruiter.

Write a professional ATS optimized Cover Letter.

Rules

- Don't invent experience.

- Use resume information.

- Match Job Description.

- Professional tone.

Return ONLY JSON.

Schema

{
"title":"",
"coverLetter":""
}

Resume

${JSON.stringify(resume)}

Job Description

${jobDescription}
`;
}