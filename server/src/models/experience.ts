import { IExperience } from "../interfaces";
import { model, Schema, Types } from "mongoose";
export type ExperienceDocument = IExperience & Document;

const ExperienceSchema = new Schema(
  {
    company: String,
    project_name: String,
    position_in_project: String,
    description: String,
    start: Number,
    end: Number,
    links: [String],
    tech_stack: [String],
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const ExperienceModel = model<ExperienceDocument>(
  "Experiences",
  ExperienceSchema
);
