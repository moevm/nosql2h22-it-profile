import { z } from "zod";

export const LanguageEditSchema = z.object({
  languages: z.string().array()
});
