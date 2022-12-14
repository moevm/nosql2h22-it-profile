import { z } from "zod";

export const CreateUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(24)
});
