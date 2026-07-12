const SKILLS = [
  "React",
  "React.js",
  "React Native",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Express.js",
  "MongoDB",
  "SQL",
  "SQL Server",
  "SQLite",
  "MySQL",
  "PostgreSQL",
  "MERN",
  "ASP.NET",
  "C#",
  "C++",
  "Java",
  "Python",
  "HTML",
  "HTML5",
  "CSS",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Redux",
  "JWT",
  "REST API",
  "Git",
  "GitHub",
  "Postman",
  "Docker",
  "CI/CD",
  "Agile",
  "Scrum",
  "Vite",
];

export function extractSkills(text: string): string[] {
  const lowerText = text.toLowerCase();

  return SKILLS.filter((skill) =>
    lowerText.includes(skill.toLowerCase())
  ).sort();
}