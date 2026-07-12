export function atsPrompt(
  resume: unknown,
  jobDescription: string
) {
  return `
You are an ATS Resume Analyzer.

Analyze the resume against the job description.

Return ONLY valid JSON.

No markdown.

No explanation.

Return scores from 0-100.

Schema:

{
  "overallScore":0,
  "skillsScore":0,
  "experienceScore":0,
  "educationScore":0,
  "keywordScore":0,

  "missingKeywords":[],

  "strengths":[],

  "improvements":[],

  "keywordSuggestions":[],

  "rewrittenSummary":""
}

Resume:

${JSON.stringify(resume)}

Job Description:

${jobDescription}
`;
}