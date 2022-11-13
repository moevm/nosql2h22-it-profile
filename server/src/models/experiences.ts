import { Document, model, Schema, Types } from "mongoose";
import { IExperience } from "../interfaces/experience";

export type ExperienceDocument = IExperience & Document;

const experienceSchema = new Schema(
  {
    company: String,
    project_name: String,
    position_in_project: String,
    description: String,
    start: Number,
    end: Number,
    links: { type: [String] },
    tech_stack: { type: [String] },
    created_at: Number,
    updated_at: Number,
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const ExperiencesModel = model<ExperienceDocument>(
  "Experiences",
  experienceSchema
);
