import { z } from "zod";

export const InsertSpecialtySchema = z.object({
  direction: z.string(),
  level: z.string(),
});

export type InsertSpecialtyPropType = z.infer<typeof InsertSpecialtySchema>