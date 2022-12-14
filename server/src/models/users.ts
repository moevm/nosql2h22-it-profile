import { IUser } from "../interfaces";
import { model, Schema, Types } from "mongoose";

export type UserDocument = IUser & Document;

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    birth_date: { type: Number },
    sex: { type: String },
    role: { type: [String] },
    information: { type: Types.ObjectId, ref: "Information", default: null },
    photo: { type: String, default: null },
    password: { type: String },
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const UserModel = model<UserDocument>("Users", userSchema);
