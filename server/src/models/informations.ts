import { IInformation } from "../interfaces";
import { model, Schema, Types } from "mongoose";
import { EducationModel } from "./educations";
import { ExperiencesModel } from "./experiences";

export interface InformationDocument extends IInformation, Document {}

const SpecialtySchema = new Schema(
  {
    direction: String,
    level: String,
  },
  { versionKey: false }
);

const ContactsSchema = new Schema(
  {
    type: String,
    value: String,
  },
  { versionKey: false }
);

const skillsSchema = new Schema(
  {
    title: String,
    level: String,
  },
  { versionKey: false }
);

const languageSchema = new Schema(
  {
    title: String,
    level: String,
  },
  { versionKey: false }
);

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
      type: [
        {
          type: Types.ObjectId,
          ref: "Users",
        },
      ],
      default: [],
    },
    experiences: {
      type: [
        {
          type: Types.ObjectId,
          ref: ExperiencesModel.modelName,
        },
      ],
      default: [],
    },
    languages: { type: [languageSchema], default: [] },
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
