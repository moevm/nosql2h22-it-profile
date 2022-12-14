import { Document, model, Schema } from "mongoose";
import { IAdditionalInformation } from "../interfaces/additionalInformation";

export type AdditionDocument = IAdditionalInformation & Document;

const additionSchema = new Schema(
  {
    city: String,
    about: String,
    country: String,
    specialties: { type: [String] },
    contacts: { type: [String] },
    educations: { type: [String] },
    favorites: { type: [String] },
    experiences: { type: [String] },
    languages: { type: [String] },
    skills: { type: [String] },
  },
  {
    versionKey: false,
  }
);

export const AdditionsModel = model<AdditionDocument>(
  "Additions",
  additionSchema
);
