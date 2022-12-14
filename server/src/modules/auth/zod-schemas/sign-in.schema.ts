import { z } from "zod";

export const sign_in__body = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
});


