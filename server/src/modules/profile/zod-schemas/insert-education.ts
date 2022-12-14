import { z } from "zod";

export const InsertEducationSchema = z.object({
  name: z.string(),
  type: z.string(),
  specialization: z.string().optional(),
  level: z.string().optional(),
  start: z.number(),
  finish: z.number(),
});

export type InsertEducationPropType = z.infer<typeof InsertEducationSchema>