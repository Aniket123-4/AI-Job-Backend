import { z } from "zod";

export const RecruiterMessageSchema = z.object({
  subject: z.string(),

  message: z.string(),
});

export type RecruiterMessage = z.infer<
  typeof RecruiterMessageSchema
>;