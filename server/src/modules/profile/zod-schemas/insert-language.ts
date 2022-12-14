import { z } from "zod";

export const InsertLaguageSchema = z.object({
  title: z.string(),
  level: z.string(),
});

export type InsertLaguagePropType = z.infer<typeof InsertLaguageSchema>