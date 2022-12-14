import { z } from "zod";
import { ObjectId } from "mongodb";

export const IdSchema = z.object({
  id: z.string().refine((value) => ObjectId.isValid(value), {
    message: "Invalid Mongo ID",
  }),
});

export type IdSchemaType = { id: string };
