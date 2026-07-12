export function interviewPrompt(
  resume: unknown,
  jobDescription: string
) {
  return `
You are a Senior Technical Interviewer.

Generate interview questions.

Return ONLY JSON.

Schema

{
"technical":[],

"behavioral":[],

"hr":[]
}

Resume

${JSON.stringify(resume)}

Job Description

${jobDescription}
`;
}