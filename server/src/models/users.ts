import { Document, model, Schema} from "mongoose";
import { IUser } from "../interfaces/user";

export type UserDocument = IUser & Document;

const userSchema = new Schema(
  {
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    birth_date: Number,
    sex: String,
    role: { type: [String] },
    information: String,
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

export const UsersModel = model<UserDocument>(
  "Users",
  userSchema
);