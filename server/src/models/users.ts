import { IUser } from "../interfaces";
import { Document, model, Schema, Types } from "mongoose";
import { InformationsModel } from "./informations";

export type UserDocument = IUser & Document;

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    birth_date: { type: Number },
    sex: { type: String },
    roles: { type: [String] },
    information: {
      type: Types.ObjectId,
      ref: InformationsModel.modelName,
      default: null,
    },
    photo: { type: String, default: null },
    password: { type: String },
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

export const UsersModel = model<UserDocument>("Users", userSchema);
