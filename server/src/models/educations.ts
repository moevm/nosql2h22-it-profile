import { IEducation } from "../interfaces";
import { model, Schema, Types } from "mongoose";
import { string } from "zod";

export type EducationDocument = IEducation & Document;

const EducationSchema = new Schema(
  {
    name: String,
    type: String,
    level: String,
    start: Number,
    finish: Number,
    specialization: String,
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,

  }
);

export const EducationModel = model<EducationDocument>(
  "educations",
  EducationSchema
);
