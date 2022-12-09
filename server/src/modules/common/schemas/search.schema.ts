import { z } from "zod";

export const SearchSchema = z.object({
    specialization: z.array(z.string()).optional(),
    language: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    level: z.array(z.string()).optional(),
    experience: z.object({
        from: z.object({
            value: z.string(),
            type: z.string()
        }).optional(),
        to: z.object({
            value: z.string(),
            type: z.string()
        }).optional()
    }).optional(),
    limit: z.string().refine((val) => !Number.isNaN(Number(val))),
    page: z.string().refine((val) => !Number.isNaN(Number(val)))
});