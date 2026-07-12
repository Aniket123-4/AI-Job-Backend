import { z } from "zod";

export const ResumeSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  linkedin: z.string(),
  github: z.string(),
  location: z.string(),
  summary: z.string(),

  skills: z.array(z.string()),

  experience: z.array(
    z.object({
      company: z.string(),
      designation: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      technologies: z.array(z.string()),
      responsibilities: z.array(z.string()),
    })
  ),

  education: z.array(
    z.object({
      degree: z.string(),
      institute: z.string(),
      year: z.string(),
    })
  ),

  projects: z.array(
    z.object({
      name: z.string(),
      technologies: z.array(z.string()),
      description: z.string(),
    })
  ),

  certifications: z.array(z.string()),
});

export type Resume = z.infer<typeof ResumeSchema>;