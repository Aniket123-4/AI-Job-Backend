export function recruiterPrompt(
  resume: unknown,
  jobDescription: string
) {
  return `
You are an HR Recruiter.

Write a short LinkedIn / Email message.

Rules

Professional

Friendly

Maximum 120 words.

No fake information.

Return ONLY JSON.

Schema

{
"subject":"",
"message":""
}

Resume

${JSON.stringify(resume)}

Job Description

${jobDescription}
`;
}