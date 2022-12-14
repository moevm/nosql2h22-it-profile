import { z } from "zod";

export const InsertExperienceSchema = z.object({
  company: z.string(),
  project_name: z.string(),
  position_in_project: z.string(),
  description: z.string(),
  start: z.number(),
  end: z.number(),
  links: z.string().array().optional(),
  tech_stack: z.string().array().optional(),
});

export type InsertExperiencePropType = z.infer<typeof InsertExperienceSchema>