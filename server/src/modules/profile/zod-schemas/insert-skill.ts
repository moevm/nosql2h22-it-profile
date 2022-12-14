import { z } from "zod";

export const InsertSkillSchema = z.object({
  title: z.string(),
  level: z.string(),
});

export type InsertSkillPropType = z.infer<typeof InsertSkillSchema>