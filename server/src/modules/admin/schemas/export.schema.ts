import { z } from "zod";

export const ExportSchema = z.object({
    type: z.enum(['json', 'csv'])
});