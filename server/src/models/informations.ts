import { IInformation } from "../interfaces";
import { model, Schema, Types } from "mongoose";
import { EducationsModel } from "./educations";
import { ExperiencesModel } from "./experiences";

export interface InformationDocument extends IInformation, Document {}

const SpecialtySchema = new Schema(
  {
    direction: { type: String, required: true },
    level: { type: String, required: true },
  },
  { versionKey: false }
);

const ContactsSchema = new Schema(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { versionKey: false }
);

const skillsSchema = new Schema(
  {
    title: { type: String, required: true },
    level: { type: String, required: true },
  },
  { versionKey: false }
);

const languageSchema = new Schema(
  {
    title: { type: String, required: true },
    level: { type: String, required: true },
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
          ref: EducationsModel.modelName,
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

export const InformationsModel = model<InformationDocument>(
  "Informations",
  InformationSchema
);
