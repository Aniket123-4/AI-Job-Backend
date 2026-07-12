export function tailorPrompt(
  resume: unknown,
  jobDescription: string
) {
  return `
You are an expert ATS Resume Writer.

Rewrite this resume according to the Job Description.

Rules

- Never invent fake experience.
- Never invent fake company.
- Never invent fake project.
- Improve wording.
- Add missing keywords naturally.
- Improve ATS score.
- Keep everything truthful.

Return ONLY JSON.

Schema

{
"summary":"",
"skills":[],
"experience":[],
"projects":[],
"atsScoreBefore":0,
"atsScoreAfter":0,
"changes":[]
}

Resume

${JSON.stringify(resume)}

Job Description

${jobDescription}
`;
}