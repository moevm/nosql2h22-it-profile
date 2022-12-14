import { z } from "zod";

export const InsertContactSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export type InsertContactPropType = z.infer<typeof InsertContactSchema>