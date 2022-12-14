import { IInformation } from "../interfaces";
import { model, Schema, Types } from "mongoose";
import { EducationModel } from "./educations";
import { ExperienceModel } from "./experience";
export type InformationDocument = IInformation & Document;

const SpecialtySchema = new Schema(
  {
    direction: String,
    level: String,
  },
  { _id: false }
);

const ContactsSchema = new Schema(
  {
    type: String,
    value: String,
  },
  { _id: false }
);

const skillsSchema = new Schema({
  title: String,
  level: String,
});

const InformationSchema = new Schema(
  {
    city: { type: String, default: null },
    about: { type: String, default: "" },
    country: { type: String, default: null },
    specialties: { type: [SpecialtySchema], default: [] },
    contacts: {
      type: [ContactsSchema],
      default: [],
    },
    educations: {
      type: [
        {
          type: Types.ObjectId,
          ref: EducationModel.modelName,
        },
      ],
      default: [],
    },
    favorites: {
      type: [String],
      default: [],
    },
    experiences: {
      type: [
        {
          type: Types.ObjectId,
          ref: ExperienceModel.modelName,
        },
      ],
      default: [],
    },
    languages: { type: [String], default: [] },
    skills: { type: [skillsSchema], default: [] },
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const InformationModel = model<InformationDocument>(
  "Informations",
  InformationSchema
);
