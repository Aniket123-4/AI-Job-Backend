export const resumePrompt = (resume: string) => `
You are an expert ATS Resume Parser.

Extract the resume.

Return ONLY valid JSON.

Never return markdown.

Never explain anything.

Missing values must be "" or [].

Schema:

{
"name":"",
"email":"",
"phone":"",
"linkedin":"",
"github":"",
"location":"",
"summary":"",
"skills":[],
"experience":[
{
"company":"",
"designation":"",
"startDate":"",
"endDate":"",
"technologies":[],
"responsibilities":[]
}
],
"education":[
{
"degree":"",
"institute":"",
"year":""
}
],
"projects":[
{
"name":"",
"technologies":[],
"description":""
}
],
"certifications":[]
}

Resume:

${resume}
`;