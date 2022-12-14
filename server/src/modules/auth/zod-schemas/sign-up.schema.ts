import { z } from "zod";

export const sign_up__body = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
  confirm: z.string().min(8).max(24),
  first_name: z.string(),
  last_name: z.string(),
  birth_date: z.number(),
  sex: z.string(),
  role: z.string().array(),
  information: z.object({}).nullish(),
  photo: z.string().optional(),
});
